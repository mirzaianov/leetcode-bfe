const longestNiceSubstring = (s: string): string => {
  if (s.length < 2) return '';

  const chars = new Set(s);

  for (let i = 0; i < s.length; i += 1) {
    if (!chars.has(s[i].toUpperCase()) || !chars.has(s[i].toLowerCase())) {
      const left = longestNiceSubstring(s.substring(0, i));
      const right = longestNiceSubstring(s.substring(i + 1));

      return left.length >= right.length ? left : right;
    }
  }

  return s;
};

console.log(longestNiceSubstring('YazaAay')); // "aAa"
// console.log(longestNiceSubstring('Bb')); // "Bb"
// console.log(longestNiceSubstring('c')); // ""
