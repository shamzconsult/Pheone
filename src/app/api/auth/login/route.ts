import Admin from "@/app/models/Admin";
import connectViaMongoose from "@/lib/mongodb"
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';


const POST = async (req: Request) => {
    try{
        await connectViaMongoose();
        const { username, password } = await req.json();

        if(!username || !password) {
            return NextResponse.json(
                { message: "All fields required" },
                { status: 400 }
            )
        }
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        };

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
        response.cookies.set('token', token, { httpOnly: true, secure: true, sameSite: 'strict', path: '/' });

        return response;

    } catch (error) {
        return NextResponse.json({ message: 'Server error', error }, { status: 500 });
    }
}

export { POST }