function createCode(): string {
  const len = 6;
  const lowerLetters = `abcdefghijklmnopqrstuvwxyz`;
  const upperLetters: string = lowerLetters.toUpperCase();
  const numbers = `0123456789`;
  const sets: string[] = [lowerLetters, upperLetters, numbers];

  function randomSet(a: string[]): string {
    const randomIndex = Math.floor(Math.random() * a.length);

    return a[randomIndex];
  }

  function randomChar(s: string): string {
    const randomIndex: number = Math.floor(Math.random() * 26);

    return s[randomIndex];
  }

  let pass = '';

  for (let i = 0; i < len; i += 1) {
    const set = randomSet(sets);
    pass += randomChar(set);
  }

  return pass;
}

const map = new Map<string, string>();
const set = new Set<string>();

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  const codeURL = createCode();
  const fullURL = `http://tinyurl.com/${codeURL}`;

  if (!set.has(longUrl)) {
    map.set(fullURL, longUrl);
    set.add(longUrl);
  }

  return fullURL;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return map.get(shortUrl)!;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
