const findTheWinner = (n: number, k: number): number => {
  const arr: number[] = new Array(n).fill(0).map((_, i) => i + 1);
  let i = 0;

  while (arr.length > 1) {
    const idx = (i + k - 1) % arr.length;

    arr.splice(idx, 1);
    i = idx;
  }

  return arr[0];
};

export default findTheWinner;
