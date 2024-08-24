const minimumPushes = (word: string): number => {
  const len: number = word.length;

  const full: number = Math.floor(len / 8);
  const rem: number = len % 8;

  const remSum = (full + 1) * rem;
  let fullSum = 0;

  for (let i = 1; i <= full; i += 1) fullSum += i * 8;

  return fullSum + remSum;
};

export default minimumPushes;
