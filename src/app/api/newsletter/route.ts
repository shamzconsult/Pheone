import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const DC = process.env.MAILCHIMP_DATA_CENTER

  const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["website"],   // <-- your "website" tag
      }),
    })

    const data = await response.json()

    // 400 with title "Member Exists" means already subscribed
    if (!response.ok && data.title !== "Member Exists") {
      return NextResponse.json({ error: data.detail || "Subscription failed" }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 })
  }
}