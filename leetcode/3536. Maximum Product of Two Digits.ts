const maxProduct = (n: number): number => {
  const arr: string[] = n.toString(10).split('').sort();

  return Number(arr.at(-1)) * Number(arr.at(-2));
};

export default maxProduct;
