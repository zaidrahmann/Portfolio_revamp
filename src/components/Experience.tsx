"use client";

import { useState } from "react";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
}

interface WorkPosition {
  title: string;
  start: string;
  end?: string;
  description: string[];
}

interface WorkCompany {
  name: string;
  subtitle: string;
  href?: string;
  logoSrc?: string;
  logo: string;
  positions: WorkPosition[];
}

const workItems: WorkCompany[] = [
  {
    name: "SJ Innovation",
    subtitle: "Dhaka, Bangladesh",
    href: "https://sjinnovation.com/",
    logoSrc: "https://www.google.com/s2/favicons?domain=sjinnovation.com&sz=128",
    logo: "SJ",
    positions: [
      {
        title: "Junior AI Solutions Engineer",
        start: "Dec 2025",
        end: "Present",
        description: [
          "Reduced CollabAI (enterprise AI platform) LLM API spend by 20-35% through token-efficiency design using context compression, model routing, memory distillation, and client-side LRU prompt caching.",
          "Delivered zero-cost responses for repeated prompts through cache-hit execution using in-memory retention for identical and near-identical requests.",
          "Accelerated workflows by up to 60% through agentic automation using n8n, webhooks, and custom REST APIs, with reliability reinforced by multi-agent validation and structured error handling.",
        ],
      },
    ],
  },
  {
    name: "Center for Intelligent Computing (CIC)",
    subtitle: "Chattogram, Bangladesh",
    logoSrc: "/cic.jpg",
    logo: "CIC",
    positions: [
      {
        title: "Research Assistant",
        start: "Jul 2025",
        end: "Dec 2025",
        description: [
          "Collaborated under Prof. Dr. Mohammad Shamsul Arefin (Former Dean, CUET; President, Bangladesh Computer Society) on multi-track research and publication operations.",
          "Produced 200+ publication-ready chapters across 7 international volumes through end-to-end LaTeX workflows for Taylor & Francis and Springer.",
          "Increased submission throughput through manuscript pipeline automation using metadata tracking, reference validation, and conference packaging for AI research papers.",
        ],
      },
    ],
  },
];

const educationItems: TimelineItem[] = [
  {
    title: "BRAC University",
    subtitle: "BSc in Computer Science · Dhaka, Bangladesh",
    period: "Jun 2021 - Jun 2025",
    points: [
      "Concentrations in intelligence and modeling/simulations.",
      "GPA 3.53/4.00 with Dean's List distinction.",
    ],
  },
  {
    title: "Chattogram Cantonment Public College",
    subtitle: "Higher Secondary Certificate · Chattogram, Bangladesh",
    period: "2020",
    points: ["Graduated with 5.00/5.00 in science track."],
  },
];

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="surface-card rounded-2xl px-5 py-5 sm:px-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm text-muted">{item.subtitle}</p>
        </div>
        <p className="text-sm text-muted">{item.period}</p>
      </div>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
        {item.points.map((point) => (
          <li key={point}>- {point}</li>
        ))}
      </ul>
    </article>
  );
}

function WorkCard({ item }: { item: WorkCompany }) {
  const logoBadge = (
    <>
      {item.logoSrc ? (
        <img
          src={item.logoSrc}
          alt={`${item.name} logo`}
          className="h-9 w-9 rounded-full object-contain"
          loading="lazy"
        />
      ) : (
        item.logo
      )}
    </>
  );

  return (
    <div className="relative flex gap-4 sm:gap-5">
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.name} website`}
          className="relative z-1 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground transition-colors hover:border-accent"
        >
          {logoBadge}
        </a>
      ) : (
        <div className="relative z-1 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground">
          {logoBadge}
        </div>
      )}

      <article className="min-w-0 flex-1">
        <div className="flex flex-col gap-1">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-2xl font-semibold leading-tight text-foreground transition-colors hover:text-accent"
            >
              {item.name}
            </a>
          ) : (
            <h3 className="text-2xl font-semibold leading-tight text-foreground">{item.name}</h3>
          )}
          <p className="text-sm text-muted">{item.subtitle}</p>
        </div>

        <div className="mt-3 space-y-4">
          {item.positions.map((position) => (
            <div key={`${item.name}-${position.title}`} className="space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <p className="font-semibold text-foreground">{position.title}</p>
                <p className="text-sm text-muted">
                  {position.start} - {position.end ?? "Present"}
                </p>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-foreground">
                {position.description.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

function WorkTimeline() {
  return (
    <article className="surface-card rounded-2xl px-5 py-5 sm:px-6">
      <div className="relative">
        <div className="absolute bottom-2 left-6 top-2 w-px bg-border" aria-hidden />
        <div className="space-y-8">
          {workItems.map((item) => (
            <WorkCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <section id="experience" className="section-shell">
      <div className="container-shell">
        <div className="rounded-xl border border-border bg-(--surface-soft) p-1">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setActiveTab("work")}
              className={`rounded-lg px-4 py-2 text-lg font-medium transition ${
                activeTab === "work" ? "bg-background text-foreground" : "text-muted"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`rounded-lg px-4 py-2 text-lg font-medium transition ${
                activeTab === "education" ? "bg-background text-foreground" : "text-muted"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {activeTab === "work" ? (
            <WorkTimeline />
          ) : (
            educationItems.map((item) => <TimelineCard key={item.title} item={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
