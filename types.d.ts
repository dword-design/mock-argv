declare module 'mock-argv' {
  function mockArg(func: () => Promise<void>): Promise<void>;
  function mockArg(args: Array<string>, func: () => Promise<void>): Promise<void>;
  export = mockArg;
}
