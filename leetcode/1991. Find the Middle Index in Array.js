const findMiddleIndex = (nums) => {
  const len = nums.length;
  let leftSum = 0;
  let rightSum = nums.reduce((acc, iten) => acc + iten, 0);

  for (let i = 0; i < len; i += 1) {
    const curr = nums[i];

    rightSum -= curr;

    if (leftSum === rightSum) return i;

    leftSum += curr;
  }

  return -1;
};
