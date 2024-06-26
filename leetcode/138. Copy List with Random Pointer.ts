class Node {
  val: number;

  next: Node | null;

  random: Node | null;

  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

const copyRandomList = (head: Node | null): Node | null => {
  const map = new Map<Node | null, Node | null>();

  let cur = head;

  map.set(null, null);

  while (cur) {
    map.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    map.get(cur)!.next = map.get(cur.next)!;
    map.get(cur)!.random = map.get(cur.random)!;
    cur = cur.next;
  }

  return map.get(head)!;
};

export default copyRandomList;
