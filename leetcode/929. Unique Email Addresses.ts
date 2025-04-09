const numUniqueEmails = (emails: string[]): number => {
  const set = new Set<string>();

  for (const email of emails) {
    const [first, second]: string[] = email.split('@');
    const filteredFirst: string[] = [];

    for (const letter of first) {
      if (letter === '+') break;
      if (letter !== '.') filteredFirst.push(letter);
    }

    const newFirst: string = filteredFirst.join('');
    const current: string = `${newFirst}@${second}`;

    set.add(current);
  }

  return set.size;
};

export default numUniqueEmails;
