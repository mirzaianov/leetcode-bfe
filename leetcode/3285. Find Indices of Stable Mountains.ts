const stableMountains = (height: number[], threshold: number): number[] => {
  const res: number[] = [];

  for (let i = 1; i < height.length; i += 1) {
    if (height[i - 1] > threshold) {
      res.push(i);
    }
  }

  return res;
};

export default stableMountains;
