const groupThePeople = function (groupSizes) {
  const len = groupSizes.length;
  const store = {};
  const res = [];

  for (let i = 0; i < len; i += 1) {
    const digit = groupSizes[i];

    if (!store[digit]) {
      store[digit] = [];
    }

    store[digit].push(i);

    if (store[digit].length === digit) {
      res.push([...store[digit]]);
      store[digit] = [];
    }
  }

  return res;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
// console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
