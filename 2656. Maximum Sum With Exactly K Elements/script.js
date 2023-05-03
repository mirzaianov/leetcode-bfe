var maximizeSum = function (nums, k) {
  let sum = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < k; i++) {
    let cur = nums.pop();

    sum += cur;
    nums.push(cur + 1);
  }

  return sum;
};
