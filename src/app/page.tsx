import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nathalia Guaraciaba — OAB/RJ nº 25.832",
  description:
    "Atuação em Direito Civil em Niterói, São Gonçalo e Rio de Janeiro/RJ. Conteúdo informativo e atendimento com ética e responsabilidade.",
};

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border bg-white shadow-sm"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="p-8">
        <div className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "rgb(var(--muted))" }}>
          {title}
        </div>
        <div className="mt-3 text-sm leading-relaxed" style={{ color: "rgb(var(--text))" }}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      {/* hero editorial */}
      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden"
        style={{ borderColor: "rgb(var(--border))" }}
      >
        <div className="p-10 md:p-12">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "rgb(var(--muted))" }}>
            Direito Civil • Niterói • São Gonçalo • Rio de Janeiro/RJ
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
            Clareza, firmeza técnica e postura institucional.
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
            Orientação e atuação em demandas cíveis com análise do caso concreto, organização documental e comunicação objetiva.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contato"
              className="rounded-2xl px-6 py-3 text-sm font-semibold text-white no-underline hover:opacity-95 transition"
              style={{ backgroundColor: "rgb(var(--accent))" }}
            >
              Solicitar contato
            </Link>
            <Link
              href="/blog"
              className="rounded-2xl border px-6 py-3 text-sm font-semibold no-underline hover:bg-slate-50 transition"
              style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--text))" }}
            >
              Ler conteúdos
            </Link>
            <Link href="/atuacao/direito-civil" className="text-sm font-semibold hover:underline" style={{ color: "rgb(var(--muted))" }}>
              Ver atuação →
            </Link>
          </div>

          <div className="mt-7 rounded-2xl border bg-slate-50 p-4 text-xs leading-relaxed"
            style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
          >
            Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada.
            Não há promessa de resultado.
          </div>
        </div>

        {/* linha editorial inferior */}
        <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(15,76,92,0.22)" }} />
      </section>

      {/* tripé */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Método">
          Avaliação do cenário, documentos e possibilidades jurídicas aplicáveis ao caso concreto.
        </Card>
        <Card title="Comunicação">
          Explicações diretas sobre etapas, riscos e alternativas, com alinhamento de expectativas.
        </Card>
        <Card title="Conduta">
          Atuação com discrição, ética e responsabilidade, respeitando as normas aplicáveis à advocacia.
        </Card>
      </div>

      {/* chamada editorial */}
      <section className="rounded-3xl border bg-white shadow-sm"
        style={{ borderColor: "rgb(var(--border))" }}
      >
        <div className="p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "rgb(var(--muted))" }}>
              Editorial
            </div>
            <h2 className="mt-2 text-xl font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
              Conteúdos informativos
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
              Artigos objetivos sobre temas do Direito Civil — sem apelos comerciais.
            </p>
          </div>

          <Link
            href="/blog"
            className="rounded-2xl border px-6 py-3 text-sm font-semibold no-underline hover:bg-slate-50 transition"
            style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--text))" }}
          >
            Acessar blog
          </Link>
        </div>
      </section>
    </main>
  );
}
