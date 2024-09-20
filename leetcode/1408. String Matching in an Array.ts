const stringMatching = (words: string[]): string[] => {
  const set = new Set<string>();

  for (let i = 0; i < words.length; i += 1) {
    const curr: string = words[i];

    for (let j = 0; j < words.length; j += 1) {
      if (i !== j && words[j].includes(curr) && !set.has(curr)) set.add(curr);
    }
  }

  return [...set];
};

export default stringMatching;
