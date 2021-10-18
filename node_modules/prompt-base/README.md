# prompt-base [![NPM version](https://img.shields.io/npm/v/prompt-base.svg?style=flat)](https://www.npmjs.com/package/prompt-base) [![NPM monthly downloads](https://img.shields.io/npm/dm/prompt-base.svg?style=flat)](https://npmjs.org/package/prompt-base) [![NPM total downloads](https://img.shields.io/npm/dt/prompt-base.svg?style=flat)](https://npmjs.org/package/prompt-base) [![Linux Build Status](https://img.shields.io/travis/enquirer/prompt-base.svg?style=flat&label=Travis)](https://travis-ci.org/enquirer/prompt-base) [![Windows Build Status](https://img.shields.io/appveyor/ci/enquirer/prompt-base.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/enquirer/prompt-base)

> Base prompt module used for creating custom prompts.

Follow this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), for updates on this project and others.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save prompt-base
```

## Release history

See [the changelog](changelog.md) for detailed release history.

## What is this?

prompt-base is a node.js library for creating command line prompts. You can use prompt-base directly for simple input prompts, or as a "base" for creating [custom prompts](#in-the-wild):

## Usage

See the [examples folder](./examples) for additional usage examples.

```js
var Prompt = require('prompt-base');
var prompt = new Prompt({
  name: 'color',
  message: 'What is your favorite color?'
});

// promise
prompt.run()
  .then(function(answer) {
    console.log(answer);
    //=> 'blue'
  })

// or async
prompt.ask(function(answer) {
  console.log(answer);
  //=> 'blue'
});
```

You can also pass a string directly to the main export:

```js
var prompt = require('prompt-base')('What is your favorite color?');
  
prompt.run()
  .then(function(answer) {
    console.log(answer);
  })
```

## Custom prompts

**Inherit**

```js
var Prompt = require('prompt-base');

function CustomPrompt(/*question, answers, rl*/) {
  Prompt.apply(this, arguments);
}

Prompt.extend(CustomPrompt);
```

## API

### [Prompt](index.js#L35)

Create a new Prompt with the given `question` object, `answers` and optional instance of [readline-ui](https://github.com/enquirer/readline-ui).

**Params**

* `question` **{Object}**: Plain object or instance of [prompt-question](https://github.com/enquirer/prompt-question).
* `answers` **{Object}**: Optionally pass an answers object from a prompt manager (like [enquirer](http://enquirer.io)).
* `ui` **{Object}**: Optionally pass an instance of [readline-ui](https://github.com/enquirer/readline-ui). If not passed, an instance is created for you.

**Example**

```js
var prompt = new Prompt({
  name: 'color',
  message: 'What is your favorite color?'
});

prompt.ask(function(answer) {
  console.log(answer);
  //=> 'blue'
});
```

### [.transform](index.js#L101)

Modify the answer value before it's returned. Must return a string or promise.

* `returns` **{String}**

**Example**

```js
var answers = {};
var Prompt = require('prompt-base');
var prompt = new Prompt({
  name: 'name',
  message: 'What is your name?',
  transform: function(input) {
    return input.toUpperCase();
  }
});
```

### [.validate](index.js#L139)

Validate user input on `keypress` events and the answer value when it's submitted by the `line` event (when the user hits <kbd>enter</kbd>. This may be overridden in custom prompts. If the function returns `false`, either `question.errorMessage` or the default validation error message (`invalid input`) is used. Must return a boolean, string or promise.

* `returns` **{Boolean}**

**Example**

```js
var Prompt = require('prompt-base');
var prompt = new Prompt({
  name: 'first',
  message: 'What is your name?',
  errorMessage: 'alphabetical characters only',
  validate: function(input) {
    var str = input ? input.trim() : '';
    var isValid = /^[a-z]+$/i.test(str);
    if (this.state === 'submitted') {
      return str.length > 10 && isValid;
    }
    return isValid;
  }
});
```

### [.when](index.js#L167)

A custom `.when` function may be defined to determine
whether or not a question should be asked at all. Must
return a boolean, undefined, or a promise.

* `returns` **{Boolean}**

**Example**

```js
var answers = {};
var Prompt = require('prompt-base');
var prompt = new Prompt({
  name: 'name',
  message: 'What is your name?',
  when: function(answers) {
    return !answers.name;
  }
});
```

### [.ask](index.js#L193)

Run the prompt with the given `callback` function.

**Params**

* `callback` **{Function}**
* `returns` **{undefined}**

**Example**

```js
var Prompt = require('prompt-base');
var prompt = new Prompt({
  name: 'name',
  message: 'What is your name?'
});

prompt.ask(function(answer) {
  console.log(answer);
});
```

### [.run](index.js#L235)

Run the prompt and resolve answers. If [when](#when) is defined and returns false, the prompt will be skipped.

**Params**

* `answers` **{Object}**: (optional) When supplied, the answer value will be added to a property where the key is the question name.
* `returns` **{Promise}**

**Example**

```js
var answers = {};
var Prompt = require('prompt-base');
var prompt = new Prompt({
  name: 'name',
  message: 'What is your name?'
});

prompt.run(answers)
  .then(function(answer) {
    console.log(answer);
    console.log(answers);
  });
```

### [.getDefault](index.js#L273)

Get the answer to use. This can be overridden in custom prompts.

* `returns` **{String}**

**Example**

```js
console.log(prompt.getDefault());
```

### [.getError](index.js#L306)

Get the error message to use. This can be overridden in custom prompts.

* `returns` **{String}**

**Example**

```js
console.log(prompt.getError());
```

### [.getHelp](index.js#L320)

Get the help message to use. This can be overridden in custom prompts.

* `returns` **{String}**

**Example**

```js
console.log(prompt.getHelp());
```

### [.getAnswer](index.js#L334)

Get the answer to use. This can be overridden in custom prompts.

* `returns` **{String}**

**Example**

```js
console.log(prompt.getAnswer());
```

### [.render](index.js#L356)

(Re-)render the prompt message, along with any help or error messages, user input, choices, list items, and so on. This is called to render the initial prompt, then it's called again each time the prompt changes, such as on keypress events (when the user enters input, or a multiple-choice option is selected). This method may be overridden in custom prompts, but it's recommended that you override the more specific render "status" methods instead.

* `returns` **{undefined}**

**Example**

```js
prompt.ui.on('keypress', prompt.render.bind(prompt));
```

### [.renderMessage](index.js#L434)

Format the prompt message.

* `returns` **{String}**

**Example**

```js
var answers = {};
var Prompt = require('prompt-base');
var prompt = new Prompt({
  name: 'name',
  message: 'What is your name?',
  transform: function(input) {
    return input.toUpperCase();
  }
});
```

### [.renderHelp](index.js#L452)

Called by [render](#render) to render a help message when the
`prompt.status` is `initialized` or `help` (usually when the
prompt is first rendered). Calling this method changes the
`prompt.status` to `"interacted"`, and as such, by default, the
message is only displayed until the user interacts. By default
the help message is positioned to the right of the prompt "question".
A custom help message may be defined on `options.helpMessage`.

**Params**

* `valid` **{boolean|string|undefined}**
* `returns` **{String}**

### [.renderError](index.js#L475)

Render an error message in the prompt, when `valid` is
false or a string. This is used when a validation method
either returns `false`, indicating that the input
was invalid, or the method returns a string, indicating
that a custom error message should be rendered. A custom
error message may also be defined on `options.errorMessage`.

**Params**

* `valid` **{boolean|string|undefined}**
* `returns` **{String}**

### [.renderOutput](index.js#L494)

Called by [render](#render) to render the readline `line`
when `prompt.status` is anything besides `answered`, which
includes everything except for error and help messages.

* `returns` **{String}**

### [.renderMask](index.js#L508)

Mask user input. Called by [renderOutput](#renderOutput),
this is an identity function that does nothing by default,
as it's intended to be overwritten in custom prompts, such
as [prompt-password](https://github.com/enquirer/prompt-password).

* `returns` **{String}**

### [.renderAnswer](index.js#L520)

Render the user's "answer". Called by [render](#render) when
the `prompt.status` is changed to `answered`.

* `returns` **{String}**

### [.action](index.js#L540)

Get action `name`, or set action `name` with the given `fn`.
This is useful for overridding actions in custom prompts.
Actions are used to move the pointer position, toggle checkboxes
and so on

**Params**

* `name` **{String}**
* `fn` **{Function}**
* `returns` **{Object|Function}**: Returns the prompt instance if setting, or the action function if getting.

### [.dispatch](index.js#L557)

Move the cursor in the given `direction` when a `keypress`
event is emitted.

**Params**

* `direction` **{String}**
* `event` **{Object}**

### [.onError](index.js#L602)

Default error event handler. If an `error` listener exist, an `error`
event will be emitted, otherwise the error is logged onto `stderr` and
the process is exited. This can be overridden in custom prompts.

**Params**

* `err` **{Object}**

### [.submitAnswer](index.js#L618)

Re-render and pass the final answer to the callback.
This can be replaced by custom prompts.

### [.only](index.js#L642)

Ensures that events for event `name` are only **registered** once and are disabled correctly when specified. This is different from `.once`, which only **emits** once.

**Example**

```js
prompt.only('keypress', function() {
  // do keypress stuff
});
```

### [.mute](index.js#L671)

Mutes the output stream that was used to create the readline interface, and returns a function for unmuting the stream. This is useful in unit tests.

* `returns` **{Function}**

**Example**

```js
// mute the stream
var unmute = prompt.mute();

// unmute the stream
unmute();
```

### [.end](index.js#L691)

Pause the readline and unmute the output stream that was
used to create the readline interface, which is `process.stdout`
by default.

### [.resume](index.js#L706)

[Resume](https://nodejs.org/api/readline.html#readline_rl_resume) the readline input stream if it has been paused.

* `returns` **{undefined}**

### [.choices](index.js#L759)

Getter for getting the choices array from the question.

* `returns` **{Object}**: Choices object

### [.message](index.js#L776)

Getter that returns `question.message` after passing it to [format](#format).

* `returns` **{String}**: A formatted prompt message.

### [.symbol](index.js#L797)

Getter/setter for getting the checkbox symbol to use.

* `returns` **{String}**: The formatted symbol.

**Example**

```js
// customize
prompt.symbol = '[ ]';
```

### [.prefix](index.js#L823)

Getter/setter that returns the prefix to use before `question.message`. The default value is a green `?`.

* `returns` **{String}**: The formatted prefix.

**Example**

```js
// customize
prompt.prefix = ' ❤ ';
```

### [.ask](index.js#L855)

Static convenience method for running the [.ask](#ask) method. Takes the same arguments as the contructror.

**Params**

* `question` **{Object}**: Plain object or instance of [prompt-question](https://github.com/enquirer/prompt-question).
* `answers` **{Object}**: Optionally pass an answers object from a prompt manager (like [enquirer](http://enquirer.io)).
* `ui` **{Object}**: Optionally pass an instance of [readline-ui](https://github.com/enquirer/readline-ui). If not passed, an instance is created for you.
* `callback` **{Function}**
* `returns` **{undefined}**

**Example**

```js
var prompt = require('prompt-base');
  .ask('What is your favorite color?', function(answer) {
    console.log({color: answer});
    //=> { color: 'blue' }
  });
```

### [.run](index.js#L881)

Static convenience method for running the [.run](#run) method. Takes the same arguments as the contructror.

**Params**

* `question` **{Object}**: Plain object or instance of [prompt-question](https://github.com/enquirer/prompt-question).
* `answers` **{Object}**: Optionally pass an answers object from a prompt manager (like [enquirer](http://enquirer.io)).
* `ui` **{Object}**: Optionally pass an instance of [readline-ui](https://github.com/enquirer/readline-ui). If not passed, an instance is created for you.
* `returns` **{Promise}**

**Example**

```js
var prompt = require('prompt-base');
  .run('What is your favorite color?')
  .then(function(answer) {
    console.log({color: answer});
    //=> { color: 'blue' }
  });
```

### [.Question](index.js#L897)

Create a new `Question`. See [prompt-question](https://github.com/enquirer/prompt-question) for more details.

**Params**

* `options` **{Object}**
* `returns` **{Object}**: Returns an instance of [prompt-question](https://github.com/enquirer/prompt-question)

**Example**

```js
var question = new Prompt.Question({name: 'foo'});
```

### [.Choices](index.js#L911)

Create a new `Choices` object. See [prompt-choices](https://github.com/enquirer/prompt-choices) for more details.

**Params**

* `choices` **{Array}**: Array of choices
* `returns` **{Object}**: Returns an intance of Choices.

**Example**

```js
var choices = new Prompt.Choices(['foo', 'bar', 'baz']);
```

### [.Separator](index.js#L924)

Create a new `Separator` object. See [choices-separator](https://github.com/enquirer/choices-separator) for more details.

**Params**

* `separator` **{String}**: Optionally pass a string to use as the separator.
* `returns` **{Object}**: Returns a separator object.

**Example**

```js
new Prompt.Separator('---');
```

## Events

### prompt

Emitted when a prompt (plugin) is instantiated, _after the readline interface is created, but before the actual "question" is asked_.

**Example usage**

```js
enquirer.on('prompt', function(prompt) {
  // do stuff with "prompt" instance
});
```

### ask

Emitted when the actual "question" is asked.

**Example usage**

Emit `keypress` events to supply the answer (and potentially skip the prompt if the answer is valid):

```js
enquirer.on('ask', function(prompt) {
  prompt.rl.input.emit('keypress', 'foo');
  prompt.rl.input.emit('keypress', '\n');
});
```

Change the prompt message:

```js
enquirer.on('ask', function(prompt) {
  prompt.message = 'I..\'m Ron Burgundy...?';
});
```

### answer

Emitted when the final (valid) answer is submitted, and custom validation function (if defined) returns true.

_(An "answer" is the final input value that's captured when the `readline` emits a `line` event; e.g. when the user hits `enter`)_

**Example usage**

```js
enquirer.on('answer', function(answer) {
  // do stuff with answer
});
```

## In the wild

The following custom prompts were created using this library:

* [prompt-autocomplete](https://www.npmjs.com/package/prompt-autocomplete): A prompt in the terminal but with autocomplete functionality | [homepage](https://github.com/rickbergfalk/prompt-autocomplete "A prompt in the terminal but with autocomplete functionality")
* [prompt-checkbox](https://www.npmjs.com/package/prompt-checkbox): Multiple-choice/checkbox prompt. Can be used standalone or with a prompt system like [Enquirer](http://enquirer.io). | [homepage](https://github.com/enquirer/prompt-checkbox "Multiple-choice/checkbox prompt. Can be used standalone or with a prompt system like [Enquirer].")
* [prompt-confirm](https://www.npmjs.com/package/prompt-confirm): Confirm (yes/no) prompt. Can be used standalone or with a prompt system like [Enquirer](http://enquirer.io). | [homepage](https://github.com/enquirer/prompt-confirm "Confirm (yes/no) prompt. Can be used standalone or with a prompt system like [Enquirer].")
* [prompt-editor](https://www.npmjs.com/package/prompt-editor): Editor prompt. Opens your text editor and waits for you to save your input during… [more](https://github.com/enquirer/prompt-editor) | [homepage](https://github.com/enquirer/prompt-editor "Editor prompt. Opens your text editor and waits for you to save your input during a prompt. Can be used standalone or with a prompt system like [Enquirer].")
* [prompt-expand](https://www.npmjs.com/package/prompt-expand): Expand prompt. Can be used as a standalone prompt, or with a prompt system like… [more](https://github.com/enquirer/prompt-expand) | [homepage](https://github.com/enquirer/prompt-expand "Expand prompt. Can be used as a standalone prompt, or with a prompt system like [Enquirer].")
* [prompt-list](https://www.npmjs.com/package/prompt-list): List-style prompt. Can be used as a standalone prompt, or with a prompt system like… [more](https://github.com/enquirer/prompt-list) | [homepage](https://github.com/enquirer/prompt-list "List-style prompt. Can be used as a standalone prompt, or with a prompt system like [enquirer].")
* [prompt-password](https://www.npmjs.com/package/prompt-password): Password prompt. Can be used as a standalone prompt, or as a plugin for [Enquirer](http://enquirer.io). | [homepage](https://github.com/enquirer/prompt-password "Password prompt. Can be used as a standalone prompt, or as a plugin for [Enquirer].")
* [prompt-radio](https://www.npmjs.com/package/prompt-radio): Radio prompt. Can be used as a standalone prompt, or as a plugin for [Enquirer](http://enquirer.io). | [homepage](https://github.com/enquirer/prompt-radio "Radio prompt. Can be used as a standalone prompt, or as a plugin for [Enquirer].")
* [prompt-rawlist](https://www.npmjs.com/package/prompt-rawlist): Rawlist prompt. Can be used as a standalone prompt, or with a prompt system like… [more](https://github.com/enquirer/prompt-rawlist) | [homepage](https://github.com/enquirer/prompt-rawlist "Rawlist prompt. Can be used as a standalone prompt, or with a prompt system like [Enquirer].")

## About

### Related projects

You might also be interested in these projects:

* [enquirer](https://www.npmjs.com/package/enquirer): Intuitive, plugin-based prompt system for node.js. | [homepage](http://enquirer.io "Intuitive, plugin-based prompt system for node.js.")
* [prompt-choices](https://www.npmjs.com/package/prompt-choices): Create an array of multiple choice objects for use in prompts. | [homepage](https://github.com/enquirer/prompt-choices "Create an array of multiple choice objects for use in prompts.")
* [prompt-question](https://www.npmjs.com/package/prompt-question): Question object, used by Enquirer and prompt plugins. | [homepage](https://github.com/enquirer/prompt-question "Question object, used by Enquirer and prompt plugins.")
* [readline-utils](https://www.npmjs.com/package/readline-utils): Readline utils, for moving the cursor, clearing lines, creating a readline interface, and more. | [homepage](https://github.com/enquirer/readline-utils "Readline utils, for moving the cursor, clearing lines, creating a readline interface, and more.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 163 | [jonschlinkert](https://github.com/jonschlinkert) |
| 6 | [doowb](https://github.com/doowb) |
| 1 | [sbj42](https://github.com/sbj42) |

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

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on August 30, 2017._