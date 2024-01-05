const divisorSubstrings = (num: number, k: number): number => {
  let count: number = 0;
  const str: string = num.toString();

  for (let i: number = 0; i < str.length - k + 1; i += 1) {
    const curr: number = Number(str.substring(i, i + k));

    if (curr !== 0 && num % curr === 0) count += 1;
  }

  return count;
};

console.log(divisorSubstrings(240, 2)); // 2
console.log(divisorSubstrings(430043, 2)); // 2
