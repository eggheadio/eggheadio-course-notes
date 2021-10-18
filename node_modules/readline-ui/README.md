# readline-ui [![NPM version](https://img.shields.io/npm/v/readline-ui.svg?style=flat)](https://www.npmjs.com/package/readline-ui) [![NPM monthly downloads](https://img.shields.io/npm/dm/readline-ui.svg?style=flat)](https://npmjs.org/package/readline-ui) [![NPM total downloads](https://img.shields.io/npm/dt/readline-ui.svg?style=flat)](https://npmjs.org/package/readline-ui) [![Linux Build Status](https://img.shields.io/travis/enquirer/readline-ui.svg?style=flat&label=Travis)](https://travis-ci.org/enquirer/readline-ui)

> Create a readline interface with default settings to use in prompts.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save readline-ui
```

## Usage

```js
var UI = require('readline-ui');
var ui = new UI();
```

## Example

![example](example.gif)

The following example shows how to create a basic input prompt. This example is a greatly simplified version of [prompt-base](https://github.com/enquirer/prompt-base).

_(This code is also in [example.js](example.js) if you want to run it yourself.)_

```js
var cyan = require('ansi-cyan');
var UI = require('readline-ui');
var ui = new UI();

// first, we need to render the "question" 
// to display in the terminal
var prompt = '? foo ';
ui.render(prompt);

// on keypress events, re-render the prompt 
// along with user input
ui.on('keypress', function() {
  ui.render(prompt + ui.rl.line);
});

// when the "line" event is emitted (from the "enter" keypress)
// we `.end()` to unmute the output stream then pause the readline. 
ui.on('line', function(answer) {
  ui.render(prompt + cyan(answer));
  ui.end();
  ui.rl.pause();
  console.log({color: answer});
});
```

## API

### [.onKeypress](index.js#L70)

Handle `keypress` events.

**Params**

* `str` **{String}**
* `key` **{Object}**
* `returns` **{undefined}**

### [.render](index.js#L82)

Render the prompt with the given `input` and optional `footer`.

**Params**

* `input` **{String}**
* `footer` **{String}**: (optional)
* `returns` **{undefined}**

### [.clearLines](index.js#L148)

Remove `n` lines from the bottom of the terminal

**Params**

* `lines` **{Number}**: Number of lines to remove

### [.cacheCursorPos](index.js#L159)

Cache the current cursor's column and line position.

* `returns` **{Object}**: UI instance.

### [.restoreCursorPos](index.js#L170)

Restore the cursor position to the cached column and line.

* `returns` **{Object}**: UI instance.

### [.resume](index.js#L180)

Resume the input stream.

### [.pause](index.js#L189)

Pause the input stream, allowing it to be resumed later if necessary.

### [.close](index.js#L201)

Close the `readline.Interface` instance and relinquish
control over the input and output streams. Also removes
event listeners, and restores/unmutes prompt functionality.

### [.forceClose](index.js#L211)

Close the interface when the keypress is `^C`

### [.finish](index.js#L222)

Returns an "indentity" function that calls `.close()`,
which can be used as the final `.then()` function with
promises.

### [.end](index.js#L237)

Default method for writing a prompt to the terminal.
This can be overridden.

### [.mute](index.js#L260)

Mutes the output stream that was used to create the readline interface, and returns a function for unmuting the stream. This is useful in unit tests.

* `returns` **{Function}**

**Example**

```js
// mute the stream
var unmute = ui.mute();

// unmute the stream
unmute();
```

### [.log](index.js#L280)

Unmute then write to the output stream that was used
to create the readline interface, then re-mute the stream.
Useful for debugging prompts.

## Attribution

Inspired by the "screen manager" code in Inquirer.

## About

### Related projects

* [enquirer](https://www.npmjs.com/package/enquirer): Intuitive, plugin-based prompt system for node.js. | [homepage](http://enquirer.io "Intuitive, plugin-based prompt system for node.js.")
* [prompt-choices](https://www.npmjs.com/package/prompt-choices): Create an array of multiple choice objects for use in prompts. | [homepage](https://github.com/enquirer/prompt-choices "Create an array of multiple choice objects for use in prompts.")
* [prompt-question](https://www.npmjs.com/package/prompt-question): Question object, used by Enquirer and prompt plugins. | [homepage](https://github.com/enquirer/prompt-question "Question object, used by Enquirer and prompt plugins.")
* [readline-utils](https://www.npmjs.com/package/readline-utils): Readline utils, for moving the cursor, clearing lines, creating a readline interface, and more. | [homepage](https://github.com/enquirer/readline-utils "Readline utils, for moving the cursor, clearing lines, creating a readline interface, and more.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on June 04, 2017._