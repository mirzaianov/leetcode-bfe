const map = (arr: number[], fn: (n: number, i: number) => number): number[] =>
  arr.map((item, index) => fn(item, index));

export default map;
