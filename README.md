# css-variables-helpers

Helpers to get, and set, and toggle CSS Variables (aka CSS Custom Properties) in JavaScript

## Install
```sh
$ npm install css-variables-helpers
```

## Usage

```js
const { toggle } = require('css-variables-helpers')

// Toggle the :root '--container-width' between 100% and 900px
toggle('container-width', ['100%', '900px'])

// Sets the value of :root '--base-font-size' to 16px  
set('base-font-size', '16px')

// Sets the value of '--primary-color' of an element to blue
set('primary-color', 'blue', document.querySelector('.btn'))
```

## API

### get (variable, [element])
Returns the value of the CSS variable. If element is not provided, `:root` is assumed.


**variable**  
Type: String  
Supports shorthand `variable` or `--my-variable` for convenience.

**element**  
Type: DOMElement  
Defaults to the root `documentElement`.


### set (variable, [element])
Sets the value of the CSS variable. If element is not provided, `:root` is assumed.

**variable**  
Type: String  
Supports shorthand `variable` or `--my-variable` for convenience.

**element**  
Type: DOMElement  
Defaults to the root `documentElement`.


### toggle (variable, valuesArray, [element])
Toggles the value of the CSS variable between the array. If element is not provided, `:root` is assumed.

**variable**  
Type: String  
Supports shorthand `variable` or `--my-variable` for convenience.

**valuesArray**  
Type: Array  
An array of values to cycle through.

**element**  
Type: DOMElement  
Defaults to the root `documentElement`.

