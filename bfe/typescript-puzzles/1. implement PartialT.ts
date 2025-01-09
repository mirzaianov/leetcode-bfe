type MyPartial<T> = {
  [U in keyof T]?: T[U];
};

export default MyPartial;
