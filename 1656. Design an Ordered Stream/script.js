const OrderedStream = function (n) {
  this.pointer = 0;
  this.list = [];
};

OrderedStream.prototype.insert = function (idKey, value) {
  const chunk = [];
  this.list[idKey - 1] = value;

  while (this.list[this.pointer]) {
    chunk.push(this.list[this.pointer]);
    this.pointer += 1;
  }

  return chunk;
};
