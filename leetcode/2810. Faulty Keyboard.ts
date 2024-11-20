const finalString = (s: string): string => {
  const res: string[] = [];

  for (const l of s) {
    if (l === 'i') {
      res.reverse();
    } else {
      res.push(l);
    }
  }

  return res.join('');
};

export default finalString;
