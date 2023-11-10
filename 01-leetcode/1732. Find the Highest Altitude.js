var largestAltitude = function (gain) {
  let current = 0;
  let max = current;

  for (let item of gain) {
    current += item;
    max = max > current ? max : current;
  }

  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
