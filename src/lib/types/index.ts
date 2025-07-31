export type Message = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export interface Service {
  id: string;
  url: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  header: { h1: string };
  sections: { h2: string; items: string[] }[];
  cta: { text: string; href: string };
}
