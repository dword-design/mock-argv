export default async <TFunc extends () => unknown>(
  ...args: [string[], TFunc] | [TFunc]
) => {
  const argv = (typeof args[0] === 'function' ? [] : args[0]) as string[];
  const func = (typeof args[0] === 'function' ? args[0] : args[1]) as TFunc;
  const oldArgv = process.argv;
  process.argv = [...oldArgv.slice(0, 2), ...argv];

  try {
    await func();
  } finally {
    process.argv = oldArgv;
  }
};
