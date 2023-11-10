var prefixCount = function (words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(pref, 0) === 0) count++;
  }

  return count;
};

console.log(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')); // 2
console.log(prefixCount(['leetcode', 'win', 'loops', 'success'], 'code')); // 0
