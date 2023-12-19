const numUniqueEmails = (emails) => {
  const set = new Set();

  for (const email of emails) {
    const splittedAt = email.split('@');
    const filteredFirst = [];

    for (const letter of splittedAt[0]) {
      if (letter === '+') break;
      if (letter !== '.') filteredFirst.push(letter);
    }

    const first = filteredFirst.join('');
    const current = `${first}@${splittedAt[1]}`;

    set.add(current);
  }

  return set.size;
};
