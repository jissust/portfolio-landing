import { useTranslation } from "react-i18next";
import { useExperience } from "@/hooks/useExperience";

export default function Experience() {
  const { t } = useTranslation();
  const experience = useExperience();

  return (
    <section id="experiencia" aria-label={t("experience.title")}>
      {/* Experiencia */}
      <h2>{t("experience.title")}</h2>
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
      </ul>
    </section>
  );
}
