const replaceElements = (arr: number[]): number[] => {
  const len: number = arr.length;
  const res: number[] = new Array(len).fill(0);

  res[len - 1] = -1;

  for (let i = len - 1; i > 0; i -= 1) {
    res[i - 1] = Math.max(arr[i], res[i]);
  }

  return res;
};

export default replaceElements;
