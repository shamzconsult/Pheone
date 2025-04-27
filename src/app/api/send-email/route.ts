import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST (req: NextRequest) {
    try {
        const { name, email, phone, subject, message } = await req.json();

        // if (!name || !email || !phone || !subject || !message) {
        //     return NextResponse.json(
        //         { error: "All fields are required." },
        //         { status: 400 }
        //       );
        // }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        await transporter.sendMail({
            from: email, 
            to: 'Phebeanneuro@gmail.com',
            subject: `Message from ${subject}`,
            text: `Hi Phebean neurodiversity, I am ${name}, 
            Here is my message ${message}
            Thanks,
            Best Regards,
            ${phone}
            ${name}`,
        });

        return NextResponse.json(
            { success: true, message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
          { error: "Failed to send email." },
          { status: 500 }
        );
    }
}