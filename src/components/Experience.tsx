import type { ReactNode } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: ReactNode[];
}

const experiences: ExperienceItem[] = [
  {
    role: "AI Solutions Engineer (Intern)",
    company: "SJ Innovation",
    period: "Dec 2025 – Present",
    bullets: [
      <>Reduced CollabAI (enterprise AI platform) LLM API spend by <strong>20–35%</strong> through token-efficiency design using context compression, model routing, memory distillation, and client-side LRU prompt caching.</>,
      <>Delivered <strong>zero-cost responses</strong> for repeated prompts through cache-hit execution using in-memory retention for identical and near-identical requests.</>,
      <>Accelerated workflows by <strong>up to 60%</strong> through agentic automation using n8n, webhooks, and custom REST APIs, with reliability reinforced by multi-agent validation and structured error handling.</>,
    ],
  },
  {
    role: "Research Assistant",
    company: "Center for Intelligent Computing (CIC)",
    period: "Jul 2025 – Dec 2025",
    bullets: [
      <>Collaborated under Prof. Dr. Mohammad Shamsul Arefin (Former Dean, CUET; President, Bangladesh Computer Society) on multi-track research and publication operations.</>,
      <>Produced <strong>200+ publication-ready chapters</strong> across <strong>7 international volumes</strong> through end-to-end LaTeX workflows for Taylor &amp; Francis and Springer.</>,
      <>Increased submission throughput through manuscript pipeline automation using metadata tracking, reference validation, and conference packaging for AI research papers.</>,
    ],
  },
];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative pl-6 sm:pl-8">
      <span className="absolute left-0 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-[var(--accent)] bg-[var(--background)]" />
      <div className="surface-card px-4 pb-5 pt-4 sm:px-5">
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold text-[var(--foreground)]">
            {item.role}
          </h3>
          <p className="text-xs text-[var(--muted)]">{item.period}</p>
        </div>
        <p className="text-sm font-medium text-[var(--accent)]">{item.company}</p>
        <ul className="mt-2 space-y-2">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed text-[var(--foreground)]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-[var(--border)]/80">
      <div className="container-shell">
        <div className="mb-12">
          <p className="section-kicker mb-3">Experience</p>
          <h2 className="section-title">
            Professional experience focused on measurable impact.
          </h2>
          <p className="section-copy mt-4 max-w-2xl">
            A concise timeline of roles where I improved speed, reliability, and
            product outcomes.
          </p>
        </div>

        <div className="relative ml-1 max-w-3xl space-y-4 border-l border-[var(--border)]">
          {experiences.map((item) => (
            <ExperienceCard key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
