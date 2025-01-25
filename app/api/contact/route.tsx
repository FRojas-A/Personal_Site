import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest, res: NextResponse) {
  const username = process.env.NOREPLY_EMAIL;
  const password = process.env.NOREPLY_EMAIL_PASSWORD;
  const myEmail = "frankrojas215@gmail.com";

  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 },
    );
  }
}
