export interface Podcast {
  title: string;
  show: string;
  meta: string;
}

export const podcasts: Podcast[] = [
  { title: 'Building Cloud 66', show: 'The Changelog', meta: 'Guest · 58 min' },
  { title: 'Information as Infrastructure', show: 'OIFI Talks', meta: 'Host · 41 min' },
  { title: 'The Trading Years', show: 'On Systems', meta: 'Guest · 63 min' },
  { title: 'Selling Software at Sixteen', show: 'Founders & Co.', meta: 'Guest · 47 min' },
  { title: 'Between Tehran and London', show: 'The Long Way Round', meta: 'Guest · 52 min' },
  { title: 'On Patience', show: 'Slow Media', meta: 'Guest · 39 min' },
];
