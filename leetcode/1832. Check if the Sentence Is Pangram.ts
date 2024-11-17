const checkIfPangram = (sentence: string): boolean => new Set(sentence.split('')).size === 26;

export default checkIfPangram;
