import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Direito do Consumidor",
  description:
    "Conteúdo informativo sobre Direito do Consumidor. Cada caso exige análise individualizada, sem promessa de resultado.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <PageHeader
        eyebrow="Atuação"
        title="Direito do Consumidor"
        description="Análise e orientação em relações de consumo, com avaliação de documentos e contexto."
        crumbs={[{ label: "Atuação", href: "/atuacao" }]}
      />

      <section className="grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgb(var(--border))" }}>
          <div className="p-8 space-y-4">
            <h2 className="text-lg font-semibold" style={{ color: "rgb(var(--text))" }}>Temas frequentes</h2>
            <ul className="space-y-2 text-sm" style={{ color: "rgb(var(--muted))" }}>
              <li>— Vícios/defeitos (análise do caso)</li>
              <li>— Cobrança indevida (avaliação documental)</li>
              <li>— Cancelamentos e reembolsos (quando cabíveis)</li>
              <li>— Revisão de contratos de consumo (orientação)</li>
            </ul>
          </div>
          <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(199,164,74,0.22)" }} />
        </section>

        <section className="rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgb(var(--border))" }}>
          <div className="p-8 space-y-4">
            <h2 className="text-lg font-semibold" style={{ color: "rgb(var(--text))" }}>Como funciona</h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
              A estratégia varia conforme provas disponíveis e legislação aplicável. Não há promessa de resultado.
            </p>
            <Link
              href="/contato"
              className="inline-flex rounded-full px-5 py-2 text-sm font-medium no-underline transition hover:opacity-90"
              style={{ backgroundColor: "rgb(var(--accent-soft))", color: "rgb(var(--bg))" }}
            >
              Solicitar contato
            </Link>
          </div>
          <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(199,164,74,0.22)" }} />
        </section>
      </section>

      <footer className="rounded-3xl border bg-white p-6 text-xs leading-relaxed" style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}>
        Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada. Não há promessa de resultado.
      </footer>
    </main>
  );
}
