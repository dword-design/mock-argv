// foo

export default async (args, func) => {
  if (typeof args === 'function') {
    func = args
    args = []
  }
  const oldArgv = process.argv
  process.argv = [...oldArgv.slice(0, 2), ...args]
  try {
    await func()
  } finally {
    process.argv = oldArgv
  }
}
