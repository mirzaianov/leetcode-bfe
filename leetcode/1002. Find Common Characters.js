const commonChars = function (words) {
  const lenWords = words.length;
  let res = [...words[0]];

  for (let i = 1; i < lenWords; i += 1) {
    res = res.filter((item) => {
      const len = words[i].length;

      words[i] = words[i].replace(item, '');

      return len > words[i].length;
    });
  }

  return res;
};

console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
