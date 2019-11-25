<!-- TITLE/ -->

<h1>mock-argv</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/mock-argv" title="View this project on NPM"><img src="https://img.shields.io/npm/v/mock-argv.svg" alt="NPM version" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/dword-design/mock-argv" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/dword-design/mock-argv/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/dword-design/mock-argv" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/dword-design/mock-argv.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/dword-design/mock-argv" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/dword-design/mock-argv.svg" alt="Dependency Status" /></a></span>
<span class="badge-shields"><a href="https://img.shields.io/badge/renovate-enabled-brightgreen.svg"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Temporarily overrides the command line arguments. This is useful for testing.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save mock-argv</code></li>
<li>Require: <code>require('mock-argv')</code></li>
</ul>

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

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; Sebastian Landwehr</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
