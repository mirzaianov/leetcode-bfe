const findOcurrences = (text: string, first: string, second: string): string[] => {
  const pattern = new RegExp(`(?<=\\b${first}\\s${second}\\s)\\w+`, 'g');

  return text.match(pattern) || [];
};

export default findOcurrences;
