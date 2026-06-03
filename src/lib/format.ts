export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function articleMeta(kind: string, date: Date): string {
  return `${kind} · ${date.getFullYear()}`;
}
