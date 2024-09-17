const furthestDistanceFromOrigin = (moves: string): number => {
  let base = 0;
  let left = 0;
  let right = 0;

  for (const m of moves) {
    if (m === 'L') left += 1;
    if (m === 'R') right += 1;
    if (m === '_') base += 1;
  }

  return base + Math.abs(left - right);
};

export default furthestDistanceFromOrigin;
