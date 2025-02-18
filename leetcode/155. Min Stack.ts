class MinStack {
  arr: number[];

  minStack: number[];

  constructor() {
    this.arr = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.arr.push(val);

    if (!this.minStack.length || (this.minStack.length && this.getMin() >= val)) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const last: number | undefined = this.arr.pop();

    if (last !== undefined && last === this.getMin()) {
      this.minStack.pop();
    }
  }

  top(): number {
    const last: number | undefined = this.arr.at(-1);

    return last || 0;
  }

  getMin(): number {
    const last: number | undefined = this.minStack.at(-1);

    return last || 0;
  }
}

export default MinStack;
