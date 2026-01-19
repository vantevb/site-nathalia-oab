import Link from "next/link";

export default function DireitoCivilPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Direito Civil</h1>
        <p className="text-zinc-700 leading-relaxed">
          Atuação em demandas e orientações de natureza cível, com análise do caso concreto,
          avaliação de documentos e definição de estratégia compatível com a legislação aplicável.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8">
        <h2 className="text-lg font-semibold">Atuações comuns</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Contratos (análise, revisão e elaboração)</li>
          <li>Responsabilidade civil (danos materiais e morais)</li>
          <li>Cobranças e inadimplemento</li>
          <li>Notificações extrajudiciais</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8">
        <h2 className="text-lg font-semibold">Como funciona</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
          <li>Entendimento do cenário e coleta de documentos</li>
          <li>Orientação jurídica e próximos passos possíveis</li>
          <li>Definição de estratégia conforme lei e prova disponível</li>
          <li>Acompanhamento com comunicação objetiva</li>
        </ol>

        <div className="mt-6">
          <Link
            href="/contato"
            className="inline-flex rounded-2xl px-6 py-3 text-sm font-semibold text-white no-underline hover:opacity-95"
            style={{ backgroundColor: "rgb(var(--accent))" }}
          >
            Solicitar contato
          </Link>
        </div>
      </section>
    </div>
  );
}
