var repeatedCharacter = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) return s[i];

    map.set(s[i], 1);
  }
};
