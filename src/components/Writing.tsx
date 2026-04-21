const publications = [
  {
    title:
      "Modern Imaging and Learning Methods for Burn-Depth Assessment: A Structured Review",
    venue:
      "5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE-26)",
    track: "Track: AI and Machine Learning",
    tag: "Accepted · IEEE",
    authors:
      "Atiya Siddika, Zaid Rehman, Md. Fahmidul Hoque, Mohammad Shamsul Arefin, Pranab Kumar Dhar",
    link: "https://ieeexplore.ieee.org/document/11429352",
  },
  {
    title:
      "Privacy-Aware Feature Envy Detection through Survey-Driven Federated Learning: Fed-MLP and Fed-Hybrid Architectures",
    venue:
      "5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE-26)",
    track: "Track: Software Engineering & Security",
    tag: "Accepted · IEEE",
    authors:
      "Atiya Siddika, Zaid Rehman, Md. Fahmidul Hoque, Mohammad Shamsul Arefin, Pranab Kumar Dhar",
    link: "https://ieeexplore.ieee.org/document/11429407",
  },
  {
    title:
      "CAM-PoEm: Contour-Aware Mamba Bottleneck with Multi-Kernel Positional Embedding-based Encoder for Gastrointestinal Polyp Segmentation",
    venue: "CV4Clinical 2026: Computer Vision for Real-world Clinical Translation",
    track: null,
    tag: "Under Review",
    authors: "Fabliha Afaf Sarwar, Abdullah All Jilan, Zaid Rehman, Md Samin Rahman",
    link: null,
  },
];

export default function Writing() {
  return (
    <section id="publications" className="section-shell border-t border-[var(--border)]">
      <div className="container-shell">
        <div className="mb-12">
          <p className="section-kicker mb-3">
            Research
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Publications
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--muted)]">
            Peer-reviewed and in-review research work in AI, medical imaging,
            and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="surface-card rounded-xl p-5 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                  {publication.tag}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold leading-snug text-[var(--foreground)]">
                {publication.link ? (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                  >
                    {publication.title}
                  </a>
                ) : (
                  publication.title
                )}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-[var(--muted)]">
                {publication.authors}
              </p>
              <div className="border-t border-[var(--border)]/60 pt-3">
                <p className="text-sm text-[var(--foreground)]">
                  {publication.venue}
                </p>
                {publication.track && (
                  <p className="mt-0.5 text-xs text-[var(--muted)]">
                    {publication.track}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
