"use client";

import type { ReactNode } from "react";

interface Project {
  title: string;
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
  tech: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "DocuMind-RAG",
    problem:
      "Internal teams needed trustworthy answers from long technical documents across multiple languages.",
    solution: (
      <>
        Engineered a <strong>multilingual RAG system from scratch</strong> using
        FAISS and sentence-transformers (no LangChain/LlamaIndex). Retrieval
        optimized with{" "}
        <strong>top-20 recall + top-5 cross-encoder reranking</strong>. Supports
        HuggingFace Inference API and Ollama for hybrid deployment.
      </>
    ),
    impact: (
      <>
        Shipped <strong>real-time document Q&A</strong> via a FastAPI REST API
        and Gradio UI, with increased answer precision through reranking.
      </>
    ),
    tech: [
      "Python",
      "FastAPI",
      "FAISS",
      "sentence-transformers",
      "HuggingFace Inference API",
      "Ollama",
      "Gradio",
    ],
    github: "https://github.com/zaidrahmann/DocuMind-RAG",
  },
  {
    title: "Realtime Match Tracker",
    problem:
      "Sports users needed reliable real-time match updates without refresh friction.",
    solution: (
      <>
        Built a full-stack platform with Node.js, PostgreSQL, Drizzle ORM, and
        React 18. Hardened API reliability with{" "}
        <strong>Zod schema validation</strong> and structured error handling.
      </>
    ),
    impact: (
      <>
        Delivered <strong>low-latency live updates</strong> via resilient
        WebSocket architecture with heartbeat checks, reconnection handling,
        event broadcasting, and automated background job ingestion.
      </>
    ),
    tech: ["Node.js", "Express 5", "PostgreSQL", "Drizzle ORM", "React 18", "WebSockets", "Zod"],
    github: "https://github.com/zaidrahmann/sportz-websockets",
  },
  {
    title: "FitHoba",
    problem:
      "Users needed personalized diet and workout planning instead of generic static fitness plans.",
    solution:
      "Developed a full-stack MERN app with profile and metric management APIs for structured user health data operations.",
    impact: (
      <>
        Enabled <strong>dynamic recommendation generation</strong> through AI
        integration using external LLM APIs driven by user health inputs.
      </>
    ),
    tech: ["MongoDB", "Express", "React", "Node.js", "LLM APIs"],
    github: "https://github.com/zaidrahmann/FitHoba",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface-card flex h-full flex-col p-5 transition-shadow hover:shadow-sm sm:p-6">
      <div className="mb-5">
        <h3 className="text-lg font-semibold leading-tight text-[var(--foreground)]">
          {project.title}
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
            Problem
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
            Solution
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">
            {project.solution}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
            Impact
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">
            {project.impact}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-[var(--border)]/90 pt-4">
        <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
          Tech stack
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-contrast)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-medium text-[var(--accent)] transition-colors hover:bg-[var(--surface-contrast)]"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell border-t border-[var(--border)]/80">
      <div className="container-shell">
        <div className="mb-12">
          <p className="section-kicker mb-3">Projects</p>
          <h2 className="section-title">
            Selected work that solves real product problems.
          </h2>
          <p className="section-copy mt-4 max-w-2xl">
            A focused set of projects where I owned architecture, shipped
            product decisions, and improved outcomes through thoughtful
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
