import { Globe, Mail, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "zaidrehman3103@gmail.com",
    href: "mailto:zaidrehman3103@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01786448717",
    href: "tel:+8801786448717",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/zaidrehmann",
    href: "https://www.linkedin.com/in/zaidrehmann/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <div className="max-w-2xl">
          <h2 className="title-serif text-3xl font-semibold">contact</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Open to full-time AI Engineer and Backend Engineer roles focused on
            production LLM systems, workflow automation and scalable distributed
            architecture.
          </p>

          <div className="mt-6 space-y-3">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="surface-card flex items-center justify-between p-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-contrast)] p-2">
                    <Icon size={16} className="text-[var(--muted)]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                      {label}
                    </p>
                    <p className="text-sm text-[var(--foreground)]">
                      {value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="text-sm text-[var(--foreground)]">
              Prefer email? Send a short note and I&apos;ll usually reply within
              24 hours.
            </p>
            <a
              href="mailto:zaidrehman3103@gmail.com?subject=Hello%20Zaid"
              className="mt-3 inline-flex min-h-10 items-center rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
