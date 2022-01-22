export interface Project {
  fields: {
    name: string;
    slug: string;
    categories: string[];
    description: string;
    github: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
