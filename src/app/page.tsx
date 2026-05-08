import Link from "next/link";

const professionalExperience = [
  {
    role: "Instructor ajedrecístico",
    company: "Colegio Landaberri",
    location: "Lasarte, Gipuzkoa",
    period: "10/2024 - 04/2025",
    summary:
      "Planificación de sesiones de ajedrez, desarrollo de pensamiento estratégico y trabajo pedagógico con alumnado.",
  },
  {
    role: "Community Manager",
    company: "Beraun Bera",
    location: "Rentería, Gipuzkoa",
    period: "Experiencia reciente",
    summary:
      "Gestión de comunicación digital y contenidos orientados a comunidad, alcance y engagement.",
  },
];

const transversalSkills = [
  "Gestión del tiempo",
  "Disciplina",
  "Responsabilidad",
  "Adaptabilidad",
];

const languages = [
  "Español (nativo)",
  "Inglés (C1)",
  "Euskera (B2)",
  "Ruso (básico)",
];

const academicCompetencies = [
  {
    title: "Ingeniería del software",
    skills: [
      "Análisis y diseño de sistemas",
      "Arquitectura de software",
      "Calidad del software y testing",
      "Mantenimiento evolutivo",
    ],
  },
  {
    title: "Desarrollo y arquitectura web",
    skills: [
      "Frontend con React y Next.js",
      "Diseño de APIs",
      "Integración de servicios backend",
      "Diseño responsive y accesible",
    ],
  },
  {
    title: "Algoritmia y estructuras de datos",
    skills: [
      "Diseño de algoritmos",
      "Análisis de complejidad",
      "Optimización de soluciones",
      "Resolución sistemática de problemas",
    ],
  },
  {
    title: "Bases de datos y sistemas",
    skills: [
      "Modelado relacional",
      "SQL y optimización de consultas",
      "Sistemas operativos y redes",
      "Fundamentos de sistemas distribuidos",
    ],
  },
];

const projects = [
  {
    title: "Aplicación web full-stack",
    tech: "Next.js · TypeScript · API REST",
    description:
      "Proyecto de arquitectura modular orientado a mantenibilidad, escalabilidad y experiencia de usuario.",
  },
  {
    title: "Gestor colaborativo de tareas",
    tech: "React · Node.js · MongoDB",
    description:
      "Aplicación para trabajo en equipo con flujos de tareas, priorización y seguimiento de progreso.",
  },
  {
    title: "API segura con autenticación",
    tech: "Python · FastAPI · PostgreSQL",
    description:
      "Diseño de endpoints con control de acceso, validación robusta y documentación técnica.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="#inicio" className="text-sm font-semibold sm:text-base">
            Iván González Blázquez
          </Link>
          <ul className="hidden gap-5 text-sm text-slate-300 md:flex">
            <li>
              <Link href="#experiencia" className="hover:text-white">
                Experiencia
              </Link>
            </li>
            <li>
              <Link href="#formacion" className="hover:text-white">
                Formación
              </Link>
            </li>
            <li>
              <Link href="#competencias" className="hover:text-white">
                Competencias
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="inicio"
        className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 pt-16 md:grid-cols-[1.4fr_1fr] md:pt-24"
      >
        <div>
          <p className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300">
            Portfolio profesional
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Front-end developer con base sólida en ingeniería del software
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Desarrollo productos web centrados en experiencia de usuario,
            calidad técnica y mantenimiento a largo plazo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#formacion"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold hover:bg-blue-500"
            >
              Ver formación académica
            </Link>
            <Link
              href="#contacto"
              className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold hover:border-slate-500"
            >
              Contactar
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-lg font-semibold">Resumen profesional</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>📍 Rentería, Gipuzkoa</li>
            <li>📧 ivangonzalezblazquez@gmail.com</li>
            <li>📱 +34 644 968 293</li>
          </ul>
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Idiomas
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-y border-slate-800 bg-slate-900/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Experiencia profesional</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {professionalExperience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm text-blue-300">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {item.company} · {item.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formacion" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Formación académica destacada</h2>
        <article className="mt-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-slate-900 p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
            Grado universitario
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Grado en Ingeniería Informática (Mención en Ingeniería del Software)
          </h3>
          <p className="mt-2 text-slate-300">
            Facultad de Informática de San Sebastián · UPV/EHU
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
            La especialización en Ingeniería del Software aporta una visión
            completa del ciclo de vida del producto digital: análisis,
            arquitectura, construcción, validación y evolución de sistemas
            complejos.
          </p>
        </article>
      </section>

      <section id="competencias" className="bg-slate-900/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">
            Competencias adquiridas en la carrera
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {academicCompetencies.map((group) => (
              <article
                key={group.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {group.skills.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">Habilidades transversales</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {transversalSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Proyectos técnicos</h2>
        <p className="mt-3 text-sm text-slate-300">
          Selección de trabajos representativos alineados con el enfoque de
          ingeniería del software y desarrollo web.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-300">
                {project.tech}
              </p>
              <p className="mt-4 text-sm text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-t border-slate-800 bg-slate-900/70 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Disponible para oportunidades de desarrollo front-end, producto
            digital y colaboración en equipos técnicos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:ivangonzalezblazquez@gmail.com"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold hover:bg-blue-500"
            >
              Email
            </a>
            <a
              href="tel:+34644968293"
              className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold hover:border-slate-500"
            >
              Teléfono
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
