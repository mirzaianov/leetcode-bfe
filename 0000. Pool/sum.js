const sum = (numbers) => {
  if (!numbers.length) return 0;

  return sum(numbers.slice(1)) + numbers[0];
};

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
