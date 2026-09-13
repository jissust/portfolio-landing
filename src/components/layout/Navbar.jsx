import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

/**
 * Navbar fijo (fixed) de la aplicación.
 * Los links apuntan a los ids de las secciones del Home.
 * Cuando se agreguen páginas nuevas, sumar el link acá.
 */
const NAV_LINKS = [
  { href: "#hero", key: "nav.home" },
  { href: "#sobre-mi", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#experiencia", key: "nav.experience" },
  { href: "#proyectos", key: "nav.projects" },
  { href: "#contacto", key: "nav.contact" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // Cierra el menú al clickear un link (útil en mobile)
  const handleLinkClick = () => setOpen(false);

  return (
    <header className="fixed w-full top-0 z-70 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          [JT]<span className="text-ink-soft">.dev</span>
        </a>

        {/* Nav desktop: sigue igual, solo visible desde md */}
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink-soft md:flex">
          {NAV_LINKS.filter((link) => link.key !== "nav.contact").map((link) => (
            <a
              className="transition-colors hover:text-ink"
              key={link.href}
              href={link.href}
            >
              {t(link.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Lado derecho DESKTOP: disponibilidad + botón Contacto (oculto en mobile) */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-2 font-mono text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse-dot"></span>
            Disponible para trabajar
          </span>
          <a
            href="#contacto"
            className="rounded-full border border-ink px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
          >
            Contacto
          </a>
        </div>

        {/* Lado derecho MOBILE: solo texto de disponibilidad + botón hamburguesa */}
        <div className="flex items-center gap-3 md:hidden">
          <span className="flex items-center gap-2 font-mono text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse-dot"></span>
            <span className="hidden sm:inline">Disponible para trabajar</span>
          </span>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-px w-5 bg-ink"></span>
            <span className="h-px w-5 bg-ink"></span>
          </button>
        </div>
      </div>

      {/* ===== MENÚ MOBILE FULL SCREEN ===== */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-paper transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-mono text-sm font-medium tracking-tight">
            [JT]<span className="text-paper/60">.dev</span>
          </span>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="flex h-9 w-9 items-center justify-center"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-paper" fill="none" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 py-10 font-mono text-2xl uppercase tracking-widest bg-ink h-[100vh]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="transition-colors hover:text-paper/60 w-full text-center"
            >
              {t(link.key)}
            </a>
          ))}

          <div className="w-full text-center">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}