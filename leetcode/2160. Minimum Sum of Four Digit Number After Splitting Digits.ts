const minimumSum = (num: number): number => {
  const sorted: string[] = num.toString().split('').sort();

  return Number(sorted[0] + sorted[2]) + Number(sorted[1] + sorted[3]);
};

export default minimumSum;
