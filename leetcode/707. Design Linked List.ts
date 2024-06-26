class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  head: ListNode | null;

  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index: number): number {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.val;
      }

      current = current.next;
      count += 1;
    }

    return -1;
  }

  addAtHead(val: number): void {
    this.head = new ListNode(val, this.head);
    this.size += 1;
  }

  addAtTail(val: number): void {
    let current = this.head;

    if (!current) {
      this.head = new ListNode(val);
      this.size += 1;

      return;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = new ListNode(val);
    this.size += 1;
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index - 1) {
        current.next = new ListNode(val, current.next);
        this.size += 1;

        return;
      }

      current = current.next;
      count += 1;
    }
  }

  deleteAtIndex(index: number): void {
    if (index === 0) {
      this.head = this.head!.next;
      this.size -= 1;

      return;
    }

    let current = this.head;
    let count = 0;

    while (current && current.next) {
      if (count === index - 1) {
        current.next = current.next.next;
        this.size -= 1;

        return;
      }

      current = current.next;
      count += 1;
    }
  }
}

export default MyLinkedList;
