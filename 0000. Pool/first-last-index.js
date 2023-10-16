const firstLastIndex = (arr, target) => {
  if (arr.length === 0) return [-1, -1];
  if (!arr.includes(target)) return [-1, -1];

  return [arr.indexOf(target), arr.lastIndexOf(target)];
};

console.log(firstLastIndex([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5)); // [2, 6]
console.log(firstLastIndex([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 8)); // [-1, -1]
console.log(firstLastIndex([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 2)); // [0, 0]
