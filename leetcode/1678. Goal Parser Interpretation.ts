const interpret = (command: string): string =>
  command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');

export default interpret;
