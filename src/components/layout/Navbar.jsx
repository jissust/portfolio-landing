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

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          NA<span className="text-ink-soft">.dev</span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink-soft md:flex">
          {NAV_LINKS.map((link) => (
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

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-xs text-ink-soft sm:flex">
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
      </div>
    </header>
  );
}
