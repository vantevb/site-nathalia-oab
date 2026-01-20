import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Atuação",
  description:
    "Áreas de atuação em Direito Civil. Conteúdo informativo e atendimento com ética e responsabilidade.",
};

function Card({
  title,
  href,
  subtitle,
  items,
}: {
  title: string;
  href: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <section
      className="rounded-3xl border bg-white shadow-sm transition hover:-translate-y-[2px] hover:shadow-md"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <div
            className="text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ color: "rgb(var(--muted))" }}
          >
            Área
          </div>

          <h2 className="text-lg font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
            <Link href={href} className="no-underline hover:underline">
              {title}
            </Link>
          </h2>

          <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
            {subtitle}
          </p>
        </div>

        <ul className="space-y-2 text-sm" style={{ color: "rgb(var(--text))" }}>
          {items.map((it) => (
            <li key={it} className="flex gap-2">
              <span aria-hidden="true" style={{ color: "rgba(15,76,92,0.75)" }}>
                —
              </span>
              <span style={{ color: "rgb(var(--muted))" }}>{it}</span>
            </li>
          ))}
        </ul>

        <div className="pt-1 flex items-center justify-between">
          <Link
            href={href}
            className="text-sm font-semibold no-underline hover:underline"
            style={{ color: "rgb(var(--accent))" }}
          >
            Ver detalhes →
          </Link>

          <span className="text-xs" style={{ color: "rgb(var(--muted))" }}>
            Informativo
          </span>
        </div>
      </div>

      <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(15,76,92,0.18)" }} />
    </section>
  );
}

export default function AtuacaoIndexPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <PageHeader
        eyebrow="Atuação"
        title="Áreas de atuação"
        description="Seleção de temas em Direito Civil. A atuação depende de análise do caso concreto, documentação e estratégia compatível com a legislação aplicável."
      />

      <section className="grid gap-4 md:grid-cols-2">
        <Card
          title="Direito Civil"
          href="/atuacao/direito-civil"
          subtitle="Orientação e atuação em demandas cíveis, com postura institucional e comunicação objetiva."
          items={[
            "Contratos (análise, revisão e orientação)",
            "Responsabilidade civil (avaliação de documentos e cenário)",
            "Obrigações e cobranças (medidas possíveis e tratativas)",
          ]}
        />

        <section className="rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgb(var(--border))" }}>
          <div className="p-8 space-y-4">
            <div
              className="text-xs font-semibold tracking-[0.22em] uppercase"
              style={{ color: "rgb(var(--muted))" }}
            >
              Índice
            </div>

            <h2 className="text-lg font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
              Outros temas (em organização)
            </h2>

            <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
              Esta seção editorial pode ser expandida conforme os conteúdos forem organizados e publicados.
            </p>

            <div
              className="rounded-2xl border bg-slate-50 p-4 text-xs leading-relaxed"
              style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
            >
              Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada.
              Não há promessa de resultado.
            </div>
          </div>

          <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(15,76,92,0.18)" }} />
        </section>
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
