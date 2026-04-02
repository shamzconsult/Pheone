import { NextResponse } from "next/server";
import connectViaMongoose from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import Popup from "@/app/models/popup";

export const dynamic = "force-dynamic";

type PopupUpdateData = {
    image?: string;
    images?: string[];
    isActive?: boolean;
    showOncePerSession?: boolean;
    startsAt?: Date | null;
    endsAt?: Date | null;
  };

export async function POST(req: Request) {
    try {
      await connectViaMongoose();
  
      const body = await req.json();
      const {
        images,
        isActive,
        showOncePerSession,
        startsAt,
        endsAt,
      } = body;
  
      if (!images || !Array.isArray(images) || images.length === 0) {
        return NextResponse.json(
          { message: "Title and at least one image are required" },
          { status: 400 }
        );
      }

      const parsedStartsAt = startsAt ? new Date(startsAt) : null;
      const parsedEndsAt = endsAt ? new Date(endsAt) : null;

    if (
      parsedStartsAt &&
      parsedEndsAt &&
      parsedStartsAt.getTime() > parsedEndsAt.getTime()
    ) {
      return NextResponse.json(
        { message: "Start date cannot be later than end date" },
        { status: 400 }
      );
    }
  
      const uploadedImages = await Promise.all(
        images.map(async (img: string) => {
          if (img.startsWith("http")) return img;
  
          const uploaded = await cloudinary.uploader.upload(img, {
            folder: "popup-fliers",
          });
          return uploaded.secure_url;
        })
      );
  
      if (isActive === true) {
        await Popup.updateMany({}, { $set: { isActive: false } });
      }
  
      const popup = await Popup.create({
        images: uploadedImages,
        isActive: isActive ?? true,
        showOncePerSession: showOncePerSession ?? true,
        startsAt: parsedStartsAt,
        endsAt: parsedEndsAt,
      });
  
      return NextResponse.json(popup, { status: 201 });
    } catch (error) {
      console.error("POST popup error:", error);
      return NextResponse.json(
        { message: "Failed to create popup" },
        { status: 500 }
      );
    }
  }

export async function GET() {
  try {
    await connectViaMongoose();

    const popups = await Popup.find().sort({ createdAt: -1 });

    return NextResponse.json(popups, { status: 200 });
  } catch (error) {
    console.error("GET popup error:", error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function PUT(req: Request) {
    try {
      await connectViaMongoose();
  
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
  
      if (!id) {
        return NextResponse.json(
          { message: "Popup ID is required" },
          { status: 400 }
        );
      }
  
      const body = await req.json();
      const {
        image,
        images,
        isActive,
        showOncePerSession,
        startsAt,
        endsAt,
      } = body;
  
      const updateData: PopupUpdateData = {};
  
      const parsedStartsAt = startsAt ? new Date(startsAt) : null;
        const parsedEndsAt = endsAt ? new Date(endsAt) : null;

        if (
        parsedStartsAt &&
        parsedEndsAt &&
        parsedStartsAt.getTime() > parsedEndsAt.getTime()
        ) {
        return NextResponse.json(
            { message: "Start date cannot be later than end date" },
            { status: 400 }
        );
        }

        if (startsAt !== undefined) updateData.startsAt = parsedStartsAt;
        if (endsAt !== undefined) updateData.endsAt = parsedEndsAt;

      if (isActive !== undefined) updateData.isActive = isActive;
      if (showOncePerSession !== undefined) {
        updateData.showOncePerSession = showOncePerSession;
      }
  
      if (image) {
        if (image.startsWith("http")) {
          updateData.image = image;
        } else {
          const uploadedImage = await cloudinary.uploader.upload(image, {
            folder: "popup-fliers",
          });
          updateData.image = uploadedImage.secure_url;
        }
      }
  
      if (images && Array.isArray(images)) {
        const uploadedImages = await Promise.all(
          images.map(async (img: string) => {
            if (img.startsWith("http")) return img;
  
            const uploaded = await cloudinary.uploader.upload(img, {
              folder: "popup-fliers",
            });
            return uploaded.secure_url;
          })
        );
  
        updateData.images = uploadedImages;
      }
  
      if (isActive === true) {
        await Popup.updateMany(
          { _id: { $ne: id } },
          { $set: { isActive: false } }
        );
      }
  
      const updatedPopup = await Popup.findByIdAndUpdate(id, updateData, {
        new: true,
      });
  
      if (!updatedPopup) {
        return NextResponse.json({ message: "Popup not found" }, { status: 404 });
      }
  
      return NextResponse.json(updatedPopup, { status: 200 });
    } catch (error) {
      console.error("PUT popup error:", error);
      return NextResponse.json(
        { message: "Failed to update popup" },
        { status: 500 }
      );
    }
  }

export async function DELETE(req: Request) {
  try {
    await connectViaMongoose();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Popup ID is required" },
        { status: 400 }
      );
    }

    const deletedPopup = await Popup.findByIdAndDelete(id);

    if (!deletedPopup) {
      return NextResponse.json({ message: "Popup not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Popup deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE popup error:", error);
    return NextResponse.json(
      { message: "Failed to delete popup" },
      { status: 500 }
    );
  }
}