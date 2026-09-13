import { useTranslation } from "react-i18next";
import { useProjects } from "@/hooks/useProjects";

export default function Projects() {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <section id="proyectos" aria-label={t("projects.title")} class="px-6 py-24 md:px-10 md:py-32">
      {/* Proyectos */}
      {/*<h2>{t("projects.title")}</h2>
      <p>{t("projects.description")}</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{t(project.titleKey)}</h3>
            <p>{t(project.descriptionKey)}</p>
            <ul>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {t("projects.viewLive")}
            </a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              {t("projects.viewRepo")}
            </a>
          </li>
        ))}
      </ul>*/}
          <div class="mx-auto max-w-7xl">
      <p class="font-mono text-sm text-ink-soft">( 04 )</p>
      <h2 class="text-display mt-2 font-display font-bold">Proyectos</h2>

      {/* PROYECTO 1 */}
      <article class="mt-20 border-t border-line pt-12">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <h3 class="font-display text-3xl font-bold md:text-4xl">Nombre del Proyecto</h3>
          <a href="#" class="font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink">
            Ver sitio ↗
          </a>
        </div>

        <p class="mt-4 max-w-2xl text-ink-soft">
          Breve descripción del proyecto: qué problema resuelve, tu rol
          específico y algún resultado o detalle técnico destacable.
        </p>

        <div class="mt-4 flex flex-wrap gap-2 font-mono text-xs text-ink-soft">
          <span>React</span><span>·</span><span>TypeScript</span><span>·</span><span>Tailwind</span>
        </div>

        <div class="mt-10 flex flex-col items-start gap-6 md:flex-row">
          {/* mockup desktop tipo browser chrome */}
          <div class="w-full overflow-hidden rounded-xl border border-line md:w-3/4">
            <div class="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-3">
              <span class="h-2.5 w-2.5 rounded-full bg-line"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-line"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-line"></span>
            </div>
            <div class="img-placeholder flex aspect-video items-center justify-center bg-surface">
              <span class="font-mono text-xs text-ink-soft">cover-desktop.jpg</span>
            </div>
          </div>

          {/* mockup mobile tipo iphone */}
          <div class="mx-auto w-2/3 overflow-hidden rounded-2xl border border-line md:mx-0 md:w-1/4">
            <div class="img-placeholder flex aspect-[9/16] items-center justify-center bg-surface">
              <span class="font-mono text-xs text-ink-soft">cover-mobile.jpg</span>
            </div>
          </div>
        </div>
      </article>

      {/** PROYECTO 2 */}
      <article class="mt-20 border-t border-line pt-12">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <h3 class="font-display text-3xl font-bold md:text-4xl">Otro Proyecto</h3>
          <a href="#" class="font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink">
            Ver sitio ↗
          </a>
        </div>

        <p class="mt-4 max-w-2xl text-ink-soft">
          Breve descripción del proyecto: qué problema resuelve, tu rol
          específico y algún resultado o detalle técnico destacable.
        </p>

        <div class="mt-4 flex flex-wrap gap-2 font-mono text-xs text-ink-soft">
          <span>Vue</span><span>·</span><span>Vite</span><span>·</span><span>SASS</span>
        </div>

        <div class="mt-10 flex flex-col items-start gap-6 md:flex-row">
          <div class="w-full overflow-hidden rounded-xl border border-line md:w-3/4">
            <div class="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-3">
              <span class="h-2.5 w-2.5 rounded-full bg-line"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-line"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-line"></span>
            </div>
            <div class="img-placeholder flex aspect-video items-center justify-center bg-surface">
              <span class="font-mono text-xs text-ink-soft">cover-desktop.jpg</span>
            </div>
          </div>

          <div class="mx-auto w-2/3 overflow-hidden rounded-2xl border border-line md:mx-0 md:w-1/4">
            <div class="img-placeholder flex aspect-[9/16] items-center justify-center bg-surface">
              <span class="font-mono text-xs text-ink-soft">cover-mobile.jpg</span>
            </div>
          </div>
        </div>
      </article>

    </div>
    </section>
  );
}
