// #1

// const sortColors = (nums: number[]): void => {
//   const max: number = Math.max(...nums);
//   const counts: number[] = Array(max + 1).fill(0);

//   for (const num of nums) {
//     counts[num] += 1;
//   }

//   let startingIndex = 0;

//   for (let i = 0; i < counts.length; i += 1) {
//     const count = counts[i];
//     counts[i] = startingIndex;
//     startingIndex += count;
//   }

//   const sortedArray: number[] = Array(nums.length);

//   for (const num of nums) {
//     sortedArray[counts[num]] = num;
//     counts[num] += 1;
//   }

//   for (let i = 0; i < nums.length; i += 1) {
//     nums[i] = sortedArray[i];
//   }
// };

// #2

const sortColors = (nums: number[]): void => {
  let left = 0;
  let right = nums.length - 1;
  let current = left;

  const swap = (i: number, j: number): void => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  while (current <= right) {
    if (nums[current] === 0) {
      swap(left, current);
      left += 1;
      current += 1;
    } else if (nums[current] === 2) {
      swap(right, current);
      right -= 1;
    } else {
      current += 1;
    }
  }
};
