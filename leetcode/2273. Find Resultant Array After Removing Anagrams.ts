const sortString = (s: string): string => s.split('').sort().join('');

const removeAnagrams = (words: string[]): string[] => {
  const res: string[] = [words[0]];

  for (let i = 1; i < words.length; i += 1) {
    const curr: string = words[i];
    const prev: string = words[i - 1];

    if (curr.length === prev.length && sortString(curr) === sortString(prev)) continue;

    res.push(curr);
  }

  return res;
};

export default removeAnagrams;
