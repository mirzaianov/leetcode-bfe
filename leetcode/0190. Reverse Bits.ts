const reverseBits = (n: number): number => {
  const arr: string[] = n.toString(2).padStart(32, '0').split('');

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];

    l += 1;
    r -= 1;
  }

  const s: string = arr.join('');

  return parseInt(s, 2);
};

export default reverseBits;
