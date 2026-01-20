import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Direito de Família",
  description:
    "Conteúdo informativo sobre Direito de Família. Cada caso exige análise individualizada, sem promessa de resultado.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <PageHeader
        eyebrow="Atuação"
        title="Direito de Família"
        description="Atuação em demandas familiares com discrição, técnica e análise cuidadosa do caso concreto."
        crumbs={[{ label: "Atuação", href: "/atuacao" }]}
      />

      <section className="grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgb(var(--border))" }}>
          <div className="p-8 space-y-4">
            <h2 className="text-lg font-semibold" style={{ color: "rgb(var(--text))" }}>Temas frequentes</h2>
            <ul className="space-y-2 text-sm" style={{ color: "rgb(var(--muted))" }}>
              <li>— Divórcio e dissolução de união estável</li>
              <li>— Guarda e convivência</li>
              <li>— Alimentos (fixação, revisão e execução)</li>
              <li>— Partilha (conforme documentação)</li>
            </ul>
          </div>
          <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(199,164,74,0.22)" }} />
        </section>

        <section className="rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgb(var(--border))" }}>
          <div className="p-8 space-y-4">
            <h2 className="text-lg font-semibold" style={{ color: "rgb(var(--text))" }}>Como funciona</h2>
            <ol className="space-y-2 text-sm" style={{ color: "rgb(var(--muted))" }}>
              <li>1. Contato inicial (informativo)</li>
              <li>2. Levantamento de documentos</li>
              <li>3. Orientação conforme o caso concreto</li>
              <li>4. Definição de próximos passos</li>
            </ol>
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
