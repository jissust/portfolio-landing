import { useTranslation } from "react-i18next";
import { useSkills } from "@/hooks/useSkills";

export default function Skills() {
  const { t } = useTranslation();
  const skills = useSkills();

  return (
    <section id="skills" aria-label={t("skills.title")}>
      {/* Skills */}
      <h2>{t("skills.title")}</h2>
      <p>{t("skills.description")}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name} — {skill.level}%
          </li>
        ))}
      </ul>
    </section>
  );
}
