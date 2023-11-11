var vowelStrings = function (words, left, right) {
  const vowels = 'aeiou';
  let res = 0;

  for (let i = left; i <= right; i++) {
    if (vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])) res++;
  }

  return res;
};

console.log(vowelStrings(['are', 'amy', 'u'], 0, 2)); // 2
console.log(vowelStrings(['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4)); // 3
