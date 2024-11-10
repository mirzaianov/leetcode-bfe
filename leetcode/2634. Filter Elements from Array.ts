type Fn = (n: number, i: number) => any;

const filter = (arr: number[], fn: Fn): number[] => {
  const res: number[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (fn(arr[i], i)) res.push(arr[i]);
  }

  return res;
};

export default filter;
