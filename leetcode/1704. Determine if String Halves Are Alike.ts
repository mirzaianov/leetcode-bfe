const numberOfVowels = (s: string): number => s.match(/[aeiouAEIOU]/g)?.length || 0;

const halvesAreAlike = (s: string): boolean => {
  const mid: number = s.length / 2;

  return numberOfVowels(s.slice(0, mid)) === numberOfVowels(s.slice(mid));
};

export default halvesAreAlike;
