import mockArgv from './index.js'

export default {
  async: () =>
    mockArgv(
      ['foo', 'bar'],
      () =>
        new Promise(resolve =>
          setTimeout(() => {
            expect(process.argv).toEqual([
              ...process.argv.slice(0, 2),
              'foo',
              'bar',
            ])

            return resolve()
          }, 100)
        )
    ),
  'empty args': done => {
    mockArgv([], () => {
      expect(process.argv).toEqual(process.argv.slice(0, 2))
      done()
    })
  },
  'has args': done => {
    mockArgv(['foo', 'bar'], () => {
      expect(process.argv).toEqual([...process.argv.slice(0, 2), 'foo', 'bar'])
      done()
    })
  },
  'missing args': done => {
    mockArgv(() => {
      expect(process.argv).toEqual(process.argv.slice(0, 2))
      done()
    })
  },
}
