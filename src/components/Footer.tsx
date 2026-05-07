import { profile } from "@/data/profile";

type IconProps = { className?: string };

const icons: Record<string, (p: IconProps) => React.ReactElement> = {
  Instagram: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  TikTok: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16.5 3a4.5 4.5 0 0 0 4.5 4.5v3a7.5 7.5 0 0 1-4.5-1.51V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.18a3 3 0 1 0 2 2.82V3h3z" />
    </svg>
  ),
  YouTube: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  ),
  Pinterest: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2a10 10 0 0 0-3.65 19.3c-.09-.78-.17-1.99.04-2.85.18-.74 1.18-4.71 1.18-4.71s-.3-.6-.3-1.5c0-1.4.81-2.45 1.83-2.45.87 0 1.29.65 1.29 1.43 0 .87-.55 2.18-.84 3.39-.24 1.02.51 1.85 1.51 1.85 1.81 0 3.21-1.91 3.21-4.67 0-2.44-1.76-4.15-4.27-4.15-2.91 0-4.62 2.18-4.62 4.43 0 .88.34 1.82.76 2.33.08.1.09.19.07.29-.08.32-.25 1.02-.28 1.16-.04.19-.15.23-.34.14-1.27-.59-2.07-2.45-2.07-3.94 0-3.21 2.33-6.16 6.72-6.16 3.53 0 6.27 2.51 6.27 5.87 0 3.5-2.21 6.32-5.27 6.32-1.03 0-2-.54-2.33-1.17 0 0-.51 1.94-.63 2.42-.23.88-.85 1.99-1.27 2.66A10 10 0 1 0 12 2z" />
    </svg>
  ),
  Email: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-terra-900 text-stone-100"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-clay-300">
            Let&apos;s connect
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Say hello.
          </h2>
          <p className="mt-4 max-w-md text-stone-300">
            Brand collaborations, editorial features, or just a kind note —
            I read every message myself.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-display text-2xl text-clay-300 hover:text-clay-400"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex flex-col gap-6 md:items-end md:text-right">
          <p className="text-xs uppercase tracking-[0.4em] text-clay-300">
            Find me on
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            {profile.socials.map((s) => {
              const Icon = icons[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${s.name} — ${s.handle}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-100/20 text-stone-100 transition-colors hover:border-clay-300 hover:text-clay-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-300"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-100/20 text-stone-100 transition-colors hover:border-clay-300 hover:text-clay-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-300"
              >
                {icons.Email({ className: "h-5 w-5" })}
              </a>
            </li>
          </ul>
          <p className="text-sm text-stone-300">
            Based in {profile.basedIn} · Available worldwide
          </p>
        </div>
      </div>

      <div className="border-t border-stone-100/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-stone-400 md:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-display tracking-wide">
            {profile.firstName}
            <span className="text-clay-400">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
