import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, subject, message, name } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `My Portfolio Contact <${process.env.RESEND_FROM_EMAIL}>`,
      to: [`${process.env.RESEND_TO_EMAIL}`],
      subject,
      react: EmailTemplate({ message, email, name }),
      text: message,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}