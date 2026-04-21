import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    institution: "BRAC University",
    credential: "Bachelor of Science in Computer Science",
    concentrations: "Concentrations: Intelligence and Modeling/Simulations",
    period: "June 2021 – June 2025",
    result: "GPA: 3.53/4.00 · Dean's List (2×)",
    location: "Dhaka, Bangladesh",
  },
  {
    institution: "Chattogram Cantonment Public College",
    credential: "Higher Secondary Certificate",
    concentrations: null,
    period: "2020",
    result: "Grade: 5.00/5.00",
    location: "Chattogram, Bangladesh",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-shell border-t border-[var(--border)]">
      <div className="container-shell">
        <div className="mb-10">
          <p className="section-kicker mb-3">
            Academic
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {educationItems.map((item) => (
            <article key={`${item.institution}-${item.period}`} className="surface-card p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-2.5">
                  <GraduationCap size={18} className="text-[var(--accent)]" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-semibold text-[var(--foreground)]">
                      {item.institution}
                    </h3>
                    <p className="text-xs text-[var(--muted)]">{item.period}</p>
                  </div>
                  <p className="mt-2 text-sm text-[var(--foreground)]">{item.credential}</p>
                  {item.concentrations && (
                    <p className="mt-0.5 text-sm text-[var(--muted)]">{item.concentrations}</p>
                  )}
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.result} · {item.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
