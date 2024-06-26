const merge = (intervals: number[][]): number[][] => {
  intervals.sort((a, b) => a[0] - b[0]);

  const res: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i += 1) {
    const prev: number[] = res[res.length - 1];
    const curr: number[] = intervals[i];

    if (prev[1] >= curr[0]) {
      const next: number[] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];

      res[res.length - 1] = next;
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
};

export default merge;
