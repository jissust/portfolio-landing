import { useTranslation } from "react-i18next";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" class="bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      {/* Footer */}
      {/*<SocialLinks />
      <p>
        © {year} {t("meta.siteName")} — {t("footer.rights")}
      </p>
      <p>{t("footer.madeWith")}</p>*/}
      <div class="mx-auto max-w-7xl">
        <p class="font-mono text-sm text-paper/50">( 05 )</p>
        <h2 class="text-display mt-4 font-display font-bold">
          ¿Trabajamos
          <br />
          juntos?
        </h2>

        <div class="mt-14 grid gap-4 border-t border-line-dark pt-10 font-mono text-lg md:grid-cols-3 md:text-xl">
          <a
            href="mailto:tu@email.com"
            class="group flex items-center justify-between border-b border-line-dark py-4 transition-colors hover:text-paper/70 md:border-0"
          >
            Email{" "}
            <span class="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener"
            class="group flex items-center justify-between border-b border-line-dark py-4 transition-colors hover:text-paper/70 md:border-0"
          >
            GitHub{" "}
            <span class="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener"
            class="group flex items-center justify-between py-4 transition-colors hover:text-paper/70"
          >
            LinkedIn{" "}
            <span class="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <div class="mt-20 flex flex-col gap-2 border-t border-line-dark pt-8 font-mono text-xs uppercase tracking-widest text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Jesús Tissera</span>
          <a href="#top" class="hover:text-paper/70">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
