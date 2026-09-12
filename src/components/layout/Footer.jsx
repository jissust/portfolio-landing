import { useTranslation } from "react-i18next";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Footer */}
      <SocialLinks />
      <p>
        © {year} {t("meta.siteName")} — {t("footer.rights")}
      </p>
      <p>{t("footer.madeWith")}</p>
    </footer>
  );
}
