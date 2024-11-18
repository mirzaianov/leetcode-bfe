const transformToMorse = (s: string): string => {
  const morseAlphabet = new Map<string, string>([
    ['a', '.-'],
    ['b', '-...'],
    ['c', '-.-.'],
    ['d', '-..'],
    ['e', '.'],
    ['f', '..-.'],
    ['g', '--.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.---'],
    ['k', '-.-'],
    ['l', '.-..'],
    ['m', '--'],
    ['n', '-.'],
    ['o', '---'],
    ['p', '.--.'],
    ['q', '--.-'],
    ['r', '.-.'],
    ['s', '...'],
    ['t', '-'],
    ['u', '..-'],
    ['v', '...-'],
    ['w', '.--'],
    ['x', '-..-'],
    ['y', '-.--'],
    ['z', '--..'],
  ]);

  let res: string = '';

  for (const l of s) {
    res += morseAlphabet.get(l)!;
  }

  return res;
};

const uniqueMorseRepresentations = (words: string[]): number =>
  new Set(words.map((item) => transformToMorse(item))).size;

export default uniqueMorseRepresentations;
