const canBeEqual = (target: number[], arr: number[]): boolean => {
  const targetLen: number = target.length;
  const arrLen: number = target.length;

  if (targetLen !== arrLen) return false;

  const map = new Map<number, number>();

  for (let i = 0; i < targetLen; i += 1) {
    map.set(target[i], (map.get(target[i]) || 0) + 1);
    map.set(arr[i], (map.get(arr[i]) || 0) - 1);
  }

  for (const [, value] of map) {
    if (value !== 0) return false;
  }

  return true;
};

export default canBeEqual;
