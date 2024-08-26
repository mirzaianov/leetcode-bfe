const calculateTax = (brackets: number[][], income: number): number => {
  let tax = 0;
  let prev = 0;

  for (const [upper, percent] of brackets) {
    if (income >= upper) {
      tax += ((upper - prev) * percent) / 100;
      prev = upper;
    } else {
      tax += ((income - prev) * percent) / 100;
      return tax;
    }
  }

  return tax;
};

export default calculateTax;
