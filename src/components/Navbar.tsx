"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-sand-50/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className={`font-display text-xl tracking-wide transition-colors ${
            scrolled || open ? "text-terra-900" : "text-white"
          }`}
        >
          {profile.firstName}
          <span className="text-clay-500">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm uppercase tracking-[0.18em] transition-colors hover:text-clay-500 ${
                  scrolled ? "text-stone-700" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.socials[0].href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-clay-500 bg-clay-500 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-clay-600 hover:border-clay-600"
            >
              Follow
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            scrolled || open
              ? "text-terra-900 hover:bg-sand-200"
              : "text-white hover:bg-white/10"
          }`}
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sand-200 bg-sand-50/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={closeMenu}
                  className="block rounded-md px-2 py-3 text-sm uppercase tracking-[0.18em] text-stone-700 hover:bg-sand-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.socials[0].href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-2 block rounded-md bg-clay-500 px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white hover:bg-clay-600"
              >
                Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
