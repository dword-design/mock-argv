<!-- TITLE/ -->
# mock-argv
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/mock-argv.svg)](https://npmjs.org/package/mock-argv)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/mock-argv/workflows/build/badge.svg)](https://github.com/dword-design/mock-argv/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/mock-argv)](https://coveralls.io/github/dword-design/mock-argv)
[![Dependency status](https://img.shields.io/david/dword-design/mock-argv)](https://david-dm.org/dword-design/mock-argv)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a><a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://dword-design.de/images/paypal.svg"
    alt="PayPal"
    height="32"
  >
</a><a href="https://www.patreon.com/dworddesign">
  <img
    src="https://dword-design.de/images/patreon.svg"
    alt="Patreon"
    height="32"
  >
</a>
<!-- /BADGES -->


<!-- DESCRIPTION/ -->
Temporarily overrides the command line arguments. This is useful for testing.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install mock-argv

# Yarn
$ yarn add mock-argv
```
<!-- /INSTALL -->

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

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
