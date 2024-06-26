class Solution {
  encode(strs: string[]): string {
    let res = '';

    for (const str of strs) {
      res += `${str.length}#${str}`;
    }

    return res;
  }

  decode(str: string): string[] {
    const res = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== '#') {
        j += 1;
      }

      const len = Number(str.slice(i, j));

      res.push(str.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
    }

    return res;
  }
}
