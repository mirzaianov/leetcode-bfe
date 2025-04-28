const reverseDegree = (s: string): number => {
  let res = 0;

  for (let i = 0; i < s.length; i += 1) {
    res += (123 - s.charCodeAt(i)) * (i + 1);
  }

  return res;
};

export default reverseDegree;
