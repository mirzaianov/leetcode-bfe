class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const spiralMatrix = (m: number, n: number, head: ListNode | null): number[][] => {
  const res: number[][] = new Array(m).fill(undefined).map(() => [...new Array(n)].fill(-1));
  let p: ListNode | null = head;

  let t = 0;
  let r: number = n - 1;
  let b: number = m - 1;
  let l = 0;

  while (p) {
    for (let i = l; i <= r; i += 1) {
      if (!p) return res;

      res[t][i] = p.val;
      p = p.next;
    }

    t += 1;

    for (let i = t; i <= b; i += 1) {
      if (!p) return res;

      res[i][r] = p.val;
      p = p.next;
    }

    r -= 1;

    for (let i = r; i >= l; i -= 1) {
      if (!p) return res;

      res[b][i] = p.val;
      p = p.next;
    }

    b -= 1;

    for (let i = b; i >= t; i -= 1) {
      if (!p) return res;

      res[i][l] = p.val;
      p = p.next;
    }

    l += 1;
  }

  return res;
};

export default spiralMatrix;
