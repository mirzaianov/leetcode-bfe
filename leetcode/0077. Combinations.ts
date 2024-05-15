const combine = (n: number, k: number): number[][] => {
  const res: number[][] = [];

  const backtrack = (value: number, combo: number[]): void => {
    if (combo.length === k) {
      res.push([...combo]);
    }

    for (let i = value; i <= n; i += 1) {
      combo.push(i);

      backtrack(i + 1, combo);

      combo.pop();
    }
  };

  backtrack(1, []);

  return res;
};

export default combine;
