const processQueries = (queries: number[], m: number): number[] => {
  const res: number[] = [];
  const P: number[] = Array.from({ length: m }, (_, i) => i + 1);

  for (const q of queries) {
    const idx: number = P.indexOf(q);

    res.push(idx);
    P.splice(idx, 1);
    P.unshift(q);
  }

  return res;
};

export default processQueries;
