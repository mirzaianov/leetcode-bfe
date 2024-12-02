const freqAlphabets = (s: string): string => {
  const map = new Map<string, string>([
    ['1', 'a'],
    ['2', 'b'],
    ['3', 'c'],
    ['4', 'd'],
    ['5', 'e'],
    ['6', 'f'],
    ['7', 'g'],
    ['8', 'h'],
    ['9', 'i'],
    ['10', 'j'],
    ['11', 'k'],
    ['12', 'l'],
    ['13', 'm'],
    ['14', 'n'],
    ['15', 'o'],
    ['16', 'p'],
    ['17', 'q'],
    ['18', 'r'],
    ['19', 's'],
    ['20', 't'],
    ['21', 'u'],
    ['22', 'v'],
    ['23', 'w'],
    ['24', 'x'],
    ['25', 'y'],
    ['26', 'z'],
  ]);
  let res = '';
  let i = 0;

  while (s[i]) {
    if (s[i + 2] === '#') {
      res += map.get(s[i] + s[i + 1]);
      i += 3;
    } else {
      res += map.get(s[i]);
      i += 1;
    }
  }

  return res;
};

export default freqAlphabets;
