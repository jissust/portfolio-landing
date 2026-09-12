import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" aria-label={t("about.title")}>
      {/* Sobre mí */}
      <h2>{t("about.title")}</h2>
      <p>{t("about.description")}</p>
    </section>
  );
}
