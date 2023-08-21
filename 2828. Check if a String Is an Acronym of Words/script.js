var isAcronym = function (words, s) {
  return words.reduce((acc, word) => acc + word[0], '') === s;
};
