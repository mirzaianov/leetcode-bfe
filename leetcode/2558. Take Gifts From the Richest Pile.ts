const pickGifts = (gifts: number[], k: number): number => {
  const sorted: number[] = [...gifts].sort((a, b) => a - b);

  while (k) {
    const last: number | undefined = sorted.at(-1);

    if (last !== undefined) {
      sorted[sorted.length - 1] = Math.floor(Math.sqrt(last));
      sorted.sort((a, b) => a - b);
      k -= 1;
    }
  }

  return sorted.reduce((acc, item) => acc + item, 0);
};

export default pickGifts;
