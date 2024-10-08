const oddString = (words: string[]): string => {
  const map = new Map<string, string[]>();

  for (const w of words) {
    const arr: number[] = [];

    for (let i = 1; i < w.length; i += 1) {
      const curr: number = w[i].charCodeAt(0) - w[i - 1].charCodeAt(0);

      arr.push(curr);
    }

    const str: string = arr.join(',');

    if (map.has(str)) {
      map.set(str, [...map.get(str)!, w]);
    } else {
      map.set(str, [w]);
    }
  }

  for (const [, value] of map) {
    if (value.length === 1) return value[0];
  }

  return 'Error';
};

export default oddString;
