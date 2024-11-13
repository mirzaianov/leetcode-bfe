const cellsInRange = (s: string): string[] => {
  const res: string[] = [];

  for (let i = s.charCodeAt(0); i <= s.charCodeAt(3); i += 1) {
    for (let j = Number(s[1]); j <= Number(s[4]); j += 1) {
      res.push(`${String.fromCharCode(i)}${j}`);
    }
  }

  return res;
};

export default cellsInRange;
