"use client";

import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="section-shell pt-28 sm:pt-32">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker mb-4">AI Engineer</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Zaid Rehman
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--foreground)]/90 sm:text-xl">
            Agentic AI Systems · Multi-Agent Orchestration · Backend APIs
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
            I design and deploy <strong>agentic AI systems</strong> and{" "}
            <strong>multi-agent workflows</strong> for complex business
            operations. I combine <strong>LLM agents</strong>,{" "}
            <strong>tool integration</strong>, and{" "}
            <strong>backend system design</strong> to ship production-grade AI
            services.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Currently at SJ Innovation — reduced LLM API spend by{" "}
            <strong className="text-[var(--foreground)]">20–35%</strong> and
            accelerated workflows by{" "}
            <strong className="text-[var(--foreground)]">up to 60%</strong>{" "}
            through agentic automation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#f7f3ee] transition-colors hover:bg-[var(--accent-hover)]"
            >
              View Projects
              <ArrowRight size={16} />
            </button>
            <a
              href="/resume"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View Resume
              <FileText size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="pill">Dhaka, Bangladesh</span>
            <span className="pill">Open to Remote Roles</span>
            <span className="pill">Agentic AI</span>
            <span className="pill">Multi-Agent Systems</span>
            <span className="pill">LLM Engineering</span>
            <span className="pill">Backend APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
