import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://site-nathalia-oab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nathalia dos Santos Guaraciaba — OAB/RJ nº 25.832",
    template: "%s — Nathalia Guaraciaba",
  },
  description:
    "Atuação em Direito Civil no Estado do Rio de Janeiro/RJ. Conteúdo informativo e atendimento com ética e responsabilidade.",
  openGraph: {
    title: "Nathalia dos Santos Guaraciaba — OAB/RJ nº 25.832",
    description:
      "Atuação em Direito Civil no Estado do Rio de Janeiro/RJ. Conteúdo informativo, sem promessa de resultado.",
    url: siteUrl,
    siteName: "Nathalia Guaraciaba — Advocacia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathalia dos Santos Guaraciaba — OAB/RJ nº 25.832",
    description:
      "Direito Civil • Rio de Janeiro/RJ • Conteúdo informativo.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={` min-h-dvh bg-slate-50 text-slate-900 antialiased`}>
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
        <WhatsAppFloating />

        <WhatsAppFloating />

      </body>
    </html>
  );
}
