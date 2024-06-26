const dailyTemperatures = (t: number[]): number[] => {
  const result = Array(t.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < t.length; i += 1) {
    let top: number = stack[stack.length - 1];

    while (stack.length && t[top] < t[i]) {
      const last: number = stack.pop()!;

      result[last] = i - last;
      top = stack[stack.length - 1];
    }

    stack.push(i);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
