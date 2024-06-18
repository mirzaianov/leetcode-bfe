const maxArea = (height: number[]): number => {
  let max = 0;
  let l = 0;
  let r: number = height.length - 1;

  while (l < r) {
    const dist: number = r - l;
    const minHeight: number = Math.min(height[l], height[r]);
    const square: number = dist * minHeight;

    max = Math.max(max, square);

    height[l] <= height[r] ? (l += 1) : (r -= 1);
  }

  return max;
};

export default maxArea;
