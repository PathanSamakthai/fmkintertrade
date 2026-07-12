/** Shared domain types for the FMK Intertrade homepage (brief §15). */

export type Lang = "en" | "th";

export interface NavLink {
  label: string;
  href: string;
}

export interface IconValue {
  /** Icon key resolved by <Icon name=... /> — a single consistent outline set. */
  icon: string;
  label: string;
  desc: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Principle {
  icon: string;
  title: string;
  desc: string;
}

export interface Solution {
  id: string;
  slug: string;
  icon: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
}

/**
 * A project reference. `verified: false` marks placeholder entries whose
 * name/scope/location must not be presented as confirmed fact (brief §07).
 */
export interface Project {
  id: string;
  type: string;
  name: string;
  location: string;
  scope?: string;
  verified: boolean;
}

export interface WhyItem {
  icon: string;
  num: string;
  title: string;
  desc: string;
}

export interface Office {
  city: string;
  role?: string;
  detail: string;
}

/**
 * A knowledge article. `published: false` keeps placeholder drafts from
 * claiming a real publish date (brief §11).
 */
export interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  published: boolean;
}
