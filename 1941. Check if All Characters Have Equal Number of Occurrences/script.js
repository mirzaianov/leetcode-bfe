var areOccurrencesEqual = function (s) {
  const store = {};

  for (let i = 0; i < s.length; i++) {
    store[s[i]] = store[s[i]] + 1 || 1;
  }

  return new Set(Object.values(store)).size === 1;
};

console.log(areOccurrencesEqual('abacbc')); // true
console.log(areOccurrencesEqual('aaabb')); // false
