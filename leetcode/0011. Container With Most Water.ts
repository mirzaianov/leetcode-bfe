const maxArea = (height: number[]): number => {
  let max = 0;
  let left = 0;
  let right: number = height.length - 1;

  while (left < right) {
    const minHeight: number = Math.min(height[left], height[right]);
    const square: number = minHeight * (right - left);

    max = Math.max(max, square);
    height[left] <= height[right] ? (left += 1) : (right -= 1);
  }

  return max;
};
