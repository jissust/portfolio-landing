import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" class="border-b border-line px-6 py-24 md:px-10 md:py-32"aria-label={t("about.title")}>
      <div class="mx-auto grid max-w-7xl gap-12 md:grid-cols-[280px_1fr] md:gap-20">
        <div>
          <p class="font-mono text-sm text-ink-soft">( 01 )</p>
          <h2 class="text-display mt-2 font-display font-bold">Sobre mí</h2>

          <dl class="mt-10 space-y-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
            <div>
              <dt class="text-ink">Ubicación</dt>
              <dd class="mt-1">Buenos Aires, AR</dd>
            </div>
            <div>
              <dt class="text-ink">Foco</dt>
              <dd class="mt-1">UI / UX Engineering</dd>
            </div>
            <div>
              <dt class="text-ink">Idiomas</dt>
              <dd class="mt-1">Español, Inglés</dd>
            </div>
          </dl>
        </div>

        <div class="space-y-6 text-lg leading-relaxed text-ink-soft md:text-xl">
          <p>
            Soy desarrollador frontend con foco en construir productos digitales
            que se sientan sólidos: rápidos, prolijos y fáciles de usar.
            Disfruto tanto de resolver el detalle visual como de dejar una
            arquitectura de código ordenada por debajo.
          </p>
          <p>
            Vengo trabajando con equipos de diseño y producto llevando
            interfaces desde el prototipo hasta producción, cuidando
            performance, accesibilidad y consistencia del sistema de diseño en
            cada entrega.
          </p>
          <p>
            Cuando no estoy programando, estoy revisando referencias de diseño,
            probando herramientas nuevas o afinando este mismo sitio.
          </p>
        </div>
      </div>
    </section>
  );
}
