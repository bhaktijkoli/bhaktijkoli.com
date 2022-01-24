export interface Project {
  fields: {
    name: string;
    slug: string;
    categories: string[];
    description: string;
    github?: string;
    link?: string;
    image?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
