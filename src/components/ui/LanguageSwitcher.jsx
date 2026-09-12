import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n";

/**
 * Selector de idioma. Lee los idiomas soportados desde la config de i18n
 * (src/i18n/index.js), así que agregar un idioma nuevo no requiere tocar
 * este componente.
 */
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      aria-label="Seleccionar idioma"
      value={i18n.resolvedLanguage}
      onChange={handleChange}
      className="cursor-pointer"
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code} className="text-ink-soft">
          {lang.code.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
