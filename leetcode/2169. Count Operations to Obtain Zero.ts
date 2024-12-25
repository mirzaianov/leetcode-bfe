const countOperations = (num1: number, num2: number): number => {
  let count = 0;
  let first: number = num1;
  let second: number = num2;

  while (first && second) {
    first > second ? (first -= second) : (second -= first);
    count += 1;
  }

  return count;
};

export default countOperations;
