const longestNiceSubstring = (s: string): string => {
  if (s.length < 2) return '';

  const arr: string[] = [...s];
  const set = new Set<string>(arr);

  for (let i: number = 0; i < arr.length; i += 1) {
    const curr: string = arr[i];

    if (set.has(curr.toUpperCase()) && set.has(curr.toLowerCase())) continue;

    const sub1: string = longestNiceSubstring(s.substring(0, i));
    const sub2: string = longestNiceSubstring(s.substring(i + 1));

    return sub1.length >= sub2.length ? sub1 : sub2;
  }

  return s;
};

console.log(longestNiceSubstring('YazaAay')); // "aAa"
// console.log(longestNiceSubstring('Bb')); // "Bb"
// console.log(longestNiceSubstring('c')); // ""
