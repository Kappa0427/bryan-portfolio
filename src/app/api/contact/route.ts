import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Make sure all fields are completed
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please complete all fields." },
        { status: 400 }
      );
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Prevent extremely large submissions
    if (
      name.length > 100 ||
      email.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "Your message is too long." },
        { status: 400 }
      );
    }

    // Send email through Resend
    const { error } = await resend.emails.send({
      from: "Bryan Portfolio <onboarding@resend.dev>",

      // CHANGE THIS TO YOUR EMAIL ADDRESS
      to: ["kappaprid1021@gmail.com"],

      replyTo: email,

      subject: `Portfolio message from ${name}`,

      text: `
New portfolio contact submission

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Unable to send your message." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Unable to process your message." },
      { status: 500 }
    );
  }
}