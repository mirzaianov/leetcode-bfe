const countGoodTriplets = (arr: number[], a: number, b: number, c: number): number => {
  const len: number = arr.length;
  let count = 0;

  for (let i = 0; i < len - 2; i += 1) {
    for (let j = i + 1; j < len - 1; j += 1) {
      for (let k = j + 1; k < len; k += 1) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[k] - arr[i]) <= c
        ) {
          count += 1;
        }
      }
    }
  }

  return count;
};

export default countGoodTriplets;
