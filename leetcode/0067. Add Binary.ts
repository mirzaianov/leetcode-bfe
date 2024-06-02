const toBinaryBigInt = (s: string): bigint => BigInt(`0B${s}`);

const addBinary = (a: string, b: string): string =>
  (toBinaryBigInt(a) + toBinaryBigInt(b)).toString(2);

export default addBinary;
