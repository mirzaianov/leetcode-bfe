const restoreIpAddresses = (s: string): string[] => {
  if (s.length < 4 || s.length > 12) return [];

  const res: string[] = [];

  const dfs = (str: string, ip: string, c: number): void => {
    if (str.length === 0 && c === 0) res.push(ip);

    if (c === 0) return;

    for (let i = 0; i < 4; i += 1) {
      if (i >= str.length) break;

      const subIP: string = str.slice(0, i + 1);

      if (parseInt(subIP, 10) > 255 || (subIP.length > 1 && subIP[0] === '0')) return;

      dfs(str.slice(i + 1), ip + (c === 4 ? '' : '.') + subIP, c - 1);
    }
  };

  dfs(s, '', 4);

  return res;
};

export default restoreIpAddresses;
