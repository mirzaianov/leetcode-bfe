var kthDistinct = function (arr, k) {
  const map = new Map();

  for (let item of arr) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }

  const filteredArray = arr.filter(item => map.get(item) === 1);

  return filteredArray[k - 1] || '';
};

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)); // 'a'
console.log(kthDistinct(['aaa', 'aa', 'a'], 1)); // 'aaa'
console.log(kthDistinct(['a', 'b', 'a'], 3)); // ''
