import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Artigos e conteúdos de caráter informativo sobre Direito Civil.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="max-w-4xl space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Conteúdos</h1>
        <p className="text-zinc-700 leading-relaxed">
          Artigos com caráter informativo sobre temas do Direito Civil.
        </p>
      </header>

      <section className="grid gap-4">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-3xl border border-zinc-200 bg-white p-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <time className="text-xs text-zinc-500">{p.date}</time>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="mt-3 text-lg font-semibold">
              <Link href={`/blog/${p.slug}`} className="no-underline hover:underline">
                {p.title}
              </Link>
            </h2>

            {p.excerpt ? (
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{p.excerpt}</p>
            ) : null}

            <div className="mt-4">
              <Link
                href={`/blog/${p.slug}`}
                className="text-sm font-semibold text-zinc-900 hover:underline"
              >
                Ler artigo →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600">
        Conteúdo de caráter informativo. Não substitui consulta jurídica, pois cada caso exige
        análise individualizada. Não há promessa de resultado.
      </div>
    </div>
  );
}
