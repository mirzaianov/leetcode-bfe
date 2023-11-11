var numOfStrings = function (patterns, word) {
  let count = 0;

  for (let item of patterns) {
    if (word.includes(item)) count++;
  }

  return count;
};
