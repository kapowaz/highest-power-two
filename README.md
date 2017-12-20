# highestPowerTwo

A small utility to find the highest power of two below a given value.

## Installation

```shell
npm install highest-power-two --save
```

## Usage

```js
var highestPowerTwo = require('highest-power-two').default;
var result = highestPowerTwo(51);
console.log('result', result); // => "result 32"
```

## Tests

```shell
npm test
```

## Changelog

### v1.0.2

- Fix README instructions

### v1.0.1

- Changed `prepublish` script to `prepare`.

### v1.0.0

- Initial release
