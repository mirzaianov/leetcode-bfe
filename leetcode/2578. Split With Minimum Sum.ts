const splitNum = (num: number): number => {
  const sortedNums: string[] = num.toString().split('').sort();
  let num1 = '';
  let num2 = '';

  for (let i = 0; i < sortedNums.length; i += 2) {
    num1 += sortedNums[i] || '';
    num2 += sortedNums[i + 1] || '';
  }

  return Number(num1) + Number(num2);
};

export default splitNum;
