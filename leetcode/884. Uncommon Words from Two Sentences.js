const uncommonFromSentences = (s1, s2) => {
  const newMap = new Map();

  const createMap = (string, map) => {
    const array = string.split(' ');

    for (const word of array) {
      map.set(word, map.get(word) + 1 || 1);
    }

    return map;
  };

  const map1 = createMap(s1, newMap);
  const map2 = createMap(s2, map1);

  const res = [];

  for (const [key, value] of map2) {
    value === 1 ? res.push(key) : null;
  }

  return res;
};
