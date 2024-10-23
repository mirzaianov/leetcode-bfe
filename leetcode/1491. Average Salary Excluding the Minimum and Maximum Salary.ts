const average = (salary: number[]): number => {
  let minSalary = Infinity;
  let maxSalary = -Infinity;
  let sum = 0;

  for (const s of salary) {
    minSalary = Math.min(minSalary, s);
    maxSalary = Math.max(maxSalary, s);
    sum += s;
  }

  return (sum - minSalary - maxSalary) / (salary.length - 2);
};

export default average;
