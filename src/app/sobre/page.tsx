import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória acadêmica e profissional. Atuação pautada pela ética, responsabilidade e análise técnica do caso concreto.",
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rounded-3xl border bg-white shadow-sm"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="p-8 space-y-3">
        <h2
          className="text-lg font-semibold tracking-tight"
          style={{ color: "rgb(var(--text))" }}
        >
          {title}
        </h2>
        <div
          className="text-sm leading-relaxed"
          style={{ color: "rgb(var(--muted))" }}
        >
          {children}
        </div>
      </div>

      <div
        className="h-[2px] w-full"
        style={{ backgroundColor: "rgba(15,76,92,0.18)" }}
      />
    </section>
  );
}

export default function SobrePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <PageHeader
        eyebrow="Institucional"
        title="Trajetória profissional"
        description="Informações sobre formação acadêmica, atuação profissional e valores que orientam a prática jurídica."
      />

      <Block title="Formação acadêmica">
        Graduada em Direito, com inscrição regular na Ordem dos Advogados do
        Brasil, Seção do Rio de Janeiro (OAB/RJ nº 25.832). A formação acadêmica
        é voltada ao estudo do Direito Civil e à compreensão técnica das relações
        jurídicas no âmbito privado.
      </Block>

      <Block title="Atuação profissional">
        A atuação é concentrada em demandas de Direito Civil, com análise do
        caso concreto, documentação apresentada e contexto jurídico aplicável.
        O atendimento é realizado de forma responsável, observando os limites
        legais, éticos e normativos da advocacia.
      </Block>

      <Block title="Postura e valores">
        A prática profissional é pautada pela ética, transparência, estudo
        contínuo e responsabilidade técnica. Cada demanda exige avaliação
        individualizada, sem promessas de resultado ou generalizações.
      </Block>

      <Block title="Atendimento">
        O contato inicial tem caráter informativo e visa compreender o contexto
        apresentado. Eventual atuação profissional depende de análise prévia,
        documentação adequada e compatibilidade com a legislação vigente.
      </Block>

      <footer
        className="rounded-3xl border bg-white p-6 text-xs leading-relaxed"
        style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
      >
        Conteúdo de caráter informativo, nos termos do Código de Ética e
        Disciplina da OAB. Não há promessa de resultado. Cada caso exige análise
        individualizada.
      </footer>
    </main>
  );
}
