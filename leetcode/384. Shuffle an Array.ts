class Solution {
  nums: number[];

  array: number[];

  constructor(nums: number[]) {
    this.nums = nums;
    this.array = [...nums];
  }

  reset(): number[] {
    return this.nums;
  }

  shuffle(): number[] {
    for (let i = this.array.length - 1; i >= 0; i -= 1) {
      const j: number = Math.floor(Math.random() * (i + 1));

      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }

    return this.array;
  }
}

export default Solution;
