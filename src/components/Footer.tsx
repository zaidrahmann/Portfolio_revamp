export default function Footer() {
  return (
    <footer className="pt-12 pb-16">
      <div className="container-shell flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 sm:flex-row">
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Zaid Rehman
        </p>
        <p className="text-xs text-[var(--muted)]">
          Built with Next.js · privacy?
        </p>
      </div>
    </footer>
  );
}
