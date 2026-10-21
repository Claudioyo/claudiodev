"use client";

import { useState } from "react";
import Container from "@/components/Container";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Labs", href: "#labs" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(246,241,231,0.88)] backdrop-blur">
      <Container className="py-5">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            className="text-xl font-semibold tracking-tight text-[var(--coffee-dark)]"
          >
            ClaudioDev_
          </a>

          <nav
            className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex"
            aria-label="Navegación principal"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden rounded-full bg-[var(--coffee-dark)] px-5 py-2.5 text-sm font-medium text-[var(--coffee-contrast)] transition hover:opacity-90 sm:inline-flex"
            >
              Hablemos
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--coffee-dark)] md:hidden"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="sr-only">
                {isOpen ? "Cerrar menú" : "Abrir menú"}
              </span>

              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                    isOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                    isOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-5 border-t border-[var(--border-soft)] pt-5 md:hidden">
            <nav
              className="flex flex-col gap-1"
              aria-label="Navegación móvil"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--coffee-dark)] px-5 py-3 text-sm font-medium text-[var(--coffee-contrast)]"
              >
                Hablemos
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}