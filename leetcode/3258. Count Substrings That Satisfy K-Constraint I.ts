const isConstraint = (s: string, k: number): boolean => {
  let zeros = 0;
  let ones = 0;

  for (const l of s) {
    if (Number(l) === 0) zeros += 1;
    if (Number(l) === 1) ones += 1;
  }

  if (zeros <= k || ones <= k) return true;

  return false;
};

const countKConstraintSubstrings = (s: string, k: number): number => {
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    for (let j = i; j < s.length; j += 1) {
      const subString: string = s.slice(i, j + 1);

      if (isConstraint(subString, k)) count += 1;
    }
  }

  return count;
};

export default countKConstraintSubstrings;
