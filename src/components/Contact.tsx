import { Globe, Link2, Mail, Phone } from "lucide-react";

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
    icon: Link2,
    label: "GitHub",
    value: "github.com/zaidrahmann",
    href: "https://github.com/zaidrahmann",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/zaidrehmann",
    href: "https://www.linkedin.com/in/zaidrehmann/",
  },
  {
    icon: Globe,
    label: "Google Scholar",
    value: "scholar profile",
    href: "https://scholar.google.com/citations?user=YBU9sGoAAAAJ&hl=en&authuser=1",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell border-t border-[var(--border)]/80">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-kicker mb-3">Contact</p>
          <h2 className="section-title">
            Let&apos;s build something meaningful together.
          </h2>
          <p className="section-copy mt-4">
            I&apos;m open to AI Engineer and Backend Engineer roles, plus
            backend automation and AI integration projects.
          </p>

          <div className="mt-8 space-y-3">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="surface-card flex items-center justify-between p-4"
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

          <div className="surface-card mt-6 p-5">
            <p className="text-sm text-[var(--muted)]">
              Prefer email? Send a short note and I&apos;ll reply within 24 hours.
            </p>
            <a
              href="mailto:zaidrehman3103@gmail.com?subject=Hello%20Zaid"
              className="mt-3 inline-flex min-h-10 items-center rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[#f7f3ee] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
