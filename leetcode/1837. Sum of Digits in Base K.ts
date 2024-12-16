const sumBase = (n: number, k: number): number =>
  n
    .toString(k)
    .split('')
    .reduce((acc: number, item: string) => acc + Number(item), 0);

export default sumBase;
