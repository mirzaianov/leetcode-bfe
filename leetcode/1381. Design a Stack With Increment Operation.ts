class CustomStack {
  maxSize: number;

  stack: number[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) this.stack.push(x);
  }

  pop(): number {
    const last: number | undefined = this.stack.pop();

    if (last === undefined) return -1;

    return last;
  }

  increment(k: number, val: number): void {
    const max: number = k > this.stack.length ? this.stack.length : k;

    for (let i = 0; i < max; i += 1) {
      this.stack[i] += val;
    }
  }
}

export default CustomStack;
