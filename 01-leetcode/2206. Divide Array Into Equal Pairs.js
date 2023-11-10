var divideArray = function (nums) {
  if (nums.length % 2 !== 0) return false;

  const store = {};

  for (let num of nums) {
    store[num] = store[num] + 1 || 1;
  }

  const values = Array.from(Object.values(store));

  return values.every((item) => item % 2 === 0);
};

console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(divideArray([1, 2, 3, 4])); // false
console.log(divideArray([499, 500])); // false
