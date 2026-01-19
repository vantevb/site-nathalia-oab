import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight">Conteúdos</h1>
      <p className="mt-4 text-zinc-700 leading-relaxed">
        Artigos de caráter informativo sobre Direito Civil.
      </p>

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700">
        Blog em construção. Em seguida vamos configurar posts com MDX.
      </div>

      <div className="mt-6">
        <Link href="/" className="text-sm font-semibold text-zinc-900 hover:underline">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
