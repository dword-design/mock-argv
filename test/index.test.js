const mockArgv = require('mock-argv')
const expect = require('expect')

const firstArgv = process.argv.slice(0, 2)

it('missing args', () => {
  let argv
  mockArgv(() => argv = process.argv)
  expect(argv).toEqual(firstArgv)
})

it('empty args', () => {
  let argv
  mockArgv([], () => argv = process.argv)
  expect(argv).toEqual(firstArgv)
})

it('has args', () => {
  let argv
  mockArgv(['foo', 'bar'], () => argv = process.argv)
  expect(argv).toEqual([...firstArgv, 'foo', 'bar'])
})

it('async', async () => {
  let argv
  await mockArgv(
    ['foo', 'bar'],
    () => new Promise(resolve => setTimeout(() => { argv = process.argv; return resolve() }, 100))
  )
  expect(argv).toEqual([...firstArgv, 'foo', 'bar'])
})
