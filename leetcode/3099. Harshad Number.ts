const sumOfTheDigitsOfHarshadNumber = (x: number): number => {
  const sum: number = x
    .toString()
    .split('')
    .reduce((acc, item) => acc + Number(item), 0);

  return x % sum === 0 ? sum : -1;
};

export default sumOfTheDigitsOfHarshadNumber;
