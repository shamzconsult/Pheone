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
            from: `"Phebean Neurodiversity Contact Form" <${process.env.EMAIL_USER}>`,
            replyTo: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact: ${subject}`,
            html: `
              <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; color: #333;">
                <div style="background: #4F46E5; padding: 20px; text-align: center;">
                  <h1 style="color: white; margin: 0;">New Message Received</h1>
                </div>
                
                <div style="padding: 20px; line-height: 1.6;">
                  <p style="font-size: 16px;">Hello Phebean Neurodiversity Team,</p>
                  
                  <div style="background: #F3F4F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <p style="font-weight: 500; margin-bottom: 5px;">From: ${name}</p>
                    <p style="margin-top: 0;">${message}</p>
                  </div>
                  
                  <p style="font-size: 16px;"><strong>Contact Details:</strong></p>
                  <ul style="margin-top: 5px; padding-left: 20px;">
                    <li>Email: ${email}</li>
                    <li>Phone: ${phone || 'Not provided'}</li>
                  </ul>
                </div>
                
                <div style="background: #F9FAFB; padding: 15px; text-align: center; font-size: 14px; color: #6B7280;">
                  <p style="margin: 0;">This message was sent via your website contact form</p>
                  <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Phebean Neurodiversity</p>
                </div>
              </div>
            `,
            text: `
              New Contact Form Submission
              --------------------------
              From: ${name}
              Email: ${email}
              Phone: ${phone || 'Not provided'}
              
              Message:
              ${message}
              
              --------------------------
              Sent via Phebean Neurodiversity website
            `
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