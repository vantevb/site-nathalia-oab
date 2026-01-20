import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-zinc-950">
              Nathalia dos Santos Guaraciaba
            </div>
            <div className="text-sm text-zinc-700">Advogada — OAB/RJ nº 25.832</div>
            <div className="text-sm text-zinc-700"><a className="hover:text-zinc-950" href="mailto:contato@nathaliaguaraciaba.adv.br">contato@nathaliaguaraciaba.adv.br</a></div>
<div className="text-sm text-zinc-700">
              Niterói • São Gonçalo • Rio de Janeiro/RJ
            </div>

            <div className="mt-3 inline-flex items-center gap-2 text-xs text-zinc-600">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: "rgb(var(--accent))" }}
              />
              Atuação institucional
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-700">
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

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600">
          Conteúdo de caráter informativo. Não substitui consulta jurídica, pois cada caso exige análise individualizada.
          Não há promessa de resultado.
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Nathalia dos Santos Guaraciaba — OAB/RJ nº 25.832
        </div>
      </div>
    </footer>
  );
}
