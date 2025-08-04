const isValid = (s: string, t: number): boolean => {
  if (s === '' && t === 0) return true;

  if (t < 0) return false;

  let res = false;

  for (let i = 0; i < s.length; i += 1) {
    const l: string = s.substring(0, i + 1);
    const r: string = s.substring(i + 1);

    if (isValid(r, t - Number(l))) {
      res = true;
      break;
    }
  }

  return res;
};

const punishmentNumber = (n: number): number => {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    const curr: number = i ** 2;

    if (isValid(String(curr), i)) sum += curr;
  }

  return sum;
};

export default punishmentNumber;
