import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nathalia dos Santos Guaraciaba — OAB/RJ nº 25.832",
    template: "%s — Nathalia Guaraciaba",
  },
  description:
    "Atuação em Direito Civil em Niterói, São Gonçalo e Rio de Janeiro/RJ. Conteúdo informativo e atendimento com ética e responsabilidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-dvh bg-zinc-50 text-zinc-950 antialiased`}>
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
