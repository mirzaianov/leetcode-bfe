const getMax = (arr: number[]): number => {
  let max: number = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const countSort = (arr: number[], n: number, exp: number): void => {
  const count: number[] = new Array(10).fill(0);

  for (let i = 0; i < n; i += 1) {
    const x = Math.floor(arr[i] / exp) % 10;

    count[x] += 1;
  }

  for (let i = 1; i < 10; i += 1) {
    count[i] += count[i - 1];
  }

  const output: number[] = new Array(n);

  for (let i = n - 1; i >= 0; i -= 1) {
    const x = Math.floor(arr[i] / exp) % 10;

    output[count[x] - 1] = arr[i];

    count[x] -= 1;
  }

  for (let i = 0; i < n; i += 1) {
    arr[i] = output[i];
  }
};

const radixsort = (arr: number[]): void => {
  const m: number = getMax(arr);

  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
    countSort(arr, arr.length, exp);
  }
};

const maximumGap = (nums: number[]): number => {
  if (nums.length < 2) return 0;

  radixsort(nums);

  let maxDiff = 0;

  for (let i = 1; i < nums.length; i += 1) {
    maxDiff = Math.max(maxDiff, nums[i] - nums[i - 1]);
  }

  return maxDiff;
};
