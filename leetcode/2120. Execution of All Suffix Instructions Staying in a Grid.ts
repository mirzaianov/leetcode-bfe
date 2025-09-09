const executeInstructions = (n: number, startPos: number[], s: string): number[] => {
  const res: number[] = new Array(s.length).fill(-1);

  for (let i = 0; i < s.length; i += 1) {
    let count = 0;
    let r: number = startPos[0];
    let c: number = startPos[1];

    for (let j = i; j < s.length; j += 1) {
      const curr: string = s[j];

      if (curr === 'L') {
        if (c > 0) c -= 1;
        else break;
      }

      if (curr === 'R') {
        if (c < n - 1) c += 1;
        else break;
      }

      if (curr === 'U') {
        if (r > 0) r -= 1;
        else break;
      }

      if (curr === 'D') {
        if (r < n - 1) r += 1;
        else break;
      }

      count += 1;
    }

    res[i] = count;
  }

  return res;
};

export default executeInstructions;
