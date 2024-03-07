const decodeString = (s: string): string => {
  const stack: [number, string][] = [];
  let res = '';
  let mult = 0;

  for (const l of s) {
    if (l === '[') {
      stack.push([mult, res]);
      res = '';
      mult = 0;
    } else if (l === ']') {
      const top: [number, string] | undefined = stack.pop();

      if (top === undefined) {
        return '';
      }

      const [prevMult, prevRes] = top;

      res = prevRes + res.repeat(prevMult);
    } else if (!Number.isNaN(Number(l))) {
      mult = Number(l);
    } else {
      res += l;
    }
  }

  return res;
};
