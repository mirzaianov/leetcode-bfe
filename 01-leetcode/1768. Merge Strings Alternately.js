var mergeAlternately = function (word1, word2) {
  let result = '';
  const max = word1.length > word2.length ? word1 : word2;

  for (let i = 0; i < max.length; i++) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
  }

  return result;
};
