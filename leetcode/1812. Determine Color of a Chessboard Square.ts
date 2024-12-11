const squareIsWhite = (coordinates: string): boolean =>
  (coordinates[0].charCodeAt(0) + Number(coordinates[1])) % 2 !== 0;

export default squareIsWhite;
