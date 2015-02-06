

# JSX-TypeScript

JSX-TypeScript is a [TypeScript](http://www.typescriptlang.org/) for that brings [React](facebook.github.io/react/) [JSX](http://facebook.github.io/jsx/) support to the language.


## Installation 

This package has the exact same structure than the typescript one, so every tools (like visual studio) that use the typescript compiler should be able
to use this package.
Once this package will be considered stable it will be published to npm, in the mean time, to install this package use npm with the github url:

```
npm install -g fdecampredon/jsx-typescript
```

Or download a tarball from source and install it from the generated folder.

## Usage

The executable is named `jsx-tsc` instead of `tsc`, and has the exact same options than `tsc`: 

````
jsx-tsc myFile.ts
```

## TODO

* JSXSpreadAttribute support
* Reenable formatting for JSX
* Autocompletion for jsx attributes (see: https://github.com/Microsoft/TypeScript/issues/1926)
* In general more tests, stabilization, better error reporting, etc...
