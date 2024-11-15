const truncateSentence = (s: string, k: number): string => s.split(' ').slice(0, k).join(' ');

export default truncateSentence;
