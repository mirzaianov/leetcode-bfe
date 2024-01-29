const reverseWords = (s: string): string =>
  s
    .split(' ')
    .filter((item: string) => item !== '')
    .reverse()
    .join(' ');
