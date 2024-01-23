const addBinary = (a: string, b: string): string =>
  (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2);
