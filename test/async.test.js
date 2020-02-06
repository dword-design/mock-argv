import mockArgv from 'mock-argv'
import firstArgv from './first-argv'

export default () => mockArgv(
  ['foo', 'bar'],
  () => new Promise(resolve => setTimeout(() => { expect(process.argv).toEqual([...firstArgv, 'foo', 'bar']); return resolve() }, 100)),
)

