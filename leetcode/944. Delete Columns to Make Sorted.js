var minDeletionSize = function (strs) {
  let count = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        count++;
        break;
      }
    }
  }

  return count;
};

console.log(minDeletionSize(['cba', 'daf', 'ghi'])); // 1
console.log(minDeletionSize(['a', 'b'])); // 0
console.log(minDeletionSize(['zyx', 'wvu', 'tsr'])); // 3
