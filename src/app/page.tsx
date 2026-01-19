import type { Metadata } from "next";
import { Badge, ButtonLink, Card, Container, SectionTitle } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nathalia Guaraciaba — OAB/RJ nº 25.832",
  description:
    "Atuação em Direito Civil em Niterói, São Gonçalo e Rio de Janeiro/RJ. Conteúdo informativo e atendimento com ética e responsabilidade.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="border-b border-slate-700/50">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge>Direito Civil</Badge>
                <Badge>Niterói</Badge>
                <Badge>São Gonçalo</Badge>
                <Badge>Rio de Janeiro/RJ</Badge>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
                Soluções jurídicas com postura institucional.
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-300">
                Orientação e atuação em demandas cíveis com análise do caso concreto, clareza na comunicação e
                respeito às normas aplicáveis à advocacia.
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contato" variant="primary">
                  Solicitar contato
                </ButtonLink>
                <ButtonLink href="/atuacao/direito-civil" variant="outline">
                  Ver atuação
                </ButtonLink>
                <Link href="/blog" className="text-sm font-semibold text-slate-200 hover:underline self-center">
                  Conteúdos informativos →
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/30 p-4 text-xs leading-relaxed text-slate-300">
                Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise
                individualizada. Não há promessa de resultado.
              </div>
            </div>

            {/* FORM (estilo "Schedule a Consultation") */}
            <Card>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400">
                    Atendimento
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-50">
                    Solicitar contato
                  </div>
                  <p className="mt-1 text-sm text-slate-300">
                    Envie uma mensagem e retorno será realizado conforme disponibilidade.
                  </p>
                </div>

                <form action="/contato" className="space-y-3">
                  <input
                    className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-slate-400/20"
                    placeholder="Nome"
                    name="nome"
                  />
                  <input
                    className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-slate-400/20"
                    placeholder="E-mail"
                    name="email"
                    type="email"
                  />
                  <input
                    className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-slate-400/20"
                    placeholder="Telefone (opcional)"
                    name="telefone"
                  />
                  <textarea
                    className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-slate-400/20"
                    placeholder="Mensagem (resumo do assunto e cidade)"
                    name="mensagem"
                    rows={4}
                  />

                  <button
                    className="w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
                    style={{ backgroundColor: "rgb(var(--accent))" }}
                    type="submit"
                  >
                    Ir para o formulário completo
                  </button>

                  <div className="text-xs leading-relaxed text-slate-400">
                    Sem promessa de resultado. Atendimento institucional.
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </Container>
      </div>

      {/* PRACTICE AREAS (grid) */}
      <Container>
        <div className="py-14 space-y-8">
          <SectionTitle
            kicker="Atuação"
            title="Áreas de atuação"
            subtitle="Seleção de temas em Direito Civil. A atuação depende de análise do caso concreto."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="text-base font-semibold text-slate-50">Contratos</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Análise, revisão e orientação contratual com foco em clareza, riscos e documentação.
              </p>
            </Card>

            <Card>
              <h3 className="text-base font-semibold text-slate-50">Responsabilidade civil</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Avaliação de danos, nexo causal e documentação para definição de estratégia adequada.
              </p>
            </Card>

            <Card>
              <h3 className="text-base font-semibold text-slate-50">Cobranças e obrigações</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Orientação sobre medidas possíveis, provas e condução de tratativas.
              </p>
            </Card>
          </div>

          <div>
            <ButtonLink href="/atuacao/direito-civil" variant="outline">
              Ver detalhes de Direito Civil
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* TRUST BAR (gatilhos visuais de credibilidade) */}
      <div className="border-t border-slate-700/50 bg-slate-950/20">
        <Container>
          <div className="py-10">
            <SectionTitle
              kicker="Credibilidade"
              title="Postura institucional e informação qualificada"
              subtitle="Sinais visuais discretos de confiança, sem linguagem promocional."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>OAB/RJ nº 25.832</Badge>
              <Badge>Atendimento regional</Badge>
              <Badge>Conteúdo informativo</Badge>
              <Badge>Ética e responsabilidade</Badge>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
