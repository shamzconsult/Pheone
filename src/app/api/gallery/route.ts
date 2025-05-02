import { NextResponse } from "next/server";
import connectViaMongoose from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import Gallery from "@/app/models/gallery";

export async function POST(req: Request) {
  try {
    await connectViaMongoose();
    const body = await req.json();
    const { description, image } = body;

    if (!description || !image) {
      return NextResponse.json({ message: "All fields required" }, { status: 400 });
    }

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: "gallery",
    });

    const newImage = await Gallery.create({
      description,
      image: uploadedImage.secure_url,
    });

    return NextResponse.json(newImage, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to upload", err }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic'; 

export async function GET() {
  try {
    await connectViaMongoose();
    const images = await Gallery.find().sort({ createdAt: -1 });
    return NextResponse.json(images);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}

export async function PUT(req: Request) {
    try {
      await connectViaMongoose();
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      const body = await req.json();
      const { description, image } = body;
  
      if (!id) {
        return NextResponse.json({ message: "Image ID required" }, { status: 400 });
      }
  
      const updateData: { description: string; image?: string } = { description };
  
      // If image is being updated (new image provided)
      if (image && !image.startsWith("http")) {
        const uploadedImage = await cloudinary.uploader.upload(image, {
          folder: "gallery",
        });
        updateData.image = uploadedImage.secure_url;
      }
  
      const updatedImage = await Gallery.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedImage) {
        return NextResponse.json({ message: "Image not found" }, { status: 404 });
      }
  
      return NextResponse.json(updatedImage, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Failed to update image", err }, { status: 500 });
    }
  }

  export async function DELETE(req: Request) {
    try {
      await connectViaMongoose();
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
  
      if (!id) {
        return NextResponse.json({ message: "Image ID required" }, { status: 400 });
      }
  
      const deletedImage = await Gallery.findByIdAndDelete(id);
  
      if (!deletedImage) {
        return NextResponse.json({ message: "Image not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Image deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Failed to delete image", err }, { status: 500 });
    }
  }