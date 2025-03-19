const peakIndexInMountainArray = (arr: number[]): number => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (arr[m - 1] < arr[m] && arr[m + 1] < arr[m]) return m;

    if (arr[m - 1] < arr[m] && arr[m] < arr[m + 1]) l = m;

    if (arr[m - 1] > arr[m] && arr[m] > arr[m + 1]) r = m;
  }

  return l;
};

export default peakIndexInMountainArray;
