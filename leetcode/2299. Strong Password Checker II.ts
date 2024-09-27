const strongPasswordCheckerII = (password: string): boolean =>
  !(
    !password.match(/.{8,}/) ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/\d/) ||
    !password.match(/\W/) ||
    password.match(/(.)\1+/)
  );

export default strongPasswordCheckerII;
