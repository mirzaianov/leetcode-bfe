class MyQueue {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number | string {
    const first: number | undefined = this.queue.shift();

    if (first === undefined) {
      return `can't pop from an empty queue`;
    }

    return first;
  }

  peek(): number | string {
    const first: number | undefined = this.queue[0];

    if (first === undefined) {
      return `can't peek from an empty queue`;
    }

    return first;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

export default MyQueue;

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
