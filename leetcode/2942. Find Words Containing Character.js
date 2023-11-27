const findWordsContaining = (words, x) => {
  const res = [];

  words.forEach((word, index) => {
    if (word.includes(x)) res.push(index);
  });

  return res;
};
