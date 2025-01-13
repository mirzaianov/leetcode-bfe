const minOperations = (boxes: string): number[] => {
  const len: number = boxes.length;
  const res: number[] = new Array(len).fill(0);
  let moves = 0;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    res[i] += moves + count;
    moves += count;
    count += Number(boxes[i]);
  }

  moves = 0;
  count = 0;

  for (let i = len - 1; i >= 0; i -= 1) {
    res[i] += moves + count;
    moves += count;
    count += Number(boxes[i]);
  }

  return res;
};

export default minOperations;
