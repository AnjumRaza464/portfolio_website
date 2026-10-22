import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Award, Briefcase, Download, GraduationCap, Languages, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import {
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
  type Project,
} from "@/data/portfolio";
import { ClaudeMark, GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./reveal";

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Socials({ className = "" }: { className?: string }) {
  const items = [
    profile.socials.github && { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    profile.socials.linkedin && { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof GithubIcon }[];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="grid size-10 place-items-center rounded-full border border-border text-muted transition hover:border-accent hover:text-foreground"
        >
          <Icon className="size-4" />
        </a>
      ))}
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email"
        className="grid size-10 place-items-center rounded-full border border-border text-muted transition hover:border-accent hover:text-foreground"
      >
        <Mail className="size-4" />
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to new opportunities
          </span>
          <span className="ml-2 hidden text-xs text-muted sm:inline">
            Currently at <span className="text-foreground">{experience[0].company}</span> · {profile.location}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent sm:text-xl">{profile.role}</p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.headline}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition hover:opacity-90"
            >
              View my projects <ArrowRight className="size-4" />
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition hover:border-accent"
              >
                <Download className="size-4" /> Download CV
              </a>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition hover:border-accent"
              >
                Get in touch
              </a>
            )}
            <Socials className="sm:ml-2" />
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-sm sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label} className="bg-surface p-5 sm:p-6">
                <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
                <dt className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="ERP experience, AI-first building">
      {/* Bento grid: story tile spans two columns, supporting tiles fill the rest. */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <div className="h-full space-y-5 rounded-2xl border border-border bg-surface p-6 text-base leading-relaxed text-muted sm:p-8 sm:text-lg">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-wider text-muted">Currently</p>
            <p className="mt-2 font-semibold">{experience[0].role}</p>
            <p className="text-sm text-muted">
              {experience[0].company} · since 2020
            </p>
            <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-muted">
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" /> {profile.location}
              </p>
              <p className="flex items-center gap-2">
                <Languages className="size-4 text-accent" /> {languages.join(", ")}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="h-full rounded-2xl border border-border bg-accent-soft p-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ClaudeMark className="size-5 text-accent" /> How I build with Claude
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {[
                "Scope ideas and architecture together before writing code",
                "Generate, review and refactor Next.js features fast",
                "Debug and ship to production with confidence",
                "Integrate LLMs into real business systems like ERPNext",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Skills" title="Technical toolkit">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/60">
              <h3 className="font-medium">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="Where I've worked">
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[31px] top-6 grid size-4 place-items-center rounded-full border-2 border-accent bg-background sm:-left-[39px]">
              {i === 0 && <span className="size-1.5 rounded-full bg-accent" />}
            </span>
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="flex items-center gap-2 text-sm text-muted">
                      <Briefcase className="size-4" /> {job.company}
                      {job.location && <span>· {job.location}</span>}
                    </p>
                  </div>
                  <span className="mt-2 w-fit shrink-0 rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent sm:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">
      <div className="flex flex-wrap items-center gap-2">
        {project.builtWithClaude && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            <ClaudeMark className="size-3.5" /> Built with Claude
          </span>
        )}
        {!project.liveUrl && (
          <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">Internal / private</span>
        )}
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-muted">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li key={t} className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted">
            {t}
          </li>
        ))}
      </ul>

      {(project.liveUrl || project.sourceUrl) && (
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition hover:opacity-90"
            >
              Live demo <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent"
            >
              <GithubIcon className="size-4" /> Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  const sorted = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  return (
    <Section id="projects" eyebrow="04 · Projects" title="Things I've built with Claude">
      <Reveal>
        <p className="-mt-4 mb-10 max-w-2xl text-muted">
          Real, deployed applications — designed, built and shipped with Claude as my AI pair-engineer. Click a live demo
          to try any of them.
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {sorted.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" eyebrow="05 · Education" title="Education & certifications">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <h3 className="flex items-center gap-2 font-medium">
              <GraduationCap className="size-5 text-accent" /> Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.degree} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{e.degree}</p>
                    <p className="text-sm text-muted">{e.school}</p>
                  </div>
                  <span className="font-mono text-sm text-muted">{e.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <h3 className="flex items-center gap-2 font-medium">
              <Award className="size-5 text-accent" /> Certifications & training
            </h3>
            <ul className="mt-5 space-y-5">
              {certifications.map((c) => (
                <li key={c.title}>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 · Contact" title="Let's work together">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
          <p className="relative max-w-xl text-lg text-muted">
            I&apos;m looking for roles in software engineering, ERP / Frappe development and AI application development.
            If you&apos;re hiring or want to talk about a project, I&apos;d love to hear from you.
          </p>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition hover:opacity-90"
            >
              <Mail className="size-4" /> <span className="break-all">{profile.email}</span>
            </a>
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-accent"
              >
                <Phone className="size-4" /> {profile.phone}
              </a>
            )}
          </div>
          <Socials className="relative mt-6" />
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © 2026 {profile.shortName}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Built with Next.js & <ClaudeMark className="size-3.5 text-accent" /> Claude
        </p>
      </div>
    </footer>
  );
}
