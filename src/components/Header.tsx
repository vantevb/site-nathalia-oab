import Link from "next/link";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-white border-b"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Logo />

        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide"
          style={{ color: "rgb(var(--muted))" }}
        >
          <Link href="/atuacao" className="transition hover:text-[rgb(var(--text))]">
            Atuação
          </Link>
          <Link href="/sobre" className="transition hover:text-[rgb(var(--text))]">
            Sobre
          </Link>
          <Link href="/blog" className="transition hover:text-[rgb(var(--text))]">
            Conteúdos
          </Link>
          <Link href="/contato" className="transition hover:text-[rgb(var(--text))]">
            Contato
          </Link>
        </nav>

        <Link
          href="/contato"
          className="rounded-full px-5 py-2 text-sm font-medium transition hover:opacity-90"
          style={{
            backgroundColor: "rgb(var(--accent-soft))",
            color: "rgb(var(--bg))",
          }}
        >
          Solicitar contato
        </Link>
      </div>

      {/* linha editorial dourada */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: "rgb(var(--accent-soft))", opacity: 0.35 }}
      />
    </header>
  );
}
