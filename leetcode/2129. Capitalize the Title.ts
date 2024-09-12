const capitalizeTitle = (title: string): string =>
  title
    .split(' ')
    .map((word) =>
      word.length <= 2 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(' ');

export default capitalizeTitle;
