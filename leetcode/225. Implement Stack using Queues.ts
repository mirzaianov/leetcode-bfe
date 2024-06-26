class MyStack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number | string {
    const last: number | undefined = this.stack.pop();

    if (last === undefined) {
      return `can't pop from an empty stack`;
    }

    return last;
  }

  top(): number | string {
    const last: number | undefined = this.stack[this.stack.length - 1];

    if (last === undefined) {
      return `can't top from an empty stack`;
    }

    return last;
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
