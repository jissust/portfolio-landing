import { useTranslation } from "react-i18next";
import { useProjects } from "@/hooks/useProjects";

export default function Projects() {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <section id="proyectos" aria-label={t("projects.title")}>
      {/* Proyectos */}
      <h2>{t("projects.title")}</h2>
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
      </ul>
    </section>
  );
}
