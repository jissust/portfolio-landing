import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" aria-label={t("hero.name")}>
      {/* Hero */}
      <p>{t("hero.greeting")}</p>
      <h1>{t("hero.name")}</h1>
      <h2>{t("hero.role")}</h2>
      <p>{t("hero.description")}</p>
      <div>
        <a href="#proyectos">{t("hero.ctaPrimary")}</a>
        <a href="#contacto">{t("hero.ctaSecondary")}</a>
      </div>
    </section>
  );
}
