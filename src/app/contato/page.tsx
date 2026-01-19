export default function ContatoPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Contato</h1>
        <p className="text-zinc-700 leading-relaxed">
          Para solicitar contato, envie uma mensagem com um resumo do assunto e sua cidade.
          O retorno é realizado conforme disponibilidade e ordem de recebimento.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 space-y-3">
        <h2 className="text-lg font-semibold">Atendimento</h2>
        <p className="text-sm text-zinc-700">
          Niterói • São Gonçalo • Rio de Janeiro/RJ
        </p>
        <p className="text-sm text-zinc-700">
          Áreas: Direito Civil
        </p>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 space-y-4">
        <h2 className="text-lg font-semibold">Antes de enviar</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
          <li>Descreva o objetivo (ex.: orientação, análise de documentos, demanda judicial).</li>
          <li>Informe prazos relevantes (se houver).</li>
          <li>Separe documentos essenciais para análise (quando aplicável).</li>
        </ul>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600">
          Conteúdo de caráter informativo. Não substitui consulta jurídica, pois cada caso exige análise individualizada.
          Não há promessa de resultado.
        </div>
      </section>
    </div>
  );
}
