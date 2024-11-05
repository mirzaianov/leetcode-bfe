type F = (x: number) => number;

const compose =
  (functions: F[]): F =>
  (x) =>
    functions.reduceRight((acc, fn) => fn(acc), x);

export default compose;
