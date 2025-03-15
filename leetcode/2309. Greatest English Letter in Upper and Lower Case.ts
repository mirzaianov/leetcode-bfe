const greatestLetter = (s: string): string => {
  const set = new Set<string>();
  let res = '';

  for (const l of s) {
    set.add(l);

    const low: string = l.toLowerCase();
    const upp: string = l.toUpperCase();

    if (set.has(upp) && set.has(low) && upp > res) {
      res = upp;
    }
  }

  return res;
};

export default greatestLetter;
