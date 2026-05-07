import Image from "next/image";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-sand-50 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] ring-1 ring-clay-300/40 shadow-xl shadow-clay-500/10">
          <Image
            src={profile.portraitImage.src}
            alt={profile.portraitImage.alt}
            fill
            sizes="(min-width: 768px) 50vw, 90vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-[12px] ring-inset ring-sand-50/0" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-clay-500">
            About · {profile.basedIn}
          </span>
          <h2
            id="about-heading"
            className="mt-4 font-display text-4xl leading-tight text-terra-900 md:text-5xl"
          >
            About {profile.firstName}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-700 md:text-lg">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-sand-200 pt-8">
            {profile.stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <dt className="order-2 text-[0.7rem] uppercase tracking-[0.2em] text-stone-500">
                  {s.label}
                </dt>
                <dd className="font-display text-3xl text-terra-900 md:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
