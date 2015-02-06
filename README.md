# JSX-TypeScript

> JSX-TypeScript is a [TypeScript](http://www.typescriptlang.org/) for that brings [React](facebook.github.io/react/) [JSX](http://facebook.github.io/jsx/) support to the language.

## Installation 

You can install this package with npm

```
npm install -g jsx-typescript
```

> This package has the exact same structure than the typescript one; so tools which are able to use the typescript compiler should be able to use this package.

## Usage

The executable is named `jsx-tsc` instead of `tsc`, and has the exact same options than `tsc`: 

```
jsx-tsc myFile.ts
```

## TODO

* JSXSpreadAttribute support
* Re-enable formatting for JSX
* Autocompletion for jsx attributes (see: https://github.com/Microsoft/TypeScript/issues/1926)
* In general more tests, stabilization, better error reporting, etc...
