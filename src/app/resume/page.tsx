import Link from "next/link";

const experience = [
  {
    role: "Junior AI Solutions Engineer",
    company: "SJ Innovation",
    location: "Dhaka, Bangladesh",
    period: "Dec 2025 - Present",
    bullets: [
      "Reduced CollabAI (enterprise AI platform) LLM API spend by 20-35% through token-efficiency design using context compression, model routing, memory distillation, and client-side LRU prompt caching.",
      "Delivered zero-cost responses for repeated prompts through cache-hit execution using in-memory retention for identical and near-identical requests.",
      "Accelerated workflows by up to 60% through agentic automation using n8n, webhooks, and custom REST APIs, with reliability reinforced by multi-agent validation and structured error handling.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Center for Intelligent Computing (CIC)",
    location: "Chattogram, Bangladesh",
    period: "Jul 2025 - Dec 2025",
    bullets: [
      "Collaborated under Prof. Dr. Mohammad Shamsul Arefin (Former Dean, CUET; President, Bangladesh Computer Society) on multi-track research and publication operations.",
      "Produced 200+ publication-ready chapters across 7 international volumes through end-to-end LaTeX workflows for Taylor & Francis and Springer.",
      "Increased submission throughput through manuscript pipeline automation using metadata tracking, reference validation, and conference packaging for AI research papers.",
    ],
  },
];

const projects = [
  {
    name: "DocuMind-RAG",
    stack: "Python, FAISS, FastAPI",
    link: "https://github.com/zaidrahmann/DocuMind-RAG",
    bullets: [
      "Engineered a multilingual RAG system from scratch using Python, FAISS, and sentence-transformers (without LangChain/LlamaIndex).",
      "Increased answer precision through top-20 recall plus top-5 cross-encoder reranking.",
      "Enabled hybrid deployment with HuggingFace Inference API and Ollama, then shipped real-time Q&A through FastAPI REST API and Gradio UI.",
    ],
  },
  {
    name: "Realtime Match Tracker",
    stack: "Node.js, PostgreSQL, React",
    link: "https://github.com/zaidrahmann/sportz-websockets",
    bullets: [
      "Built a real-time match tracking platform with Node.js, PostgreSQL, Drizzle ORM, and React 18.",
      "Hardened API reliability with Zod schema validation and structured error handling.",
      "Delivered low-latency live updates through resilient WebSocket subscriptions, heartbeat checks, reconnection handling, and event broadcasting.",
    ],
  },
  {
    name: "FitHoba",
    stack: "MERN",
    link: "https://github.com/zaidrahmann/FitHoba",
    bullets: [
      "Developed a full-stack MERN application for personalized diet and workout planning.",
      "Structured user health data operations through backend APIs and profile/metric management.",
      "Enabled dynamic recommendation generation through external LLM API integration.",
    ],
  },
];

const education = [
  "B.Sc. in Computer Science, BRAC University (June 2021 - June 2025) - GPA 3.53/4.00, Dean's List (2x), Concentrations: Intelligence and Modeling/Simulations",
  "Higher Secondary Certificate, Chattogram Cantonment Public College (2020) - Grade 5.00/5.00",
];

const publications = [
  {
    title: "Modern Imaging and Learning Methods for Burn-Depth Assessment: A Structured Review",
    authors:
      "Atiya Siddika, Zaid Rehman, Md. Fahmidul Hoque, Mohammad Shamsul Arefin, Pranab Kumar Dhar",
    venue:
      "5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE-26) - Track: AI and Machine Learning",
    status: "Accepted",
    link: "https://ieeexplore.ieee.org/document/11429352",
  },
  {
    title:
      "Privacy-Aware Feature Envy Detection through Survey-Driven Federated Learning: Fed-MLP and Fed-Hybrid Architectures",
    authors:
      "Atiya Siddika, Zaid Rehman, Md. Fahmidul Hoque, Mohammad Shamsul Arefin, Pranab Kumar Dhar",
    venue:
      "5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE-26) - Track: Software Engineering & Security",
    status: "Accepted",
    link: "https://ieeexplore.ieee.org/document/11429407",
  },
  {
    title:
      "CAM-PoEm: Contour-Aware Mamba Bottleneck with Multi-Kernel Positional Embedding-based Encoder for Gastrointestinal Polyp Segmentation",
    authors: "Fabliha Afaf Sarwar, Abdullah All Jilan, Zaid Rehman, Md Samin Rahman",
    venue:
      "CV4Clinical 2026: Computer Vision for Real-world Clinical Translation",
    status: "Under Review",
    link: null,
  },
];

const skills = [
  { category: "Programming Languages", items: "Python, JavaScript, Java, C++, SQL" },
  { category: "AI & Machine Learning", items: "PyTorch, deep learning, CNNs, embeddings, retrieval and reranking, model integration and evaluation" },
  { category: "LLMs & Agentic Systems", items: "RAG, multi-agent orchestration, tool-calling agents, prompt engineering, LangChain, LangGraph, LangSmith, Google ADK, LLM workflow design; OpenAI, Google Gemini, and Mistral APIs" },
  { category: "Backend, APIs & Web", items: "FastAPI, Node.js (Express), REST APIs, WebSockets, React, Zod, authentication, rate limiting, scalable backend architecture, distributed system design" },
  { category: "Databases & Search", items: "PostgreSQL, MongoDB, Drizzle ORM, FAISS, vector search" },
  { category: "Tools & Automation", items: "Git, Docker, Postman, n8n, Zapier" },
  { category: "Communication & Delivery", items: "Translating requirements into technical designs, technical writing and documentation, cross-functional collaboration, mentoring" },
];

export default function ResumePage() {
  return (
    <main className="section-shell">
      <div className="container-shell max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Back to Portfolio
          </Link>
          <a
            href="/resume/Zaid_Rehman_CV.pdf"
            download="Zaid_Rehman_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </a>
        </div>

        <section className="surface-card p-6 sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Zaid Rehman
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
            Junior AI Solutions Engineer | Agentic AI Systems | Multi-Agent Orchestration | Dhaka, Bangladesh
          </p>
          <p className="mt-4 text-sm text-[var(--foreground)] sm:text-base">
            Phone: 01786448717 |{" "}
            Email:{" "}
            <a className="underline" href="mailto:zaidrehman3103@gmail.com">
              zaidrehman3103@gmail.com
            </a>{" "}
            | LinkedIn:{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/zaidrehmann/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/zaidrehmann
            </a>{" "}
            | GitHub:{" "}
            <a
              className="underline"
              href="https://github.com/zaidrahmann"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/zaidrahmann
            </a>
            {" "} | Scholar:{" "}
            <a
              className="underline"
              href="https://scholar.google.com/citations?user=YBU9sGoAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
          </p>
        </section>

        <section className="mt-6 surface-card p-6 sm:p-8">
          <p className="section-kicker mb-2">Summary</p>
          <p className="section-copy">
            Junior AI Solutions Engineer specializing in agentic AI systems and multi-agent orchestration for complex, high-stakes business workflows.
            Experienced in architecting and deploying production-grade AI services by combining LLM agents, tool integration, and backend system design across distributed environments.
            Strong focus on scalable architecture, reliability engineering, and translating advanced AI capabilities into measurable operational outcomes.
          </p>
        </section>

        <section className="mt-6 surface-card p-6 sm:p-8">
          <p className="section-kicker mb-4">Experience</p>
          <div className="space-y-6">
            {experience.map((item) => (
              <article key={item.role}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">
                    {item.role} - {item.company}
                  </h2>
                  <p className="text-sm text-[var(--muted)]">{item.period}</p>
                </div>
                <p className="mt-1 text-sm text-[var(--accent)]">{item.location}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--foreground)]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 surface-card p-6 sm:p-8">
          <p className="section-kicker mb-4">Skills</p>
          <div className="space-y-2">
            {skills.map((skill) => (
              <p key={skill.category} className="text-sm text-[var(--foreground)]">
                <span className="font-semibold">{skill.category}:</span> {skill.items}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-6 surface-card p-6 sm:p-8">
          <p className="section-kicker mb-4">Projects</p>
          <div className="space-y-3">
            {projects.map((project) => (
              <article key={project.name} className="border-b border-[var(--border)]/60 pb-4 last:border-b-0 last:pb-0">
                <p className="text-sm text-[var(--foreground)]">
                  <span className="font-semibold">{project.name}</span> ({project.stack}) -{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    GitHub
                  </a>
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--foreground)]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 surface-card p-6 sm:p-8">
          <p className="section-kicker mb-4">Education</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--foreground)]">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 surface-card p-6 sm:p-8">
          <p className="section-kicker mb-4">Publications</p>
          <div className="space-y-3">
            {publications.map((publication) => (
              <article key={publication.title}>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {publication.link ? (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {publication.status === "Accepted"
                    ? `Accepted at ${publication.venue}`
                    : `Under Review at ${publication.venue}`}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{publication.authors}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
