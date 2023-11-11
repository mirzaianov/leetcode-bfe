var maximumNumberOfStringPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const word = words[j].split("").reverse().join("");
      if (words[i] === word) count++;
    }
  }

  return count;
};
