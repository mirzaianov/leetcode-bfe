const canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }

  return true;
};

console.log(
  canAttendMeetings([
    [15, 20],
    [0, 30],
    [5, 10],
  ])
); // false
console.log(
  canAttendMeetings([
    [5, 8],
    [9, 15],
  ])
); // true
