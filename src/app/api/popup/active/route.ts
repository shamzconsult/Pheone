import { NextResponse } from "next/server";
import connectViaMongoose from "@/lib/mongodb";
import Popup from "@/app/models/popup";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectViaMongoose();

    const now = new Date();

    const popup = await Popup.findOne({
        isActive: true,
        $and: [
          { $or: [{ startsAt: null }, { startsAt: { $lte: now } }] },
          { $or: [{ endsAt: null }, { endsAt: { $gte: now } }] },
        ],
    }).sort({ createdAt: -1 });

    return NextResponse.json(popup || null, { status: 200 });
  } catch (error) {
    console.error("GET active popup error:", error);
    return NextResponse.json(null, { status: 500 });
  }
}