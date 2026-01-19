"use client";

import { useMemo, useState } from "react";

export default function ContatoPage() {
  const startedAt = useMemo(() => Date.now(), []);
  const [loading, setLoading] = useState(false);
  const [okMsg, setOkMsg] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOkMsg(null);
    setErrMsg(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const payload = {
      nome: String(form.get("nome") || ""),
      email: String(form.get("email") || ""),
      telefone: String(form.get("telefone") || ""),
      cidade: String(form.get("cidade") || ""),
      assunto: String(form.get("assunto") || ""),
      mensagem: String(form.get("mensagem") || ""),

      // anti-spam
      website: String(form.get("website") || ""),
      startedAt,
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setErrMsg(data?.error || "Não foi possível enviar. Tente novamente.");
        return;
      }

      (e.currentTarget as HTMLFormElement).reset();
      setOkMsg("Mensagem enviada. Em breve você receberá um retorno, conforme disponibilidade.");
    } catch {
      setErrMsg("Falha de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Contato</h1>
        <p className="text-zinc-700 leading-relaxed">
          Envie uma mensagem com um resumo do assunto e sua cidade. O retorno é realizado conforme
          disponibilidade e ordem de recebimento.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 space-y-5">
        <h2 className="text-lg font-semibold">Formulário</h2>

        {okMsg && (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800">
            {okMsg}
          </div>
        )}
        {errMsg && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {errMsg}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {/* honeypot (deixe invisível) */}
          <div className="hidden">
            <label>
              Website
              <input name="website" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-900">Nome</label>
              <input
                name="nome"
                required
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="Seu nome"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-900">E-mail</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-900">Telefone (opcional)</label>
              <input
                name="telefone"
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="(DDD) 99999-9999"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-900">Cidade</label>
              <input
                name="cidade"
                required
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="Niterói / São Gonçalo / Rio de Janeiro..."
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-900">Assunto</label>
            <input
              name="assunto"
              required
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
              placeholder="Ex.: Análise de contrato / cobrança / responsabilidade civil"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-900">Mensagem</label>
            <textarea
              name="mensagem"
              required
              rows={6}
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
              placeholder="Descreva o caso de forma objetiva (prazos, documentos, contexto)."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex rounded-2xl px-6 py-3 text-sm font-semibold text-white disabled:opacity-70"
            style={{ backgroundColor: "rgb(var(--accent))" }}
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600">
            Conteúdo de caráter informativo. Não substitui consulta jurídica, pois cada caso exige
            análise individualizada. Não há promessa de resultado.
          </div>
        </form>
      </section>
    </div>
  );
}
