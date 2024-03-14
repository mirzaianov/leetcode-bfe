const duplicateZeros = (arr: number[]): void => {
  const len: number = arr.length;

  for (let i = 0; i < len; i += 1) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
};
