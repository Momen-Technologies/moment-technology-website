import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message)
        return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        subject: `New lead from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Mail error' }, { status: 500 });
    }
}