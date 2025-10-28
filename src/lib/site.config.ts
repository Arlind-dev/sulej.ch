export type SiteConfig = {
  ownerName: string;
  contactEmail: string;
  domain: string; // e.g. "sulej.ch"
  siteTitle: string; // e.g. "sulej.ch"
  githubRepo?: string; // optional repo URL
};

export const site: SiteConfig = {
  ownerName: "Arlind Sulejmani",
  contactEmail: "arlind@sulej.ch",
  domain: "sulej.ch",
  siteTitle: "sulej.ch",
  githubRepo: "https://github.com/Arlind-dev/sulej.ch"
};

export const currentYear = new Date().getFullYear();
