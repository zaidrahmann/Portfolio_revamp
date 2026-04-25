interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "LLMs & Agentic Systems",
    skills: [
      "RAG",
      "Multi-Agent Orchestration",
      "Tool-Calling Agents",
      "Prompt Engineering",
      "LLM Workflow Design",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Google ADK",
      "OpenAI API",
      "Google Gemini API",
      "Mistral API",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "Deep Learning",
      "CNNs",
      "Embeddings",
      "Retrieval & Reranking",
      "Model Integration",
      "Model Evaluation",
    ],
  },
  {
    category: "Backend, APIs & Web",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "REST APIs",
      "WebSockets",
      "React",
      "Zod",
      "Authentication",
      "Rate Limiting",
      "Scalable Backend Architecture",
      "Distributed System Design",
    ],
  },
  {
    category: "Databases & Search",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "FAISS",
      "Vector Search",
    ],
  },
  {
    category: "Tools & Automation",
    skills: [
      "Git",
      "Docker",
      "n8n",
      "Zapier",
      "Postman",
    ],
  },
  {
    category: "Languages",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "C++",
      "SQL",
    ],
  },
  {
    category: "Communication & Delivery",
    skills: [
      "Technical Design Translation",
      "Technical Writing",
      "Documentation",
      "Cross-Functional Collaboration",
      "Mentoring",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell border-t border-[var(--border)]/80">
      <div className="container-shell">
        <div className="mb-12">
          <p className="section-kicker mb-3">Skills</p>
          <h2 className="section-title">
            Focused stack for shipping product work.
          </h2>
          <p className="section-copy mt-4 max-w-2xl">
            Role-aligned for AI engineering and backend delivery: what I
            use in production and what I can ramp up quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="surface-card overflow-hidden p-5 pl-4"
              style={{ borderLeft: "3px solid var(--accent)" }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[var(--surface-contrast)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
