const maxDistance = (colors: number[]): number => {
  const len: number = colors.length;
  const last: number = len - 1;
  let max = -Infinity;

  for (let i = 0; i < len; i += 1) {
    if (colors[i] !== colors[0]) max = Math.max(max, i);
    if (colors[i] !== colors[last]) max = Math.max(max, last - i);
  }

  return max;
};

export default maxDistance;
