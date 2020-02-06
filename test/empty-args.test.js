import mockArgv from 'mock-argv'
import firstArgv from './first-argv'

export default done => {
  mockArgv([], () => { expect(process.argv).toEqual(firstArgv); done() })
}
