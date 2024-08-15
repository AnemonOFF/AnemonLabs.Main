export type Project = {
  name: string;
  description: string;
  images: string[];
  stack: Technology[];
  pageName: string;
  year: string;
  url?: string;
  highlightClassName?: string;
  isPresent?: boolean;
};

export type Technology = {
  icon: string;
  name: string;
  category: string;
};
