# @lissome/util

The Util library Lissome.js provides lots of utility functions in daily coding.

It's written by `TypeScript` which can be friendly used in IDE.

## Installation

```
npm install @lissome/util
```

## Usage

### Lang

| methods | description |
| --- | --- |
| `isString` | Checks if `value` is `String` |
| `isBoolean` | Checks if `value` is a `Boolean` value |
| `isFalse` | Checks if `value` is `false` |
| `isObject` | Checks if `value` is the language type of `Object`, not `Null` |
| `isPlainObject` | Checks if `value` is a plain object |
| `isEmptyObject` | Checks if `value` is an empty object, without `key/value` pairs |
| `isArray` | Checks if `value` is an `Array` |
| `isEmptyArray` | Checks if `value` is an empty array |
| `isFunction` | Checks if `value` is a `Function` |
| `isPromise` | Checks if `value` is a Promise or thenable function |
| `isUndefined` | Checks if `value` is `Undefined` |
| `isDefined` | Checks if `value` is an defined value, not `Undefined` or `Null` |
| `equal` | Checks two object or array is equal by value |

### String

| methods | description |
| --- | --- |
| `camelCase` | Converts string to camel case |
| `pascalCase` | Converts string to pascal (big camel) case |
| `snakeCase` | Converts string to snake case |
| `kebabCase` | Converts string to kebab case |

### Object

| methods | description |
| --- | --- |
| `snakeCaseKeys` | Process keys of Object or Object item of Array to snake case deeply |
| `camelCaseKeys` | Process keys of Object or Object item of Array to camel case deeply |
| `at` | Get value by path in an Object or Array |

### Methods

| methods | description |
| --- | --- |
| `copyText` | copy text to clipboard |