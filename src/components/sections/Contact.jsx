import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar envío real (API propia, EmailJS, Formspree, etc.)
  };

  return (
    <section id="contacto" aria-label={t("contact.title")}>
      {/* Contacto */}
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.description")}</p>
      <form onSubmit={handleSubmit}>
        <label>
          {t("contact.form.name")}
          <input type="text" name="name" required />
        </label>
        <label>
          {t("contact.form.email")}
          <input type="email" name="email" required />
        </label>
        <label>
          {t("contact.form.message")}
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit">{t("contact.form.submit")}</button>
      </form>
    </section>
  );
}
