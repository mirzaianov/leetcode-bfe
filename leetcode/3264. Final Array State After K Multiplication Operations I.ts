const getFinalState = (nums: number[], k: number, multiplier: number): number[] => {
  const arr: number[] = [...nums];

  for (let i = 0; i < k; i += 1) {
    const minValue: number = Math.min(...arr);
    const minValueIndex: number = arr.indexOf(minValue);

    arr[minValueIndex] *= multiplier;
  }

  return arr;
};

export default getFinalState;
