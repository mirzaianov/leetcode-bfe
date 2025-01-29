const sortTheStudents = (score: number[][], k: number): number[][] =>
  score.sort((a, b) => b[k] - a[k]);

export default sortTheStudents;
