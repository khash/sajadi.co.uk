export const site = {
  name: 'Kash Sajadi',
  bio: 'I build software and write about the things that stay with me long after the screen goes dark.',
  url: 'https://sajadi.co.uk',
  description: 'Kash Sajadi — software builder, writer and founder. Links to everything I make.',
};

export interface Link {
  name: string;
  host: string;
  note: string;
  href: string;
}

export const sections: { title: string; links: Link[] }[] = [
  {
    title: 'Writing & music',
    links: [
      { name: 'The Private Opinion', host: 'thepo.page', note: 'Essays and long-form writing.', href: 'https://thepo.page' },
      { name: 'xas', host: 'xas.band', note: 'Music that fuses memory, human and technology.', href: 'https://www.xas.band/' },
    ],
  },
  {
    title: 'Work',
    links: [
      { name: 'Cloud 66', host: 'cloud66.com', note: 'Co-founder. Tools to deploy and run applications.', href: 'https://www.cloud66.com' },
      { name: 'AltaCoda', host: 'altacoda.io', note: 'Founding principal. A venture studio for enduring SaaS.', href: 'https://www.altacoda.io/' },
      { name: 'OIFI', host: 'oifi.org', note: 'Founder. Making information about Iran freely accessible.', href: 'https://oifi.org/' },
    ],
  },
];

export const socials = [
  { label: 'X', href: 'https://x.com/khash' },
  { label: 'GitHub', href: 'https://github.com/khash' },
];
