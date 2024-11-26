type Fn = () => number;

const createCounter =
  (n: number): Fn =>
  () =>
    n++;

export default createCounter;
