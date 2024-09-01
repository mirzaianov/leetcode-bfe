const generateKey = (num1: number, num2: number, num3: number): number => {
  const str1: string = String(num1).padStart(4, '0');
  const str2: string = String(num2).padStart(4, '0');
  const str3: string = String(num3).padStart(4, '0');

  const res: (string | undefined)[] = Array(4).fill(undefined);

  for (let i = 0; i < 4; i += 1) {
    res[i] = String(Math.min(Number(str1[i]), Number(str2[i]), Number(str3[i])));
  }

  return Number(res.join(''));
};

export default generateKey;
