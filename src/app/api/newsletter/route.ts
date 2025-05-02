import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        }
    });

    try {
        await transporter.sendMail({
          from: `"Website Newsletter" <${process.env.GMAIL_USER}>`,
          to: 'phebeanneuro@gmail.com',
          subject: 'New Newsletter Subscriber',
          text: `New subscriber: ${email}`,
          html: `
            <h3>New Newsletter Signup</h3>
            <p>Email: ${email}</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          `
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json(
          { error: "Failed to process subscription" },
          { status: 500 }
        );
      }  
}