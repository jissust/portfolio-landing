import { useTranslation } from "react-i18next";
import { useExperience } from "@/hooks/useExperience";

// "2024-07" -> "jul 2024"
const formatDate = (value, locale) =>
  new Date(`${value}-01T00:00:00`).toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });

export default function Experience() {
  const { t, i18n } = useTranslation();
  const experience = useExperience();
  const locale = i18n.language || "es";

  const getPeriod = (item) => {
    const start = formatDate(item.startDate, locale);
    const end = item.current
      ? t("experience.present", "Hoy")
      : formatDate(item.endDate, locale);
    return `${start} — ${end}`;
  };

  return (
    <section
      id="experience"
      aria-label={t("experience.title")}
      className="relative z-40 flex min-h-screen items-center border-b border-line-dark bg-ink px-6 py-24 text-paper md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-sm text-paper/50">( 03 )</p>
        <h2 className="text-display mt-2 font-display font-bold">Experiencia</h2>

        <div className="mt-14 divide-y divide-line-dark border-t border-line-dark">
          {experience.map((item) => (
            <article
              key={item.id}
              className="grid gap-2 py-8 font-mono md:grid-cols-[180px_1fr] md:gap-8"
            >
              <span className="text-sm text-paper/50">{getPeriod(item)}</span>

              <div>
                <h3 className="font-body text-xl font-semibold">
                  {item.role} — {item.company}
                </h3>

                {item.location && (
                  <p className="mt-1 text-xs uppercase tracking-widest text-paper/50">
                    {item.location}
                  </p>
                )}

                <p className="mt-2 font-body text-sm text-paper/60">
                  {item.description}
                </p>

                {item.projects?.length > 0 && (
                  <p className="mt-3 font-body text-sm text-paper/60">
                    <span className="font-mono text-xs uppercase tracking-widest text-paper/50">
                      Proyectos:{" "}
                    </span>
                    {item.projects.map((project, i) => (
                      <span key={project.name}>
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-paper"
                          >
                            {project.name}
                          </a>
                        ) : (
                          project.name
                        )}
                        {project.note && ` (${project.note})`}
                        {i < item.projects.length - 1 && " · "}
                      </span>
                    ))}
                  </p>
                )}

                {item.tags?.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-line-dark px-2.5 py-1 text-xs text-paper/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}