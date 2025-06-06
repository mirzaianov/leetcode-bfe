const minMaxDifference = (num: number): number => {
  const arr: string[] = String(num).split('');
  const len: number = arr.length;
  const maxArr: string[] = Array(len).fill('-1');
  const minArr: string[] = Array(len).fill('-1');
  const maxTarget: string | undefined = arr.find((item) => item !== '9');
  const minTarget: string | undefined = arr.find((item) => item !== '0');

  if (maxTarget === undefined) return num;

  for (let i = 0; i < len; i += 1) {
    if (arr[i] === maxTarget) {
      maxArr[i] = '9';
    } else {
      maxArr[i] = arr[i];
    }
  }

  for (let i = 0; i < len; i += 1) {
    if (arr[i] === minTarget) {
      minArr[i] = '0';
    } else {
      minArr[i] = arr[i];
    }
  }

  return parseInt(maxArr.join(''), 10) - parseInt(minArr.join(''), 10);
};

export default minMaxDifference;
