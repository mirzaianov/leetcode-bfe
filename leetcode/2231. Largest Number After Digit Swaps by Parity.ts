const largestInteger = (num: number): number => {
  const nums: string = String(num);
  const odd: string[] = [];
  const even: string[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    const curr: string = nums[i];

    Number(curr) % 2 === 0 ? even.push(curr) : odd.push(curr);
  }

  odd.sort();
  even.sort();

  const largestNum: string[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    Number(nums[i]) % 2 === 0 ? largestNum.push(even.pop()) : largestNum.push(odd.pop());
  }

  return Number(largestNum.join(''));
};

export default largestInteger;
