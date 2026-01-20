import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const ContactSchema = z.object({
  nome: z.string().min(2, "Nome inválido").max(100),
  email: z.string().email("E-mail inválido").max(120),
  telefone: z.string().max(40).optional().or(z.literal("")),
  mensagem: z.string().min(10, "Mensagem muito curta").max(2000),
  // honeypot anti-spam: precisa vir vazio
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = ContactSchema.parse(json);

    // honeypot
    if (data.company && data.company.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendKey || !toEmail) {
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail ausente no servidor." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const subject = `Contato pelo site — ${data.nome}`;
    const text = [
      "Novo contato recebido pelo site:",
      "",
      `Nome: ${data.nome}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.telefone || "-"}`,
      "",
      "Mensagem:",
      data.mensagem,
      "",
      "—",
      "Site institucional (conteúdo informativo).",
    ].join("\n");

    await resend.emails.send({
      from: "Site Nathalia <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: data.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    const msg =
      err?.issues?.[0]?.message ||
      err?.message ||
      "Não foi possível enviar. Tente novamente.";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
