"use client";

import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  source: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "DocuMind-RAG",
    description:
      "Multilingual Retrieval-Augmented Generation system for reliable long-document Q&A.",
    highlights: [
      "Built from scratch with Python, FAISS, and sentence-transformers without LangChain/LlamaIndex.",
      "Improved answer precision using top-20 recall with top-5 cross-encoder reranking.",
      "Shipped hybrid inference support with HuggingFace Inference API, Ollama, FastAPI, and Gradio.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "FAISS",
      "sentence-transformers",
      "HuggingFace Inference API",
      "Ollama",
      "Gradio",
    ],
    source: "https://github.com/zaidrahmann/DocuMind-RAG",
  },
  {
    title: "Realtime Match Tracker",
    description:
      "Full-stack real-time sports tracking platform with resilient WebSocket architecture.",
    highlights: [
      "Implemented end-to-end with Node.js, PostgreSQL, Drizzle ORM, and React 18.",
      "Hardened API reliability using Zod validation and structured backend error handling.",
      "Delivered low-latency updates via heartbeat checks, reconnection handling, and event broadcasting.",
    ],
    tech: ["Node.js", "Express 5", "PostgreSQL", "Drizzle ORM", "React 18", "WebSockets", "Zod"],
    source: "https://github.com/zaidrahmann/sportz-websockets",
  },
  {
    title: "FitHoba",
    description:
      "AI-powered diet and workout planning app built on a MERN architecture.",
    highlights: [
      "Developed structured profile and metric management APIs for user health data.",
      "Enabled dynamic recommendation generation through external LLM API integration.",
      "Built full-stack user flows for personalized planning and goal-based progress tracking.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "LLM APIs"],
    source: "https://github.com/zaidrahmann/FitHoba",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface-card flex h-full flex-col p-5 sm:p-6">
      <div>
        <h3 className="title-serif text-2xl font-semibold leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--foreground)]/90">{project.description}</p>
      </div>

      <ul className="mt-3 space-y-1 text-xs leading-relaxed text-[var(--foreground)]/90">
        {project.highlights.map((point) => (
          <li key={point}>- {point}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-[var(--surface-contrast)] px-2 py-1 text-[11px] text-[var(--muted)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="link-muted inline-flex items-center gap-1 text-sm font-medium"
        >
          Source
          <ExternalLink size={14} />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted inline-flex items-center gap-1 text-sm font-medium"
          >
            Live Demo
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="title-serif text-2xl sm:text-3xl">featured projects</h2>
          <a
            href="https://github.com/zaidrahmann?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted text-sm"
          >
            view more
          </a>
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
