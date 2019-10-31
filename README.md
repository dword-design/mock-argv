<!--@h1([pkg.name])-->
# mock-argv
<!--/@-->

<!--@shields('npm', 'travis', 'coveralls', 'deps')-->
[![npm version](https://img.shields.io/npm/v/mock-argv.svg)](https://www.npmjs.com/package/mock-argv) [![Build Status](https://img.shields.io/travis/dword-design/mock-argv/master.svg)](https://travis-ci.org/dword-design/mock-argv) [![Coverage Status](https://img.shields.io/coveralls/dword-design/mock-argv/master.svg)](https://coveralls.io/r/dword-design/mock-argv?branch=master) [![dependency status](https://img.shields.io/david/dword-design/mock-argv.svg)](https://david-dm.org/dword-design/mock-argv)
<!--/@-->

<!--@pkg.description-->
Temporarily overrides the command line arguments. This is useful for testing.
<!--/@-->

<!--@installation()-->
## Installation

```sh
# via NPM
npm install --save mock-argv

# via Yarn
yarn add mock-argv
```
<!--/@-->

## Usage

```js
const mockArgv = require('mock-argv')

test('works', async () => {

  mockArgv(['foo', 'bar'], () => {
    //> process.argv = [
    //>   'path-to-node',
    //>   'path-to-current-script',
    //>   'foo',
    //>   'bar',
    //> ]
  })

  //> process.argv = ['path-to-node', 'path-to-current-script', '...other-params']

  // Also works for async functions
})
```

<!--@license()-->
## License

MIT © Sebastian Landwehr
<!--/@-->
