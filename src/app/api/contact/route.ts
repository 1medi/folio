import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";
import { ContactEmail } from "../../../../emails/contactEmail";
import { createElement } from "react";
import { ContactFormType } from "../../../../components/contact/interfaces";

const SENDER_EMAIL = "no-reply@maditabon.dev";
const RECEIVER_EMAIL = "maditabon33@gmail.com";

export async function POST(req: Request) {
  try {
    const data: ContactFormType = await req.json();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const html = await render(createElement(ContactEmail, data));

    const msg = {
      to: RECEIVER_EMAIL,
      from: SENDER_EMAIL,
      subject: `New Contact Form Submission from '${data.name}'`,
      html: html,
    };

    sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}