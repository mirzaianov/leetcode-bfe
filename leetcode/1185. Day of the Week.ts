const dayOfTheWeek = (day: number, month: number, year: number): string =>
  new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(year, month - 1, day));

export default dayOfTheWeek;
