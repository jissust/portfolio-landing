import { useTranslation } from "react-i18next";

/**
 * Pantalla de prueba: sirve como plantilla para agregar páginas nuevas
 * el día de mañana. Para crear una página nueva:
 * 1) Crear el archivo en src/pages/NuevaPagina.jsx
 * 2) Sumar la ruta en src/App.jsx
 * 3) (opcional) agregar el link en src/components/layout/Navbar.jsx
 */
export default function Test() {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t("testPage.title")}</h1>
      <p>{t("testPage.description")}</p>
    </section>
  );
}
