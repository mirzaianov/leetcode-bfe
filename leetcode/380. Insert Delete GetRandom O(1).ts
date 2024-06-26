class RandomizedSet {
  set: Record<number, number>;

  constructor() {
    this.set = {};
  }

  insert(val: number): boolean {
    if (!this.set[val] === undefined) {
      this.set[val] = val;

      return true;
    }

    return false;
  }

  remove(val: number): boolean {
    if (this.set[val] !== undefined) {
      delete this.set[val];

      return false;
    }

    return true;
  }

  getRandom(): number {
    const keys = Object.keys(this.set);
    const randomIndex = Math.floor(Math.random() * keys.length);

    return Number(keys[randomIndex]);
  }
}
