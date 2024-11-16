const sortSentence = (s: string): string =>
  s
    .split(' ')
    .sort((a, b) => Number(a.at(-1)) - Number(b.at(-1)))
    .map((item) => item.slice(0, item.length - 1))
    .join(' ');

export default sortSentence;
