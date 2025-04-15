import { Types } from "mongoose";
import { v2 as cloudinary } from 'cloudinary';
import Event from "@/app/models/Events";
import connectViaMongoose from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

interface UploadResult {
  secure_url: string;
  public_id: string;
}

interface UpdateEventData {
  title: string;
  description: string;
  date: string;
  location: string;
  mediaType: string;
  mediaUrl?: string;
}

export const PUT = async (req: Request) => {
  try {
    await connectViaMongoose();

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id || !Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Valid event ID is required" },
        { status: 400 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("media") as File | null;

    const updateData: UpdateEventData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: formData.get("date") as string,
      location: formData.get("location") as string,
      mediaType: formData.get("mediaType") as string,
    };

    if (file) {
      const buffer = await file.arrayBuffer();

      const uploadResult = await new Promise<UploadResult>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) return reject(error);
            if (!result) return reject(new Error("No result from Cloudinary"));

            resolve({
              secure_url: result.secure_url,
              public_id: result.public_id
            });
          }
        ).end(Buffer.from(buffer));
      });

      updateData.mediaUrl = uploadResult.secure_url;
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request) => {
  try {
    await connectViaMongoose();

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id || !Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Valid event ID is required" },
        { status: 400 }
      );
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Event deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 }
    );
  }
};
