const mockArgv = require('this')

const firstArgv = process.argv.slice(0, 2)

test('missing args', () => {
  let argv
  mockArgv(() => argv = process.argv)
  expect(argv).toEqual(firstArgv)
})

test('empty args', () => {
  let argv
  mockArgv([], () => argv = process.argv)
  expect(argv).toEqual(firstArgv)
})

test('has args', () => {
  let argv
  mockArgv(['foo', 'bar'], () => argv = process.argv)
  expect(argv).toEqual([...firstArgv, 'foo', 'bar'])
})

test('async', async () => {
  let argv
  await mockArgv(
    ['foo', 'bar'],
    () => new Promise(resolve => setTimeout(() => { argv = process.argv; return resolve() }, 100))
  )
  expect(argv).toEqual([...firstArgv, 'foo', 'bar'])
})
