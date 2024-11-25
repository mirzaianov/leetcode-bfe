const countAsterisks = (s: string): number => {
  let mode = true;
  let count = 0;

  for (const l of s) {
    if (l === '|' && mode === false) {
      mode = true;
    } else if (l === '|' && mode === true) {
      mode = false;
    }

    if (mode && l === '*') count += 1;
  }

  return count;
};

export default countAsterisks;
