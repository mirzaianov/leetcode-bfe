const toMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  return map;
};

const countCharacters = (words: string[], chars: string): number => {
  const mappedChars: Map<string, number> = toMap(chars);
  let count = 0;

  for (const word of words) {
    const mappedWord: Map<string, number> = toMap(word);
    let status = true;

    for (const [key, value] of mappedWord) {
      const mappedCharsValue: number | undefined = mappedChars.get(key);

      if (!mappedChars.has(key) || (mappedCharsValue && mappedCharsValue < value)) {
        status = false;
        break;
      }
    }

    if (status) count += word.length;
  }

  return count;
};

export default countCharacters;
