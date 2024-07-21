class Interval {
  start: number;

  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

const minMeetingRooms = (intervals: Interval[]): number => {
  const startArr: number[] = [];
  const endArr: number[] = [];

  for (const item in intervals) {
    if (item) {
      startArr.push(intervals[item].start);
      endArr.push(intervals[item].end);
    }
  }

  startArr.sort((a, b) => a - b);
  endArr.sort((a, b) => a - b);

  let res = 0;
  let count = 0;
  let s = 0;
  let e = 0;

  while (s < intervals.length) {
    if (startArr[s] < endArr[e]) {
      count += 1;
      s += 1;
    } else {
      count -= 1;
      e += 1;
    }

    res = Math.max(res, count);
  }

  return res;
};

export default minMeetingRooms;
