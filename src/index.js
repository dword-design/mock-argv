module.exports = async (args, callback) => {
  if (typeof args === 'function') {
    callback = args
    args = []
  }

  const oldArgv = process.argv
  process.argv = [...oldArgv.slice(0, 2), ...args]

  try {
    await callback()
  } finally {
    process.argv = oldArgv
  }
}
