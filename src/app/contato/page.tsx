"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function onlyDigits(v: string) {
  return (v || "").replace(/\D/g, "");
}

export default function ContatoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries()) as Record<string, string>;

    // Honeypot anti-spam: se preencher, finge sucesso e não faz nada
    if (payload.company) {
      setStatus("success");
      formEl.reset();
      return;
    }

    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const number = onlyDigits(rawNumber);

    if (!number) {
      setStatus("error");
      setError("WhatsApp não configurado. Informe o número (NEXT_PUBLIC_WHATSAPP_NUMBER).");
      return;
    }

    const nome = (payload.nome || "").trim();
    const email = (payload.email || "").trim();
    const telefone = (payload.telefone || "").trim();
    const mensagem = (payload.mensagem || "").trim();

    const text = [
      "Olá, Dra. Nathalia.",
      "",
      "Gostaria de solicitar contato para informações iniciais.",
      "",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      telefone ? `Telefone: ${telefone}` : null,
      "",
      "Mensagem:",
      mensagem,
      "",
      "—",
      "Conteúdo de caráter informativo. Não substitui consulta jurídica. Não há promessa de resultado.",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    try {
      // tenta abrir em nova aba; se o browser bloquear, cai no fallback
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win) {
        window.location.assign(url);
      }

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setError("Não foi possível abrir o WhatsApp. Tente novamente.");
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <header className="space-y-3">
        <div
          className="text-xs font-semibold tracking-[0.22em] uppercase"
          style={{ color: "rgb(var(--muted))" }}
        >
          Contato
        </div>
        <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
          Solicitar contato
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
          Envie uma mensagem com um resumo do assunto. O retorno será realizado conforme disponibilidade.
        </p>
        <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(199,164,74,0.22)" }} />
      </header>

      <section className="rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgb(var(--border))" }}>
        <div className="p-8">
          <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="text-xs font-semibold" style={{ color: "rgb(var(--muted))" }}>
                Nome
              </label>
              <input
                name="nome"
                required
                minLength={2}
                className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none"
                style={{ borderColor: "rgb(var(--border))" }}
                placeholder="Seu nome"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-xs font-semibold" style={{ color: "rgb(var(--muted))" }}>
                E-mail
              </label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none"
                style={{ borderColor: "rgb(var(--border))" }}
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-semibold" style={{ color: "rgb(var(--muted))" }}>
                Telefone (opcional)
              </label>
              <input
                name="telefone"
                className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none"
                style={{ borderColor: "rgb(var(--border))" }}
                placeholder="(xx) xxxxx-xxxx"
              />
            </div>

            {/* Honeypot anti-spam: não mexer */}
            <div className="hidden">
              <label>Company</label>
              <input name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-semibold" style={{ color: "rgb(var(--muted))" }}>
                Mensagem
              </label>
              <textarea
                name="mensagem"
                required
                minLength={10}
                rows={6}
                className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none"
                style={{ borderColor: "rgb(var(--border))" }}
                placeholder="Descreva brevemente o assunto."
              />
              <p className="mt-3 text-xs leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
                Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada.
                Não há promessa de resultado.
              </p>
            </div>

            <div className="md:col-span-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-2xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
                style={{ backgroundColor: "rgb(var(--accent))" }}
              >
                {status === "loading" ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
              </button>

              {status === "success" ? (
                <span className="text-sm font-semibold" style={{ color: "rgb(var(--accent))" }}>
                  Conversa aberta no WhatsApp.
                </span>
              ) : null}

              {status === "error" ? <span className="text-sm font-semibold text-red-600">{error}</span> : null}
            </div>
          </form>
        </div>

        <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(199,164,74,0.22)" }} />
      </section>
    </main>
  );
}
