interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function <T>(this: T[]): T | -1 {
  return this.length ? this.at(-1)! : -1;
};
