const equalFrequency = function (word) {
  const mapWord = new Map();

  for (const letter of word) {
    mapWord.set(letter, (mapWord.get(letter) || 0) + 1);
  }

  let output = false;

  for (const [key, value] of mapWord) {
    const mapMap = new Map(mapWord);

    value === 1 ? mapMap.delete(key) : mapMap.set(key, mapMap.get(key) - 1);

    if (new Set([...mapMap.values()]).size === 1) output = true;
  }

  return output;
};

console.log(equalFrequency('aa')); // true
console.log(equalFrequency('abcc')); // true
console.log(equalFrequency('aazz')); // false
console.log(equalFrequency('bac')); // true
console.log(equalFrequency('cbccca')); // false
console.log(equalFrequency('abbcccddddeeeee')); // false
