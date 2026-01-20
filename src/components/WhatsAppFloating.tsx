"use client";

import { useEffect, useMemo, useState } from "react";

function onlyDigits(v: string) {
  return (v || "").replace(/\D/g, "");
}

export default function WhatsAppFloating() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const number = useMemo(() => onlyDigits(raw), [raw]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Se não tiver número, não mostra
  if (!number) return null;

  const text = [
    "Olá, Dra. Nathalia.",
    "",
    "Acessei o site institucional e gostaria de solicitar contato para informações iniciais.",
    "",
    "—",
    "Conteúdo de caráter informativo. Não há promessa de resultado.",
  ].join("\n");

  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="Contato via WhatsApp"
      title="Contato via WhatsApp"
      style={{ textDecoration: "none" }}
    >
      <div
        className={[
          "flex items-center gap-3 border bg-white shadow-sm transition-all duration-300 ease-out",
          "hover:-translate-y-[2px] hover:shadow-md",
          "rounded-2xl p-3 sm:rounded-full sm:px-4 sm:py-3",
          scrolled ? "opacity-90" : "opacity-100",
        ].join(" ")}
        style={{
          borderColor: "rgb(var(--border))",
          boxShadow: scrolled
            ? "0 10px 25px -20px rgba(2,6,23,0.25)"
            : "0 14px 35px -25px rgba(2,6,23,0.35)",
        }}
      >
        <span
          className="grid place-items-center rounded-full"
          style={{
            width: 36,
            height: 36,
            backgroundColor: "rgba(15,76,92,0.10)",
          }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 11.5a7.5 7.5 0 0 1-11.9 6L4 19l1.6-4.1A7.5 7.5 0 1 1 20 11.5Z"
              stroke="rgb(15 76 92)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M9.2 10.3c.5 1.1 1.4 2.1 2.4 2.7.6.3 1 .3 1.4-.1l.7-.6c.3-.2.7-.2 1 0l1.2.7c.4.2.5.7.3 1.1-.5 1-1.7 1.5-2.8 1.2-3.2-.9-6.2-4-7-7.3-.3-1.2.2-2.4 1.3-2.9.4-.2.9 0 1.1.3l.7 1.2c.2.3.2.7 0 1l-.6.7c-.4.5-.4 1-.1 1.6Z"
              fill="rgba(15,76,92,0.18)"
              stroke="rgba(15,76,92,0.85)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className="hidden sm:block overflow-hidden">
          <div className="leading-tight whitespace-nowrap">
            <div className="text-sm font-semibold" style={{ color: "rgb(var(--text))" }}>
              WhatsApp
            </div>
            <div className="text-xs" style={{ color: "rgb(var(--muted))" }}>
              Abrir conversa
            </div>
          </div>
        </div>

        <span
          className="hidden sm:inline-block text-sm font-semibold opacity-60 transition group-hover:opacity-100"
          style={{ color: "rgb(var(--accent))" }}
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </a>
  );
}
