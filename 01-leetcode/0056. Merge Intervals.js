const merge = function (intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let [start, end] of intervals) {
    const endPrev = result.at(-1)[1];

    if (start <= endPrev) result.at(-1)[1] = Math.max(end, endPrev);
    else result.push([start, end]);
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
