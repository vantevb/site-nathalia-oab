import Link from "next/link";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" style={{ color: "rgb(var(--muted))" }}>
          <Link href="/atuacao" className="hover:underline">Atuação</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/blog" className="hover:underline">Conteúdos</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </nav>

        <Link
          href="/contato"
          className="rounded-2xl px-5 py-2 text-sm font-semibold text-white no-underline transition hover:opacity-95"
          style={{ backgroundColor: "rgb(var(--accent))" }}
        >
          Solicitar contato
        </Link>
      </div>

      {/* linha editorial */}
      <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(15,76,92,0.22)" }} />
    </header>
  );
}
