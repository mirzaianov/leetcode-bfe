var uniqueOccurrences = function (arr) {
  const store = {};

  for (item of arr) {
    store[item] = store[item] + 1 || 1;
  }

  const storeValues = Array.from(Object.values(store));

  const res = {};

  for (item of storeValues) {
    res[item] = res[item] + 1 || 1;

    if (res[item] > 1) return false;
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
