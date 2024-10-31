const createHelloWorld = (): (() => string) => (): string => 'Hello World';

export default createHelloWorld;
