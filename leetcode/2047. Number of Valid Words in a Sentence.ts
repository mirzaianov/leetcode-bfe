const countValidWords = (sentence: string): number =>
  sentence.split(/\s+/).filter((word) => word.match(/^([!.,]|[a-z]+(-[a-z]+)?[!.,]?)$/)).length;

export default countValidWords;
