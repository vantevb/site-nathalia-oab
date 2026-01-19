import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const nome = String(body?.nome ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const telefone = String(body?.telefone ?? "").trim();
    const cidade = String(body?.cidade ?? "").trim();
    const assunto = String(body?.assunto ?? "").trim();
    const mensagem = String(body?.mensagem ?? "").trim();

    // Anti-spam: honeypot + tempo mínimo (ms)
    const website = String(body?.website ?? "").trim(); // campo escondido
    const startedAt = Number(body?.startedAt ?? 0);
    const now = Date.now();
    if (website.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    if (!startedAt || now - startedAt < 2500) {
      return NextResponse.json({ ok: false, error: "Envio muito rápido. Tente novamente." }, { status: 429 });
    }

    // Validação
    if (nome.length < 2) {
      return NextResponse.json({ ok: false, error: "Informe seu nome." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Informe um e-mail válido." }, { status: 400 });
    }
    if (cidade.length < 2) {
      return NextResponse.json({ ok: false, error: "Informe sua cidade." }, { status: 400 });
    }
    if (assunto.length < 3) {
      return NextResponse.json({ ok: false, error: "Informe o assunto." }, { status: 400 });
    }
    if (mensagem.length < 10) {
      return NextResponse.json({ ok: false, error: "Escreva uma mensagem com mais detalhes." }, { status: 400 });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || "587");
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    const MAIL_TO = process.env.MAIL_TO; // e-mail da advogada
    const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER; // remetente

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO || !MAIL_FROM) {
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail ausente no servidor." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `[Site] Contato: ${assunto} — ${nome} (${cidade})`;

    const text = [
      "Novo contato recebido pelo site:",
      "",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone || "(não informado)"}`,
      `Cidade: ${cidade}`,
      `Assunto: ${assunto}`,
      "",
      "Mensagem:",
      mensagem,
      "",
      "Observação: conteúdo informativo; sem promessa de resultado; cada caso exige análise individualizada.",
    ].join("\n");

    await transporter.sendMail({
      from: `Site — Nathalia Guaraciaba <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar. Tente novamente em instantes." },
      { status: 500 }
    );
  }
}
