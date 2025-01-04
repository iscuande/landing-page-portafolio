// re_RDugdJFC_J5F6SLvMBdWN5KVwa7NwwB1B
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/emailTemplate';

const resend = new Resend('prosses.env.RESEND_API_KEY');

export async function POST(req: Request) {
    try {
        const dataForm = await req.json();
        try {
            const data = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: ['iscuande.1982@gmail.com'],
                subject: 'Tarredev landing',
                react: EmailTemplate({
                    firstName: dataForm.username,
                    message: dataForm.message,
                    email: dataForm.email,
                }),
                text: "Tarredev",
            });
            return Response.json(data);
        } catch (error) {
            return Response.json({ error });
        }
    } catch (error) {
        return Response.json({ error });
    }
}