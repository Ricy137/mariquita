export interface Partner {
  org: string;
  name: string;
  title: string;
  logo: string;
  description: string;
  link: string;
}

export const PARTNERS: Partner[] = [
  {
    org: 'Surge',
    name: 'Dušanka Seratlić',
    title: 'Content Lead with Surge',
    link: 'https://www.surgewomen.io/',
    logo: '/surge.png',
    description:
      'Mariquita does a great job communicating complex ideas in an accessible and friendly way. They excel in all aspects of content creation: from on-page SEO and detailed research to internal communication and accepting feedback with grace. ',
  },
  {
    org: 'Cybrid',
    name: 'Lee Cocking',
    title: 'Head of Product at Cybrid',
    link: 'https://www.cybrid.xyz/',
    logo: '/cybrid.png',
    description:
      'Mariquita is a talented writer, and a pleasure to collaborate with. Her content is deeply researched, and she has an impressive ability to weave in the perfect mix of brand elements, positioning and market intel, all while skillfully cross-referencing with previous works and calls-to-action. ',
  },
  {
    org: 'New Society',
    name: 'Enrique Menendez',
    title: 'Editor-in-Chief at New Society',
    logo: '/ns.png',
    link: 'https://nwscty.xyz/products/decentralization-please-save-culture-foundation-edition',
    description:
      'Mariquita is a talented writer, and a pleasure to collaborate with. Her content is deeply researched, and she has an impressive ability to weave in the perfect mix of brand elements, positioning and market intel, all while skillfully cross-referencing with previous works and calls-to-action. ',
  },
];

export interface Service {
  name: string;
  description?: string;
}

export const SERVICES: Service[] = [
  {
    name: 'Copy Writing',
  },
  {
    name: 'Content Marketing',
  },
  {
    name: 'Community Managing',
  },
];
