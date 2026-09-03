export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(246,241,231,0.88)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#inicio"
            className="text-xl font-semibold tracking-tight text-[var(--coffee-dark)]"
          >
            ClaudioDev_
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
            <a href="#inicio" className="transition hover:text-foreground">
              Inicio
            </a>
            <a href="#proyectos" className="transition hover:text-foreground">
              Proyectos
            </a>
            <a href="#labs" className="transition hover:text-foreground">
              Labs
            </a>
            <a href="#sobre-mi" className="transition hover:text-foreground">
              Sobre mí
            </a>
            <a href="#contacto" className="transition hover:text-foreground">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="rounded-full bg-[var(--coffee-dark)] px-5 py-2.5 text-sm font-medium text-[var(--coffee-contrast)] transition hover:opacity-90"
          >
            Hablemos
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10"
      >
        <div>
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-[var(--coffee-medium)]">
            Software · Automation · AI
          </p>

          <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Construyo soluciones digitales que conectan software, automatización
            e inteligencia artificial.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Soy Claudio. Desarrollo sistemas, APIs, automatizaciones e
            integraciones pensadas para resolver problemas reales de negocio.
            Aquí puedes ver cómo trabajo y probar algunas de mis soluciones.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full bg-[var(--coffee-dark)] px-6 py-3.5 font-medium text-[var(--coffee-contrast)] transition hover:translate-y-[-1px] hover:shadow-lg"
            >
              Ver proyectos
            </a>

            <a
              href="#labs"
              className="inline-flex items-center justify-center rounded-full border border-[var(--coffee-light)] bg-[var(--surface)] px-6 py-3.5 font-medium text-[var(--coffee-dark)] transition hover:border-[var(--coffee-medium)]"
            >
              Probar Labs
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                ClaudioDev System
              </span>

              <span className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--live)]" />
                LIVE
              </span>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-[var(--border-soft)] bg-white/60 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--coffee-medium)]">
                  LAB-001
                </p>
                <h2 className="mt-2 text-xl font-semibold">LeadFlow</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Lead Capture & Automation System
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[var(--border-soft)] p-4 text-center">
                  <p className="font-mono text-xs text-[var(--muted)]">API</p>
                  <p className="mt-2 font-semibold">REST</p>
                </div>

                <div className="rounded-2xl border border-[var(--border-soft)] p-4 text-center">
                  <p className="font-mono text-xs text-[var(--muted)]">BACKEND</p>
                  <p className="mt-2 font-semibold">Python</p>
                </div>

                <div className="rounded-2xl border border-[var(--border-soft)] p-4 text-center">
                  <p className="font-mono text-xs text-[var(--muted)]">FORMAT</p>
                  <p className="mt-2 font-semibold">JSON</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--black)] p-5 text-sm text-white">
                <p className="font-mono text-[var(--coffee-light)]">
                  GET /estado
                </p>

                <pre className="mt-4 overflow-x-auto font-mono text-sm leading-7 text-zinc-300">
{`{
  "estado": "ok"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--coffee-medium)]">
          Projects
        </p>

        <h2 className="font-display mt-4 text-4xl font-semibold">
          Proyectos pensados para resolver problemas reales.
        </h2>
      </section>

      <section id="labs" className="bg-[var(--black)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--live)]" />
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-400">
              Claudio Labs
            </p>
          </div>

          <h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold">
            No te lo cuento. Pruébalo.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            En esta sección encontrarás experimentos, APIs, automatizaciones y
            soluciones interactivas que puedes probar directamente.
          </p>
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--coffee-medium)]">
          About
        </p>

        <h2 className="font-display mt-4 text-4xl font-semibold">
          Tecnología con una persona real detrás.
        </h2>
      </section>

      <section
        id="contacto"
        className="border-t border-[var(--border-soft)] bg-[var(--surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--coffee-medium)]">
            Contact
          </p>

          <h2 className="font-display mt-4 text-4xl font-semibold">
            ¿Tienes un proceso que podría automatizarse?
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
            Cuéntame qué necesitas construir o mejorar y revisamos la mejor
            manera de convertirlo en una solución funcional.
          </p>
        </div>
      </section>
    </main>
  );
}