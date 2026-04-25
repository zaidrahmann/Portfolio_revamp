import { ArrowUpRight } from "lucide-react";

interface PostItem {
  title: string;
  authors: string;
  venue: string;
  status: string;
  link: string | null;
}

const publications: PostItem[] = [
  {
    title:
      "Privacy-Aware Feature Envy Detection through Survey-Driven Federated Learning: Fed-MLP and Fed-Hybrid Architectures",
    authors:
      "Atiya Siddika, Zaid Rehman, Mohammad Shamsul Arefin",
    venue:
      "5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE-26), Track: Software Engineering & Security",
    status: "Accepted",
    link: "https://ieeexplore.ieee.org/document/11429407",
  },
  {
    title:
      "Modern Imaging and Learning Methods for Burn-Depth Assessment: A Structured Review",
    authors:
      "Atiya Siddika, Zaid Rehman, Md. Fahmidul Hoque, Mohammad Shamsul Arefin, Pranab Kumar Dhar",
    venue:
      "5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE-26), Track: AI and Machine Learning",
    status: "Accepted",
    link: "https://ieeexplore.ieee.org/document/11429352",
  },
  {
    title:
      "CAM-PoEm: Contour-Aware Mamba Bottleneck with Multi-Kernel Positional Embedding-based Encoder for Gastrointestinal Polyp Segmentation",
    authors:
      "Fabliha Afaf Sarwar, Abdullah All Jilan, Zaid Rehman, Md Samin Rahman",
    venue:
      "CV4Clinical 2026: Computer Vision for Real-world Clinical Translation",
    status: "Under Review",
    link: null,
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section-shell">
      <div className="container-shell">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="title-serif text-2xl sm:text-3xl">publications</h2>
          <a
            href="https://scholar.google.com/citations?user=YBU9sGoAAAAJ&hl=en&authuser=1"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted text-sm"
          >
            research profile
          </a>
        </div>

        <div className="space-y-3">
          {publications.map((publication) => (
            <article key={publication.title} className="surface-card p-5 sm:p-6">
              {publication.link ? (
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1 text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                >
                  <span>{publication.title}</span>
                  <ArrowUpRight size={16} className="mt-1 opacity-70" />
                </a>
              ) : (
                <p className="text-lg font-semibold text-[var(--foreground)]">
                  {publication.title}
                </p>
              )}
              <p className="mt-2 text-sm text-[var(--muted)]">{publication.authors}</p>
              <p className="mt-3 text-xs text-[var(--muted)]">
                {publication.status === "Accepted"
                  ? `Accepted at ${publication.venue}`
                  : `Under Review at ${publication.venue}`}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
