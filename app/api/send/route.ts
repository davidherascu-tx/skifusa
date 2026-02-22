import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Added a fallback string 're_dummy_key' so the build doesn't crash!
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['david.herascu@gmail.com'],
      subject: `New Submission: ${formType}`,
      react: await EmailTemplate({ formType, data: formData }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}