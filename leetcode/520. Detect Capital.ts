const detectCapitalUse = (word: string): boolean => /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);

export default detectCapitalUse;
