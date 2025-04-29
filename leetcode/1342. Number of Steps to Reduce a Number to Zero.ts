const numberOfSteps = (num: number): number => {
  let count = 0;

  while (num) {
    num % 2 === 0 ? (num /= 2) : (num -= 1);
    count += 1;
  }

  return count;
};

export default numberOfSteps;
