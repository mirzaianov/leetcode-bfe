const countCharacters = (words, chars) => {
  const toMap = (str) => {
    const map = new Map();

    for (const letter of str) {
      map.set(letter, map.get(letter) + 1 || 1);
    }

    return map;
  };

  const charsToMap = toMap(chars);

  let count = 0;

  for (const word of words) {
    let status = true;
    const wordToMap = toMap(word);

    for (const [key, value] of wordToMap) {
      if (!charsToMap.has(key) || charsToMap.get(key) < value) {
        status = false;
        break;
      }
    }

    if (status) count += word.length;
  }

  return count;
};

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')); // 6
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')); // 10
