export interface Venture {
  name: string;
  role: string;
  note: string;
  href?: string;
}

export const work: Venture[] = [
  { name: 'Cloud 66', role: 'Co-founder', note: 'Developer tools for deploying and managing applications.', href: 'https://www.cloud66.com' },
  { name: 'AltaCoda', role: 'Founding Principal', note: 'A venture studio building SaaS businesses.', href: 'https://altacoda.com' },
  { name: 'OIFI', role: 'Founder', note: 'A non-profit providing information access about Iran.' },
  { name: 'Lehman Brothers', role: 'VP, formerly', note: 'Trading systems and fixed-income infrastructure.' },
  { name: 'Sentimnt', role: 'Founder, formerly', note: 'A personal search engine for everything you’ve read.' },
];
