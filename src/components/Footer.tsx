export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]/80 py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Zaid Rehman
        </p>
        <p className="text-xs text-[var(--muted)]">
          Open to AI Engineering and Backend roles
        </p>
      </div>
    </footer>
  );
}
