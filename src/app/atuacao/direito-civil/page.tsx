import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direito Civil",
  description:
    "Direito Civil no Estado do Rio de Janeiro/RJ. Conteúdo informativo e atendimento institucional.",
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgb(var(--border))" }}>
      <div className="p-8">
        <div className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "rgb(var(--muted))" }}>
          Tema
        </div>
        <h2 className="mt-2 text-lg font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
          {title}
        </h2>
        <div className="mt-3 text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
          {children}
        </div>
      </div>
      <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(15,76,92,0.18)" }} />
    </section>
  );
}

export default function DireitoCivilPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <header className="space-y-3">
        <Link href="/atuacao" className="text-sm font-semibold hover:underline" style={{ color: "rgb(var(--accent))" }}>
          ← Voltar para Atuação
        </Link>

        <div className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "rgb(var(--muted))" }}>
          Atuação
        </div>

        <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
          Direito Civil
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
          Orientação e atuação em demandas cíveis com análise do caso concreto, documentação e comunicação objetiva.
        </p>

        <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(15,76,92,0.18)" }} />
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Block title="Contratos">
          Análise e revisão de cláusulas, identificação de riscos e orientação sobre documentação e alternativas aplicáveis.
        </Block>

        <Block title="Responsabilidade civil">
          Avaliação técnica do cenário, provas disponíveis e possíveis caminhos jurídicos, conforme o caso concreto.
        </Block>

        <Block title="Obrigações e cobranças">
          Orientação sobre medidas possíveis, documentação, tentativas de composição e condução adequada do tema.
        </Block>

        <Block title="Atendimento e orientação">
          O atendimento é realizado de forma institucional. Cada caso exige análise individualizada e não há promessa de resultado.
        </Block>
      </section>

      <footer
        className="rounded-3xl border bg-white p-6 text-xs leading-relaxed"
        style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
      >
        Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada. Não há promessa de resultado.
      </footer>
    </main>
  );
}
