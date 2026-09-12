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
    <header className="fixed top-0 left-0 w-full h-[var(--navbar-height)] z-50">
      <nav aria-label="Navegación principal">
        {/* Navbar */}
        <span className="sr-only">{t("meta.siteName")}</span>

        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{t(link.key)}</a>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </nav>
    </header>
  );
}
