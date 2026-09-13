import { useTranslation } from "react-i18next";
import { useSkills } from "@/hooks/useSkills";

export default function Skills() {
  const { t } = useTranslation();
  const skills = useSkills();

  return (
    <section id="skills" class="border-b border-line bg-surface px-6 py-24 md:px-10 md:py-32 sticky top-0 z-30 h-screen flex items-center" aria-label={t("skills.title")}>
      {/* Skills */}
      {/*<h2>{t("skills.title")}</h2>
      <p>{t("skills.description")}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name} — {skill.level}%
          </li>
        ))}
      </ul>
       */}
      <div class="mx-auto max-w-7xl">
        <p class="font-mono text-sm text-ink-soft">( 02 )</p>
        <h2 class="text-display mt-2 font-display font-bold">
          Stack &amp; herramientas
        </h2>

        <div class="mt-14 grid gap-12 md:grid-cols-3">
          <div>
            <h3 class="font-mono text-xs uppercase tracking-widest text-ink-soft">
              Lenguajes &amp; Frameworks
            </h3>
            <div class="mt-5 flex flex-wrap gap-3">
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;JavaScript /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;TypeScript /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;React /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;Next.js /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;Vue /&gt;
              </span>
            </div>
          </div>

          <div>
            <h3 class="font-mono text-xs uppercase tracking-widest text-ink-soft">
              Estilos &amp; UI
            </h3>
            <div class="mt-5 flex flex-wrap gap-3">
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;TailwindCSS /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;CSS3 /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;SASS /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;Figma /&gt;
              </span>
            </div>
          </div>

          <div>
            <h3 class="font-mono text-xs uppercase tracking-widest text-ink-soft">
              Herramientas
            </h3>
            <div class="mt-5 flex flex-wrap gap-3">
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;Git /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;Vite /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;Jest /&gt;
              </span>
              <span class="rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm">
                &lt;Storybook /&gt;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
