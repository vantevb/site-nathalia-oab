import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const { meta } = getPostBySlug(params.slug);
    return {
      title: meta.title,
      description: meta.excerpt || "Conteúdo informativo sobre Direito Civil.",
    };
  } catch {
    return { title: "Conteúdo" };
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  let meta: ReturnType<typeof getPostBySlug>["meta"];
  let content: string;

  try {
    const post = getPostBySlug(params.slug);
    meta = post.meta;
    content = post.content;
  } catch {
    notFound();
  }

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  const html = processed.toString();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Link href="/blog" className="text-sm text-zinc-700 hover:underline">
          ← Voltar para Conteúdos
        </Link>
      </div>

      <header className="space-y-3">
        <time className="text-xs text-zinc-500">{meta.date}</time>
        <h1 className="text-3xl font-semibold tracking-tight">{meta.title}</h1>

        <div className="flex flex-wrap gap-2">
          {meta.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>

        {meta.excerpt ? <p className="text-zinc-700 leading-relaxed">{meta.excerpt}</p> : null}
      </header>

      <article
        className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-[rgb(var(--accent))] hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600">
        Conteúdo de caráter informativo. Não substitui consulta jurídica, pois cada caso exige
        análise individualizada. Não há promessa de resultado.
      </div>
    </div>
  );
}
