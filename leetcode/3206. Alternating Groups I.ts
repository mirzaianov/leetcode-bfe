const numberOfAlternatingGroups = (colors: number[]): number => {
  const len: number = colors.length;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    if (
      colors[i] !== colors[i - 1] &&
      colors[i] !== colors[i + 1] &&
      colors[i - 1] === colors[i + 1]
    ) {
      count += 1;
    }
  }

  if (colors[0] !== colors[len - 1] && colors[0] !== colors[1] && colors[len - 1] === colors[1]) {
    count += 1;
  }

  if (
    colors[len - 1] !== colors[len - 2] &&
    colors[len - 1] !== colors[0] &&
    colors[len - 2] === colors[0]
  ) {
    count += 1;
  }

  return count;
};

export default numberOfAlternatingGroups;
