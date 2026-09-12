import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      aria-label={t("hero.name")}
      className="relative overflow-hidden border-b border-line px-6 pb-24 pt-20 md:px-10 md:pt-28"
    >
      {/* Hero */}
      <div className="grid-overlay pointer-events-none absolute inset-0"></div>

      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-sm text-ink-soft">// Hola, soy</p>

        <h1 className="text-hero mt-4 font-display font-bold uppercase">
          Jesús
          <br />
          Tissera
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="rounded border border-ink px-4 py-2 font-mono text-sm uppercase tracking-widest">
            Frontend Developer
          </span>
          <span className="font-mono text-sm text-ink-soft">
            — Buenos Aires, Argentina
          </span>
        </div>

        <p className="mt-10 max-w-xl text-lg text-ink-soft md:text-xl">
          Construyo interfaces cuidadas al detalle, rápidas y accesibles. Me
          obsesiona el pixel-perfect tanto como el código limpio.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-opacity hover:opacity-80"
          >
            Ver proyectos
          </a>
          <a
            href="#"
            className="rounded-full border border-ink px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-20 flex max-w-7xl items-center justify-between font-mono text-xs text-ink-soft">
        <span className="flex items-center gap-2">
          <span className="animate-bounce-y">↓</span> Scroll
        </span>
        <span>( 0,0 )</span>
      </div>
    </section>
  );
}
