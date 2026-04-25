"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "projects", href: "#projects" },
  { label: "publications", href: "#publications" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const rootTheme = document.documentElement.getAttribute("data-theme");
    let nextTheme: "light" | "dark" | null = null;
    if (rootTheme === "light" || rootTheme === "dark") {
      nextTheme = rootTheme;
    } else {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        nextTheme = storedTheme;
      }
    }

    if (!nextTheme || nextTheme === theme) {
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      setTheme(nextTheme);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.history.replaceState(null, "", href);
      const offset = 72;
      const top =
        el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--background)]/75 backdrop-blur-sm" : "bg-[var(--background)]"
      }`}
    >
      <nav className="container-shell flex items-center justify-between py-5">
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="link-muted cursor-pointer text-base lowercase"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-300" />
            ) : (
              <Moon size={16} className="text-[var(--accent)]" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-amber-300" />
            ) : (
              <Moon size={18} className="text-[var(--accent)]" />
            )}
          </button>
          <button
            className="p-2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-b border-[var(--border)] bg-[var(--background)] px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full rounded-xl px-3 py-3 text-left text-sm lowercase text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume"
                  className="block rounded-xl bg-[var(--surface)] px-3 py-3 text-sm font-medium text-[var(--foreground)]"
                >
                  Open Resume
                </a>
              </li>
            </ul>
          </div>
        )}
    </header>
  );
}
