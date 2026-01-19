import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-zinc-200 bg-white p-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Direito Civil com postura técnica e comunicação objetiva.
          </h1>

          <p className="text-zinc-700 leading-relaxed">
            Atuação com responsabilidade, análise do caso concreto e orientação clara sobre
            possibilidades e próximos passos, sempre em conformidade com a legislação aplicável.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contato"
              className="inline-flex rounded-2xl px-6 py-3 text-sm font-semibold text-white no-underline hover:opacity-95"
              style={{ backgroundColor: "rgb(var(--accent))" }}
            >
              Solicitar contato
            </Link>

            <Link
              href="/atuacao/direito-civil"
              className="inline-flex rounded-2xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 no-underline hover:bg-zinc-50"
            >
              Ver atuação
            </Link>
          </div>

          <p className="text-sm text-zinc-600">
            Atendimento em Niterói, São Gonçalo e Rio de Janeiro/RJ.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7">
          <h2 className="text-sm font-semibold">Postura técnica</h2>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
            Análise documental e orientação fundamentada no caso concreto.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-7">
          <h2 className="text-sm font-semibold">Comunicação clara</h2>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
            Explicações objetivas sobre etapas, riscos e alternativas possíveis.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-7">
          <h2 className="text-sm font-semibold">Ética e responsabilidade</h2>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
            Atuação institucional, sem promessas de resultado.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-10">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Conteúdos informativos</h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            Artigos com caráter informativo sobre temas do Direito Civil, voltados ao público em geral.
          </p>
          <Link
            href="/blog"
            className="inline-flex rounded-2xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 no-underline hover:bg-zinc-50"
          >
            Acessar o blog
          </Link>
        </div>
      </section>
    </div>
  );
}
