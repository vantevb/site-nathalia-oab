import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Atuação",
  description:
    "Áreas de atuação: Família, Empresarial, Propriedade Intelectual, Consumidor e Civil. Conteúdo informativo e atendimento institucional.",
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
      <div className="space-y-4 p-8">
        <div className="space-y-2">
          <div
            className="text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ color: "rgb(var(--muted))" }}
          >
            Área
          </div>

          <h2
            className="text-lg font-semibold tracking-tight"
            style={{ color: "rgb(var(--text))" }}
          >
            <Link href={href} className="no-underline hover:underline">
              {title}
            </Link>
          </h2>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgb(var(--muted))" }}
          >
            {subtitle}
          </p>
        </div>

        <ul className="space-y-2 text-sm" style={{ color: "rgb(var(--text))" }}>
          {items.map((it) => (
            <li key={it} className="flex gap-2">
              <span aria-hidden="true" style={{ color: "rgba(199,164,74,0.75)" }}>
                —
              </span>
              <span style={{ color: "rgb(var(--muted))" }}>{it}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-1">
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

      <div
        className="h-[2px] w-full"
        style={{ backgroundColor: "rgba(199,164,74,0.22)" }}
      />
    </section>
  );
}

export default function AtuacaoIndexPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <PageHeader
        eyebrow="Atuação"
        title="Áreas de atuação"
        description="Seleção de áreas e temas. A atuação depende de análise do caso concreto, documentação e estratégia compatível com a legislação aplicável."
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

        <Card
          title="Direito de Família"
          href="/atuacao/direito-de-familia"
          subtitle="Demandas familiares com discrição, técnica e análise do caso concreto."
          items={[
            "Divórcio e dissolução de união estável",
            "Guarda e convivência",
            "Alimentos (fixação, revisão e execução)",
          ]}
        />

        <Card
          title="Direito Empresarial"
          href="/atuacao/direito-empresarial"
          subtitle="Apoio jurídico a rotinas empresariais, com foco em organização e prevenção de riscos."
          items={[
            "Contratos empresariais (análise e revisão)",
            "Cobranças e inadimplência (medidas possíveis)",
            "Responsabilidade civil em relações comerciais",
          ]}
        />

        <Card
          title="Propriedade Intelectual"
          href="/atuacao/propriedade-intelectual"
          subtitle="Orientação sobre proteção e organização de ativos intangíveis, conforme documentação."
          items={[
            "Contratos de licença/cessão",
            "Uso indevido (análise inicial)",
            "Notificações extrajudiciais (quando cabíveis)",
          ]}
        />

        <Card
          title="Direito do Consumidor"
          href="/atuacao/direito-do-consumidor"
          subtitle="Orientação em relações de consumo, com avaliação de documentos e contexto."
          items={[
            "Vícios/defeitos (análise)",
            "Cobrança indevida (avaliação documental)",
            "Cancelamentos e reembolsos (quando cabíveis)",
          ]}
        />

        <section
          className="rounded-3xl border bg-white p-8 text-xs leading-relaxed shadow-sm md:col-span-2"
          style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
        >
          Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada.
          Não há promessa de resultado.
        </section>
      </section>
    </main>
  );
}
