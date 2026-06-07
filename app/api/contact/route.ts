import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function appendToSheet(row: string[]) {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!url) throw new Error("GOOGLE_APPS_SCRIPT_URL is not set");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ row }),
  });

  if (!res.ok) throw new Error("Failed to write to Google Sheet");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const sheetRow = [timestamp, name, phone, email, subject, message];
    await appendToSheet(sheetRow);

    await resend.emails.send({
      from: "Araaya Website <onboarding@resend.dev>",
      to: [process.env.NOTIFICATION_EMAIL ?? "abhishek@theinterconnections.com"],
      subject: `New Lead: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 24px; border-bottom: 1px solid #eee; padding-bottom: 12px;">
            New Enquiry — Araaya International
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #888; width: 100px;">Name</td><td style="padding: 8px 0; font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${message}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Received</td><td style="padding: 8px 0; color: #888;">${timestamp}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
