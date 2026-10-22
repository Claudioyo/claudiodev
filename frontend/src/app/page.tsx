import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section
        id="inicio"
        className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10"
      >
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.22em] text-[var(--coffee-text)]">
            Software · Automation · AI
          </p>

          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            Build · Automate · Integrate
          </p>

          <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Construyo soluciones digitales que conectan software, automatización e
            inteligencia artificial.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Soy Claudio. Diseño y desarrollo sistemas, APIs, automatizaciones e
            integraciones que ayudan a negocios a reducir trabajo manual, conectar
            herramientas y convertir procesos en soluciones funcionales.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#proyectos">
              Ver proyectos
            </ButtonLink>

            <ButtonLink href="#labs" variant="secondary">
              Explorar Labs
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--coffee-light)]" />
              APIs en desarrollo
            </span>

            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--coffee-light)]" />
              Automatizaciones previstas
            </span>

            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--coffee-light)]" />
              Demos en preparación
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Los Labs están en desarrollo y planificación. Sus APIs,
            automatizaciones y demos aún no están disponibles para probar.
          </p>
        </div>

        <div className="relative">
          <div className="float-soft rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--coffee-text)]">
                  LAB-001
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  LeadFlow
                </h2>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Proyecto de captura de leads y automatización
                </p>
              </div>

              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/60 px-3 py-2 font-mono text-xs text-[var(--muted)]">
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--coffee-medium)]" />
                IN DEVELOPMENT — En desarrollo
              </span>
            </div>

            <p className="mb-3 text-sm text-[var(--muted)]">
              Tecnologías previstas para el proyecto:
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border-soft)] bg-white/50 p-4 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  API
                </p>
                <p className="mt-2 text-sm font-semibold">REST</p>
              </div>

              <div className="rounded-2xl border border-[var(--border-soft)] bg-white/50 p-4 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  Backend
                </p>
                <p className="mt-2 text-sm font-semibold">Python</p>
              </div>

              <div className="rounded-2xl border border-[var(--border-soft)] bg-white/50 p-4 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  Format
                </p>
                <p className="mt-2 text-sm font-semibold">JSON</p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl bg-[var(--black)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-400">
                  API Preview — Vista previa ilustrativa
                </span>

                <span className="font-mono text-xs text-[var(--coffee-light)]">
                  GET /estado
                </span>
              </div>

              <p id="leadflow-api-notice" className="px-5 pt-4 text-sm leading-6 text-zinc-300">
                Respuesta simulada y estática; no procede de un servidor activo.
                No se realizan solicitudes HTTP reales. La API aún no está disponible.
              </p>

              <pre aria-describedby="leadflow-api-notice" className="overflow-x-auto p-5 font-mono text-sm leading-7 text-zinc-300">
        {`{
          "estado": "ok",
          "lab": "LeadFlow"
        }`}
              </pre>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="#labs"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-[var(--coffee-light)] bg-white/50 px-5 py-3 text-sm font-medium text-[var(--coffee-dark)] transition hover:border-[var(--coffee-medium)]"
              >
                Ver estado del proyecto
              </a>

              <div className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--coffee-dark)] px-5 py-3 text-sm font-medium text-[var(--coffee-contrast)] opacity-85">
                Demo aún no disponible
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <SectionHeader
          eyebrow="Projects"
          title="Proyectos pensados para resolver problemas reales."
        />
      </section>

      <section
        id="labs"
        className="relative overflow-hidden bg-[var(--lab-bg)] text-white"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[10%] top-20 h-64 w-64 rounded-full bg-[var(--lab-cyan)]/10 blur-3xl" />
          <div className="absolute right-[5%] top-40 h-72 w-72 rounded-full bg-[var(--lab-blue)]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
            <SectionHeader
              eyebrow="Claudio Labs"
              title="Ideas en desarrollo y planificación."
              description="Proyectos de APIs, automatizaciones y soluciones interactivas con los que se prevé explorar las ideas detrás del código. Sus herramientas y demos aún no están disponibles para probar."
              dark
            />

            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--lab-border)] bg-[var(--lab-surface)] px-4 py-2 font-mono text-xs text-zinc-400">
              <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--coffee-light)]" />
              PROJECT STATUS — Estado de proyectos
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-[var(--lab-border)] bg-[var(--lab-surface)] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--lab-cyan)]">
                  LAB-001
                </span>

                <span className="font-mono text-xs text-zinc-400">
                  IN DEVELOPMENT — En desarrollo
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                LeadFlow
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Objetivo previsto: capturar, validar y procesar leads mediante una API REST.
              </p>

              <p className="mt-4 text-sm text-zinc-400">Tecnologías previstas:</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "REST API", "JSON"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--lab-border)] px-3 py-1.5 font-mono text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[var(--lab-border)] bg-[var(--lab-surface)] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--lab-cyan)]">
                  LAB-002
                </span>

                <span className="font-mono text-xs text-zinc-400">
                  PLANNED — Planificado
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                SupportAI
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Objetivo previsto: desarrollar un asistente inteligente para atender y orientar a clientes dentro de ClaudioDev.
              </p>

              <p className="mt-4 text-sm text-zinc-400">Tecnologías previstas:</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["AI", "Chatbot", "Automation"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--lab-border)] px-3 py-1.5 font-mono text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-dashed border-[var(--lab-border)] bg-black/10 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
                  LAB-003
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  PLANNED — Planificado
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-zinc-400">
                E-commerce
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Objetivo previsto: explorar soluciones de comercio electrónico e integraciones.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-3xl border border-[var(--lab-border)] bg-black/30 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                Lab Console
              </span>

              <span className="font-mono text-xs text-zinc-400">
                STATIC EXAMPLE — Ejemplo estático
              </span>
            </div>

            <p id="lab-console-notice" className="mt-4 text-sm leading-6 text-zinc-300">
              Representación ilustrativa: no ejecuta comandos ni comprueba servicios reales.
            </p>

            <pre aria-describedby="lab-console-notice" className="mt-5 whitespace-pre-wrap break-words font-mono text-sm leading-7 text-zinc-400">
      {`$ claudiodev labs
      > LAB-001 LeadFlow      [IN DEVELOPMENT — En desarrollo]
      > LAB-002 SupportAI     [PLANNED — Planificado]
      > LAB-003 E-commerce    [PLANNED — Planificado]`}
            </pre>
          </div>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <SectionHeader
          eyebrow="About"
          title="Tecnología con una persona real detrás."
        />
      </section>

      <section
        id="contacto"
        className="border-t border-[var(--border-soft)] bg-[var(--surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeader
            eyebrow="Contact"
            title="¿Tienes un proceso que podría automatizarse?"
            description="Cuéntame qué necesitas construir o mejorar y revisamos la mejor manera de convertirlo en una solución funcional."
          />
        </div>
      </section>
    </main>
  );
}
