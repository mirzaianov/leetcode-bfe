const isPrime = (num: number): boolean => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const checkPrimeFrequency = (nums: number[]): boolean => {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (const [, value] of map) {
    if (isPrime(value)) return true;
  }

  return false;
};

export default checkPrimeFrequency;
