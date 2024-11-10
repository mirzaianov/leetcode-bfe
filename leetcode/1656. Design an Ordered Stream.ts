class OrderedStream {
  private arr: string[];

  private next: number;

  constructor(n: number) {
    this.arr = new Array(n).fill(null);
    this.next = 0;
  }

  insert(idKey: number, value: string): string[] {
    const result: string[] = [];

    this.arr[idKey - 1] = value;

    while (this.arr[this.next]) {
      result.push(this.arr[this.next]);
      this.next += 1;
    }

    return result;
  }
}

export default OrderedStream;
