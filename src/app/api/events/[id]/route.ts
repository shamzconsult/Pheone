import { Types } from "mongoose";
import Event from "@/app/models/Events";
import connectViaMongoose from "@/lib/mongodb";
import { NextResponse } from "next/server";

interface FormDataEntries {
_id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  mediaType: string;
  media: File | null;
}

async function parseFormData(req: Request): Promise<FormDataEntries> {
  const formData = await req.formData();
  
  return {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    date: formData.get("date") as string,
    location: formData.get("location") as string,
    mediaType: formData.get("mediaType") as string,
    media: formData.get("media") as File | null,
  };
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

    const { title, description, date, location, mediaType, media } = await parseFormData(req);

    const existingEvent = await Event.findById(id);
    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const updateData = {
      title,
      description,
      date,
      location,
      mediaType,
      ...(media && media.size > 0 && {
        mediaUrl: `/uploads/${media.name}`,
        mediaName: media.name
      })
    };

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

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