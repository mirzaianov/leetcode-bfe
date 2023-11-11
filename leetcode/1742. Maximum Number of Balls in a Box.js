var countBalls = function (lowLimit, highLimit) {
  const store = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    let box;
    if (i < 10) {
      box = i;
    } else {
      box = i
        .toString()
        .split("")
        .reduce((acc, item) => acc + +item, 0);
    }

    store[box] = store[box] + 1 || 1;
  }

  return Math.max(...Object.values(store));
};

console.log(countBalls(8, 16)); // 1
console.log(countBalls(5, 15)); // 2
console.log(countBalls(19, 28)); // 2
