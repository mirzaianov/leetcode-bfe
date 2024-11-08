const decode = (encoded: number[], first: number): number[] => {
  const decoded = [first];

  for (let i = 0; i < encoded.length; i += 1) {
    decoded.push(decoded[i] ^ encoded[i]);
  }

  return decoded;
};

export default decode;
