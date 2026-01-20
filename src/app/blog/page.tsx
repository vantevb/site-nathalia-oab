import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Artigos informativos sobre temas de Direito Civil. Conteúdo de caráter informativo, sem promessa de resultado.",
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium"
      style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
    >
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-3xl border bg-white shadow-sm transition hover:-translate-y-[2px] hover:shadow-md"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="p-7">{children}</div>
    </div>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
      <header className="space-y-3">
        <div
          className="text-xs font-semibold tracking-[0.22em] uppercase"
          style={{ color: "rgb(var(--muted))" }}
        >
          Editorial
        </div>

        <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
          Conteúdos informativos
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
          Artigos objetivos sobre temas de Direito Civil. Conteúdo de caráter informativo, sem apelos comerciais.
        </p>

        <div
          className="h-[2px] w-full"
          style={{ backgroundColor: "rgba(15,76,92,0.18)" }}
        />
      </header>

      {posts.length === 0 ? (
        <div
          className="rounded-3xl border bg-white p-8 text-sm"
          style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
        >
          Nenhum conteúdo publicado ainda.
        </div>
      ) : (
        <section className="grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Card key={p.slug}>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <time className="text-xs" style={{ color: "rgb(var(--muted))" }}>
                    {p.date}
                  </time>

                  <div className="flex flex-wrap gap-2">
                    {p.tags?.slice(0, 3).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
                    <Link href={`/blog/${p.slug}`} className="no-underline hover:underline">
                      {p.title}
                    </Link>
                  </h2>

                  {p.excerpt ? (
                    <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
                      {p.excerpt}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm font-semibold no-underline hover:underline"
                    style={{ color: "rgb(var(--accent))" }}
                  >
                    Ler artigo →
                  </Link>

                  <span className="text-xs" style={{ color: "rgb(var(--muted))" }}>
                    Informativo
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </section>
      )}

      <footer
        className="rounded-3xl border bg-white p-6 text-xs leading-relaxed"
        style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--muted))" }}
      >
        Conteúdo de caráter informativo. Não substitui consulta jurídica. Cada caso exige análise individualizada. Não há promessa de resultado.
      </footer>
    </main>
  );
}
