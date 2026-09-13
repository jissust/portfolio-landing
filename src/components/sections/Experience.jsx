import { useTranslation } from "react-i18next";
import { useExperience } from "@/hooks/useExperience";

export default function Experience() {
  const { t } = useTranslation();
  const experience = useExperience();

  return (
    <section
      id="experience"
      aria-label={t("experience.title")}
      class="border-b border-line-dark bg-ink px-6 py-24 text-paper md:px-10 md:py-32 sticky top-0 z-40 h-screen flex items-center"
    >
      {/*<h2>{t("experience.title")}</h2>
      <p>{t("experience.description")}</p>
      <ul>
        {experience.map((item) => (
          <li key={item.id}>
            <h3>
              {item.role} · {item.company}
            </h3>
            <p>
              {item.startDate} —{" "}
              {item.current ? t("experience.present") : item.endDate}
            </p>
            <p>{t(item.descriptionKey)}</p>
            <ul>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
      <div class="mx-auto max-w-7xl">
        <p class="font-mono text-sm text-paper/50">( 03 )</p>
        <h2 class="text-display mt-2 font-display font-bold">Experiencia</h2>

        <div class="mt-14 divide-y divide-line-dark border-t border-line-dark">
          <div class="grid gap-2 py-8 font-mono md:grid-cols-[140px_1fr_auto] md:items-baseline md:gap-8">
            <span class="text-sm text-paper/50">2023 — Hoy</span>
            <div>
              <h3 class="font-body text-xl font-semibold">
                Frontend Developer — Empresa Actual
              </h3>
              <p class="mt-1 font-body text-sm text-paper/60">
                Desarrollo de features del producto principal, migración a
                TypeScript y mantenimiento del design system interno.
              </p>
            </div>
            <span class="text-xs uppercase tracking-widest text-paper/50">
              Buenos Aires
            </span>
          </div>

          <div class="grid gap-2 py-8 font-mono md:grid-cols-[140px_1fr_auto] md:items-baseline md:gap-8">
            <span class="text-sm text-paper/50">2021 — 2023</span>
            <div>
              <h3 class="font-body text-xl font-semibold">
                Frontend Developer — Empresa Anterior
              </h3>
              <p class="mt-1 font-body text-sm text-paper/60">
                Construcción de interfaces desde cero junto al equipo de
                producto, foco en performance y accesibilidad.
              </p>
            </div>
            <span class="text-xs uppercase tracking-widest text-paper/50">
              Remoto
            </span>
          </div>

          <div class="grid gap-2 py-8 font-mono md:grid-cols-[140px_1fr_auto] md:items-baseline md:gap-8">
            <span class="text-sm text-paper/50">2019 — 2021</span>
            <div>
              <h3 class="font-body text-xl font-semibold">
                Junior Developer — Primer Trabajo
              </h3>
              <p class="mt-1 font-body text-sm text-paper/60">
                Primeros pasos como desarrollador, maquetado y mantenimiento de
                sitios institucionales.
              </p>
            </div>
            <span class="text-xs uppercase tracking-widest text-paper/50">
              Buenos Aires
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
