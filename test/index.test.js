import mockArgv from 'mock-argv'

const firstArgv = process.argv.slice(0, 2)

describe('index', () => {

  it('missing args', done => {
    mockArgv(() => { expect(process.argv).toEqual(firstArgv); done() })
  })

  it('empty args', done => {
    mockArgv([], () => { expect(process.argv).toEqual(firstArgv); done() })
  })

  it('has args', done => {
    mockArgv(['foo', 'bar'], () => { expect(process.argv).toEqual([...firstArgv, 'foo', 'bar']); done() })
  })

  it('async', async () => {
    await mockArgv(
      ['foo', 'bar'],
      () => new Promise(resolve => setTimeout(() => { expect(process.argv).toEqual([...firstArgv, 'foo', 'bar']); return resolve() }, 100))
    )
  })
})
