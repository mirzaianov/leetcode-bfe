const isBalanced = (num: string): boolean => {
  let evens = 0;
  let odds = 0;

  for (let i = 0; i < num.length; i += 1) {
    const curr: number = Number(num[i]);

    i & 1 ? (odds += curr) : (evens += curr);
  }

  return evens === odds;
};

export default isBalanced;
