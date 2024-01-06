const minimumRecolors = (blocks: string, k: number): number => {
  let min: number = Infinity;

  for (let i: number = 0; i < blocks.length - k + 1; i += 1) {
    const current: string = blocks.substring(i, k + i);
    const blacks: number = [...current].filter((item: string) => item === 'W').length;

    min = Math.min(min, blacks);
  }

  return min;
};
