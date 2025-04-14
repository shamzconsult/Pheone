import Admin from '@/app/models/Admin';
import connectViaMongoose from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await connectViaMongoose();
    const { username, password } = await req.json();

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return NextResponse.json({ error: 'Admin already exists' }, { status: 400 });
    }

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    return NextResponse.json({ message: 'Admin created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
