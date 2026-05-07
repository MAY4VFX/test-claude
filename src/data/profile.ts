export type Social = {
  name: string;
  href: string;
  handle: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ImageRef = {
  src: string;
  alt: string;
};

export type Profile = {
  name: string;
  firstName: string;
  kicker: string;
  tagline: string;
  heroImage: ImageRef;
  portraitImage: ImageRef;
  bio: string[];
  stats: Stat[];
  socials: Social[];
  email: string;
  basedIn: string;
};

export const profile: Profile = {
  name: "Eliza Marquez",
  firstName: "Eliza",
  kicker: "Travel · Fashion · Slow living",
  tagline:
    "Wandering through golden hours and linen weekends — sharing stories from the road, one capsule wardrobe at a time.",
  basedIn: "Lisbon, Portugal",
  heroImage: {
    src: "https://images.unsplash.com/photo-1529946179074-87642f6204d7?auto=format&fit=crop&w=2400&q=80",
    alt: "Eliza standing on a coastal cliff at golden hour, dress flowing in the wind",
  },
  portraitImage: {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    alt: "Portrait of Eliza in soft natural light",
  },
  bio: [
    "I'm Eliza — a Lisbon-based traveler and fashion writer who has spent the last five years chasing slow mornings, sun-bleached coastlines, and quiet markets across forty-seven countries.",
    "What started as a tiny journal of outfit notes from a backpacking trip turned into a full-time love letter to the places that change us. I write about packing light, dressing intentionally, and finding beauty in the in-between.",
    "If you're here, you probably believe — like I do — that the way we dress, where we go, and how we move through the world can all be a little softer, a little kinder, and a lot more interesting.",
  ],
  stats: [
    { value: "248K", label: "Community" },
    { value: "47", label: "Countries" },
    { value: "32", label: "Brand stories" },
  ],
  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com/elizawanders",
      handle: "@elizawanders",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@elizawanders",
      handle: "@elizawanders",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@elizawanders",
      handle: "@elizawanders",
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/elizawanders",
      handle: "@elizawanders",
    },
  ],
  email: "hello@elizamarquez.com",
};
