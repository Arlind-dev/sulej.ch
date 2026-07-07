export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "mail" | "key";
};

export type Project = {
  name: string;
  href: string;
  blurb: string;
};

export type SiteConfig = {
  ownerName: string;
  contactEmail: string;
  domain: string;
  siteTitle: string;
  intro: string;
  tagline: string;
  githubProfile: string;
  githubRepo: string;
  ogImage: string; // path, made absolute against the domain
};

export const site: SiteConfig = {
  ownerName: "Arlind Sulejmani",
  contactEmail: "arlind@sulej.ch",
  domain: "sulej.ch",
  siteTitle: "sulej.ch",
  intro: "Personal site with a few of my projects.",
  tagline: "Personal website.",
  githubProfile: "https://github.com/Arlind-dev",
  githubRepo: "https://github.com/Arlind-dev/sulej.ch",
  ogImage: "/og.png"
};

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Arlind-dev", icon: "github" },
  { label: "Email", href: `mailto:${site.contactEmail}`, icon: "mail" },
  { label: "PGP", href: "/pgp", icon: "key" }
];

export const projects: Project[] = [
  { name: "sulej.ch", href: "https://github.com/Arlind-dev/sulej.ch", blurb: "This website." },
  {
    name: "swiss-grades",
    href: "https://github.com/Arlind-dev/swiss-grades",
    blurb: "Swiss school grade calculator."
  }
];

export const currentYear = new Date().getFullYear();
