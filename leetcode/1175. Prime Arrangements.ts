const isPrimeNumber = (n: number): boolean => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }

  return true;
};

const numPrimeArrangements = (n: number): number => {
  const MOD = 10 ** 9 + 7;
  let primes = 0;
  let simples = 0;
  let res = 1;

  for (let i = 1; i <= n; i += 1) {
    const isCurrPrime: boolean = isPrimeNumber(i);

    if (isCurrPrime) {
      primes += 1;
      res = (res * primes) % MOD;
    } else {
      simples += 1;
      res = (res * simples) % MOD;
    }
  }

  return res;
};

export default numPrimeArrangements;
