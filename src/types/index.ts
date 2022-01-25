import type { Entry } from "contentful";
export interface Project {
  id: string;
  name: string;
  slug: string;
  categories: string[];
  description: string;
  github?: string;
  link?: string;
  image?: string;
}

export interface ImageEntry {
  title: string;
  description: string;
  file: {
    url: string;
  };
}

export interface ProjectEntry {
  name: string;
  slug: string;
  categories: string[];
  description: string;
  image: Entry<ImageEntry>;
  github: string;
  link: string;
}