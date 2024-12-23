const minimizedStringLength = (s: string): number => new Set(s.split('')).size;

export default minimizedStringLength;
