const canAttendMeetings = (intervals: number[][]): boolean => {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i += 1) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }

  return true;
};

export default canAttendMeetings;
