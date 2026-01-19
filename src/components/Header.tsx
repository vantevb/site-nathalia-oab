import Link from "next/link";
import { Container } from "./ui";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="h-1 w-full" style={{ backgroundColor: "rgb(var(--accent))" }} />
      <div className="border-b border-slate-200">
        <Container>
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="no-underline hover:no-underline">
              <div className="text-base font-semibold tracking-tight text-slate-900">
                Nathalia dos Santos Guaraciaba
              </div>
              <div className="text-xs text-slate-600">Advogada — OAB/RJ nº 25.832</div>
            </Link>

            <nav className="flex gap-6 text-sm font-semibold text-slate-700">
              <Link href="/atuacao/direito-civil" className="hover:text-slate-950">
                Atuação
              </Link>
              <Link href="/sobre" className="hover:text-slate-950">
                Sobre
              </Link>
              <Link href="/blog" className="hover:text-slate-950">
                Conteúdos
              </Link>
              <Link href="/contato" className="hover:text-slate-950">
                Contato
              </Link>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
