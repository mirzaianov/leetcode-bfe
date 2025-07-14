const findThePrefixCommonArray = (A: number[], B: number[]): number[] => {
  const set = new Set<number>();
  const res: number[] = [];
  let count = 0;

  for (let i = 0; i < A.length; i += 1) {
    const currA: number = A[i];
    const currB: number = B[i];

    set.has(currA) ? (count += 1) : set.add(currA);
    set.has(currB) ? (count += 1) : set.add(currB);

    res.push(count);
  }

  return res;
};

export default findThePrefixCommonArray;
