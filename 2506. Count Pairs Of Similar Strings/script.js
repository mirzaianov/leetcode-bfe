var similarPairs = function (words) {
  const map = new Map();
  let count = 0;

  const itemToSet = (item) => {
    const arr = item.split('');
    const set = new Set(arr);
    const newArr = [...set];

    newArr.sort();

    return newArr.join('');
  };

  const calc = (n) => {
    return (n * (n - 1)) / 2;
  };

  for (let word of words) {
    const newWord = itemToSet(word);
    map.set(newWord, (map.get(newWord) || 0) + 1);
  }

  for (let [key, value] of map) {
    count += calc(value);
  }

  let one = '';

  return count;
};

console.log(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc'])); // 2
console.log(similarPairs(['aabb', 'ab', 'ba'])); // 3
console.log(similarPairs(['nba', 'cba', 'dba'])); // 0
