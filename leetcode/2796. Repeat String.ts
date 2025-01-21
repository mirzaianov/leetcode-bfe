interface String {
  replicate(times: number): string;
}

String.prototype.replicate = function (this: string, times: number) {
  return Array(times).fill(this).join('');
};
