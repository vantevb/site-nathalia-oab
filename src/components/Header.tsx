import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="h-1 w-full" style={{ backgroundColor: "rgb(var(--accent))" }} />
      <div className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <Link href="/" className="leading-tight no-underline hover:no-underline">
            <div className="text-base font-semibold tracking-tight text-zinc-950">
              Nathalia Guaraciaba
            </div>
            <div className="text-xs text-zinc-600">Advogada — OAB/RJ nº 25.832</div>
          </Link>

          <nav className="flex gap-6 text-sm font-medium text-zinc-700">
            <Link href="/atuacao/direito-civil" className="hover:text-zinc-950">
              Atuação
            </Link>
            <Link href="/sobre" className="hover:text-zinc-950">
              Sobre
            </Link>
            <Link href="/blog" className="hover:text-zinc-950">
              Conteúdos
            </Link>
            <Link href="/contato" className="hover:text-zinc-950">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
