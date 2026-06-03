export interface Book {
  title: string;
  author: string;
  note: string;
}

export const books: Book[] = [
  { title: 'The Order of Time', author: 'Carlo Rovelli', note: 'On why time is not the thing we think it is.' },
  { title: 'Stoner', author: 'John Williams', note: 'A quiet life, told with enormous care.' },
  { title: 'The Master and Margarita', author: 'Mikhail Bulgakov', note: 'The devil arrives in Moscow. It gets stranger.' },
  { title: 'Seeing Like a State', author: 'James C. Scott', note: 'Why grand schemes to improve the world go wrong.' },
  { title: 'The Glass Bead Game', author: 'Hermann Hesse', note: 'On mastery, discipline, and a life of the mind.' },
  { title: 'Quiet', author: 'Susan Cain', note: 'The power of introverts in a world that won’t stop talking.' },
];
