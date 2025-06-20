const mostVisited = (n: number, rounds: number[]): number[] => {
  const start: number = rounds[0];
  const end: number = rounds[rounds.length - 1];
  const res: number[] = [];

  if (start <= end) {
    for (let i = start; i <= end; i += 1) res.push(i);
  } else {
    for (let i = 1; i <= end; i += 1) res.push(i);
    for (let i = start; i <= n; i += 1) res.push(i);
  }

  return res;
};

export default mostVisited;
