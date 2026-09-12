import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section>
      <h1>404 — {t("notFound.title")}</h1>
      <p>{t("notFound.description")}</p>
      <Link to="/">{t("notFound.backHome")}</Link>
    </section>
  );
}
