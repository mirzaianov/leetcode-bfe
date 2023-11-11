const greatestLetter = function (s) {
  const set = new Set(s);

  let res = '';

  const set2 = new Set();

  for (const letter of set) {
    const upperCaseLetter = letter.toUpperCase();

    if (set2.has(upperCaseLetter) && upperCaseLetter > res) res = upperCaseLetter;

    set2.add(upperCaseLetter);
  }

  return res;
};

console.log(greatestLetter('lEeTcOdE')); // "E"
console.log(greatestLetter('arRAzFif')); // "R"
console.log(greatestLetter('AbCdEfGhIjK')); // ""
console.log(
  greatestLetter(
    'dtssScKUtJXUhxwghakUgMmssmJMgkJZUJpCdmdsOxxsdZaSOdaFxwmXpCJwdpOhxgJUMKMsmsdgamcwXxXpmkCwaaUJdxFJJCtsFStktkwdXggsOchkgFpwSgOgOFMswpMhKtSwaMJxdZgCFgpxKMmaddCKKKOJhdkwUadcUKmgmwhtxwOKFpFpZMkkKSUUkJXghChJwxkCUFktFcFUXCJcmkcwXXOZJdFZwhaxSpgdSOZkkmJgwSmMSUZZUXcUKCpmXJkcCZmdSdthsdFKFJmmmCCOmtaCdhCStXOmUUhMXXkXwpmdgZmKcXdgpcdccOSsdaZUcwagtMFShdJpJxgtFgtcdkSXtMpZUFFKmgOMZtUSXMwxMatxOmgtcdgSMmpkpkFmtUFXdCpgJhUwSOtJkpmxhSKUxptUFCSmgctZJZcXUSFKUgpXtwOMskFXFsKkUkUCdFFZZCFKKmmskhZhgUKSsdSMxtCXMJMdSsawJKhZCaCmZXZsZZMFkSKOwXMCStFFpwhCUOJZUmJcggFagmmCKtkspmUtCOcskmmJUxpsKSsJtkStthXcthKKkpOgKsFkgKXZJOpgacFwJhgdggwUUgOZspgCcdCUhmXdwkskaFaUUwKFgtJmamgUCaacpxXkXhFJmUFwMFXttswaOkmcXdCxXsSgscCgSksXmmwdCXKSZsZSa',
  ),
); // "X"
