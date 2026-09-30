import { useTranslation } from "react-i18next";
import { useSkills } from "@/hooks/useSkills";

// <TailwindCSS />, <Git />, etc. Saca espacios para que quede como un tag JSX
const toTag = (name) => `<${name.replace(/\s+/g, "")} />`;

export default function Skills() {
  const { t } = useTranslation();
  const categories = useSkills();

  return (
    <section
      id="skills"
      className="relative md:sticky top-0 z-30 flex min-h-screen items-center border-b border-line bg-paper px-6 py-24 md:px-10 md:py-32"
      aria-label={t("skills.title")}
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-sm text-ink-soft">( 02 )</p>
        <h2 className="text-display mt-2 font-display font-bold">
          Stack &amp; herramientas
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                {category.label}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm"
                  >
                    {toTag(skill.name)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}