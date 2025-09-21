const buildArray = (target: number[], n: number): string[] => {
  if (target.length === 1) return ['Push'];

  const stack: number[] = [];
  const stream: number[] = Array.from({ length: n }, (_, i) => i + 1);
  const res: string[] = [];
  let i = 0;

  while (stream.length > 0) {
    if (stack.length === 0) {
      res.push('Push');
      stack.push(stream.shift()!);
    }

    if (stack[i] !== target[i]) {
      res.push('Pop');
      stack.pop();
      i -= 1;
    }

    res.push('Push');
    stack.push(stream.shift()!);
    i += 1;

    if (stack.length === target.length && stack.at(-1) === target.at(-1)) break;
  }

  return res;
};

export default buildArray;
