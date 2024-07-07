const eraseOverlapIntervals = (intervals: number[][]): number => {
  intervals.sort((a, b) => a[0] - b[0]);

  let prevEnd: number = intervals[0][1];
  let res = 0;

  for (let i = 1; i < intervals.length; i += 1) {
    const [start, end] = intervals[i];

    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      res += 1;
      prevEnd = Math.min(prevEnd, end);
    }
  }

  return res;
};

export default eraseOverlapIntervals;
