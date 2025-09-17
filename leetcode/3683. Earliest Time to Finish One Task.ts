const earliestTime = (tasks: number[][]): number => {
  let min = Infinity;

  for (const [s, t] of tasks) {
    min = Math.min(min, s + t);
  }

  return min;
};

export default earliestTime;
