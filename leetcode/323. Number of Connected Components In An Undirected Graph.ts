const countComponents = (n: number, edges: number[][]): number => {
  const par = Array(n).fill(undefined);

  for (let i = 0; i < n; i += 1) {
    par[i] = i;
  }

  const rank = Array(n).fill(1);

  const find = (n1: number): number => {
    let res: number = n1;

    while (res !== par[res]) {
      par[res] = par[par[res]];
      res = par[res];
    }

    return res;
  };

  const union = (n1: number, n2: number): number => {
    const p1: number = find(n1);
    const p2: number = find(n2);

    if (p1 === p2) return 0;

    if (rank[p2] > rank[p1]) {
      par[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2];
    }

    return 1;
  };

  let res = n;

  for (const [n1, n2] of edges) {
    res -= union(n1, n2);
  }

  return res;
};

export default countComponents;
