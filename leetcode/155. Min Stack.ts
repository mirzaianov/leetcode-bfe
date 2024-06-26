class MinStack {
  stack: number[];

  min: number;

  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push(val: number): void {
    this.stack.push(val);
    this.min = Math.min(this.min, val);
  }

  pop(): void {
    const last = this.stack.pop();

    if (this.min === last) {
      this.min = Math.min(...this.stack);
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min ?? null;
  }
}
