const restoreString = (s: string, indices: number[]): string => {
  const len: number = indices.length;
  const temp: (string | undefined)[] = Array(len).fill(undefined);

  for (let i = 0; i < len; i += 1) {
    temp[indices[i]] = s[i];
  }

  return temp.join('');
};

export default restoreString;
