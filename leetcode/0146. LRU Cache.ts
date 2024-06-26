class ListItem {
  prev: ListItem | null;

  next: ListItem | null;

  val: number;

  key: number;

  constructor(key, val, prev = null, next = null) {
    this.val = val;
    this.key = key;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  head: ListItem = new ListItem(-1, -1);

  tail: ListItem = new ListItem(-1, -1);

  dict: Map<number, ListItem> = new Map();

  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  updateItem(item: ListItem): void {
    item.prev.next = item.next;
    item.next.prev = item.prev;
    item.next = this.tail;
    item.prev = this.tail.prev;

    this.tail.prev.next = item;
    this.tail.prev = item;
  }

  get(key: number): number {
    if (this.dict.has(key)) {
      const item = this.dict.get(key);
      this.updateItem(item);
      return item.val;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.dict.has(key)) {
      const item = this.dict.get(key);
      this.updateItem(item);
      item.val = value;
    } else {
      const item = new ListItem(key, value);
      item.next = this.tail;
      item.prev = this.tail.prev;

      this.tail.prev.next = item;
      this.tail.prev = item;
      this.dict.set(key, item);

      if (this.dict.size > this.capacity) {
        const item = this.head.next;

        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
        this.dict.delete(item.key);
      }
    }
  }
}

export default LRUCache;

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
