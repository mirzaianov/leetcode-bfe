function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right: number = numbers.length - 1;

  while (left <= right) {
    const sum: number = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];

    if (sum < target) left += 1;

    if (sum > target) right -= 1;
  }

  return [-1, -1];
}
