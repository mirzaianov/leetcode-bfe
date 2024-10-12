const makeFancyString = (s: string): string => s.replace(/(.)\1{2,}/g, '$1$1');

export default makeFancyString;
