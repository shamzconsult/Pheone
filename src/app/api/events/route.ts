import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import Event from "@/app/models/Events";
import connectViaMongoose from "@/lib/mongodb";

interface UploadResult {
  secure_url: string;
  public_id: string;
}

export interface ApiEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  mediaType: string;
  mediaUrl: string;
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const formData = await req.formData();
    const { title, description, date, location, mediaType } = Object.fromEntries(formData);
    const mediaFile = formData.get("media") as File;

    if (!title || !description || !date || !location || !mediaType || !mediaFile) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Upload media to Cloudinary
    const arrayBuffer = await mediaFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const uploadResult = await new Promise<UploadResult>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: mediaType === 'video' ? 'video' : 'image',
          folder: "events"
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            reject(error);
          } else if (result) {
            resolve({
              secure_url: result.secure_url,
              public_id: result.public_id
            });
          } else {
            reject(new Error('Unknown upload error'));
          }
        }
      ).end(buffer);
    });
    

    const newEvent = await Event.create({
      title,
      description,
      date,
      location,
      mediaUrl: uploadResult.secure_url, 
      mediaType
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { message: "Failed to create event", err },
      { status: 500 }
    );
  }
}

export async function GET() {
    try {
        await connectViaMongoose();
       const events = await Event.find().sort({ createdAt: -1 })
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching events", error },
            { status: 500 }
        )
    }
}

