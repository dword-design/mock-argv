import mockArgv from 'mock-argv'
import expect from 'expect'
import firstArgv from './first-argv'

export default done => {
  mockArgv(() => { expect(process.argv).toEqual(firstArgv); done() })
}
