import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden text-white"
    >
      <Image
        src={profile.heroImage.src}
        alt={profile.heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="mb-6 inline-block text-xs uppercase tracking-[0.4em] text-sand-100/90">
          {profile.kicker}
        </span>
        <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={profile.socials[0].href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-clay-500 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white shadow-lg shadow-black/20 transition-colors hover:bg-clay-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Follow on Instagram
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-terra-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
