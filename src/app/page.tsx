import type { Metadata } from "next";
import { Badge, ButtonLink, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Direito Civil — Nathalia Guaraciaba (OAB/RJ nº 25.832)",
  description:
    "Atuação em Direito Civil com postura técnica e comunicação objetiva. Atendimento em Niterói, São Gonçalo e Rio de Janeiro/RJ. Conteúdo informativo.",
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="p-10">
          <div className="flex flex-wrap gap-2">
            <Badge>Direito Civil</Badge>
            <Badge>Niterói</Badge>
            <Badge>São Gonçalo</Badge>
            <Badge>Rio de Janeiro/RJ</Badge>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
            Postura técnica, comunicação objetiva e atuação institucional.
          </h1>

          <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
            Orientação e atuação em demandas cíveis com análise do caso concreto, documentação e estratégia compatível com
            a legislação aplicável, sempre com ética e responsabilidade.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contato" variant="primary">
              Solicitar contato
            </ButtonLink>
            <ButtonLink href="/atuacao/direito-civil" variant="outline">
              Ver atuação
            </ButtonLink>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
            Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada.
            Não há promessa de resultado.
          </div>
        </div>

        {/* gatilho visual: faixa inferior */}
        <div className="h-1 w-full" style={{ backgroundColor: "rgb(var(--accent))" }} />
      </section>

      {/* TRIPÉ DE CREDIBILIDADE */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Análise e estratégia">
          <p className="text-sm text-slate-700 leading-relaxed">
            Avaliação técnica do cenário, documentos e possibilidades jurídicas aplicáveis ao caso concreto.
          </p>
        </Card>

        <Card title="Clareza na comunicação">
          <p className="text-sm text-slate-700 leading-relaxed">
            Explicações objetivas sobre etapas, riscos e alternativas, com alinhamento de expectativas.
          </p>
        </Card>

        <Card title="Ética e responsabilidade">
          <p className="text-sm text-slate-700 leading-relaxed">
            Atuação institucional, com discrição e respeito às normas aplicáveis à advocacia.
          </p>
        </Card>
      </div>

      {/* CHAMADA EDITORIAL */}
      <Card
        title="Conteúdos informativos"
        footer={
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-600">
              Artigos com caráter informativo sobre Direito Civil.
            </p>
            <ButtonLink href="/blog" variant="outline">
              Acessar o blog
            </ButtonLink>
          </div>
        }
      >
        <p className="text-sm text-slate-700 leading-relaxed">
          Uma seção editorial para educação e informação do público, com linguagem clara e sem apelos comerciais.
        </p>
      </Card>
    </div>
  );
}
