function power(num, exp) {
  if (exp === 1) return num;

  return num * power(num, exp - 1);
}

console.log(power(2, 5));
