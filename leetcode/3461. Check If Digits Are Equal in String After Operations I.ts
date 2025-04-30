const hasSameDigits = (s: string): boolean => {
  if (s.length < 3) return s[0] === s[1];

  let newS: string = '';

  for (let i = 1; i < s.length; i += 1) {
    const mod: number = (Number(s[i - 1]) + Number(s[i])) % 10;

    newS += String(mod);
  }

  return hasSameDigits(newS);
};

export default hasSameDigits;
