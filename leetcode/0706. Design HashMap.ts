class MyHashMap {
  map = {};

  constructor() {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    return this.map[key] !== undefined ? this.map[key] : -1;
  }

  remove(key: number): void {
    delete this.map[key];
  }
}
