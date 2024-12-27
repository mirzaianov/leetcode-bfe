const numericalValue = (word: string): number =>
  parseInt(
    word.split('').reduce((acc: string, item: string) => acc + String(item.charCodeAt(0) - 97), ''),
    10,
  );

const isSumEqual = (firstWord: string, secondWord: string, targetWord: string): boolean =>
  numericalValue(firstWord) + numericalValue(secondWord) === numericalValue(targetWord);

export default isSumEqual;
