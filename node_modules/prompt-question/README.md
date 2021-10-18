# prompt-question [![NPM version](https://img.shields.io/npm/v/prompt-question.svg?style=flat)](https://www.npmjs.com/package/prompt-question) [![NPM monthly downloads](https://img.shields.io/npm/dm/prompt-question.svg?style=flat)](https://npmjs.org/package/prompt-question) [![NPM total downloads](https://img.shields.io/npm/dt/prompt-question.svg?style=flat)](https://npmjs.org/package/prompt-question) [![Linux Build Status](https://img.shields.io/travis/enquirer/prompt-question.svg?style=flat&label=Travis)](https://travis-ci.org/enquirer/prompt-question)

> Question object, used by Enquirer and prompt plugins.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save prompt-question
```

## Usage

The main export is a constructor function that is used to create new `Question` objects, which are used in prompts by [base-prompt][].

```js
var Question = require('prompt-question');
var question = new Question('color', 'What is favorite color?');
```

**Examples**

Any of the following signatures may be used:

```js
var question = new Question('color'); // sets message as the same value as `name`
var question = new Question('color', 'What is favorite color?');
var question = new Question('color', {message: 'What is favorite color?'});
var question = new Question({name: 'color', message: 'What is favorite color?'});
var question = new Question({name: 'color'});
```

## API

### [Question](index.js#L29)

Create a new question with the given `name`, `message` and `options`.

**Params**

* `name` **{String|Object}**: Question name or options.
* `message` **{String|Object}**: Question message or options.
* `options` **{String|Object}**: Question options.

**Example**

```js
var question = new Question('first', 'What is your first name?');
console.log(question);
// {
//   type: 'input',
//   name: 'color',
//   message: 'What is your favorite color?'
// }
```

### [.clone](index.js#L71)

Clone the question instance.

* `returns` **{Object}**: Returns the cloned question

**Example**

```js
var clonedQuestion = question.clone();
```

### [.addChoices](index.js#L95)

Add formatted choice objects to the `question.choices` array. See [prompt-choices](https://github.com/enquirer/prompt-choices) for more details.

**Params**

* `choices` **{String|Array}**: One or more choices to add.
* `returns` **{Object}**: Returns the question instance for chaining

**Example**

```js
question.addChoices(['foo', 'bar', 'baz']);
```

### [.addChoice](index.js#L112)

Add a choice to `question.choices` array. See [prompt-choices](https://github.com/enquirer/prompt-choices) for more details.

**Params**

* `choice` **{String|Object}**
* `returns` **{Object}**: Returns the question instance for chaining

**Example**

```js
question.addChoice('foo');
```

### [.getDefault](index.js#L142)

Returns the given `val` or `question.default` if `val` is undefined or null.

**Params**

* `val` **{any}**
* `returns` **{any}**

**Example**

```js
var question = new Question({
  name: 'first',
  message: 'First name'?,
  default: 'Bob'
});

console.log(question.getAnswer());
//=> 'Bob'
console.log(question.getAnswer('Joe'));
//=> 'Joe'
console.log(question.getAnswer(false));
//=> false
console.log(question.getAnswer(0));
//=> 0
```

### [.getChoice](index.js#L186)

Get the given choice from `questions.choices`.

**Params**

* `val` **{any}**
* `returns` **{any}**

**Example**

```js
var Question = require('prompt-question');
var question = new Question('color', 'What is your favorite color?', {
  choices: ['red', 'blue', 'yellow']
});
console.log(question.getChoice('red'));
//=> Choice { name: 'red', short: 'red', value: 'red', checked: false }
```

### [.separator](index.js#L195)

Create a separator using [choices-separator](https://github.com/enquirer/choices-separator).

### [.hasDefault](index.js#L207)

Getter that returns true if a `default` value has been defined.

* `returns` **{Boolean}**: True if a default value is defined.

### [.checkbox](index.js#L229)

Getter/setter for the checkbox symbols to use.

* `returns` **{Object}**: Checkbox object with `.on`, `.off` and `.disabled` properties.

**Example**

```js
var question = new Question({
  name: 'foo',
  checkbox: {off: '[ ]', on: '[x]', disabled: 'X'}
});
// or
question.checkbox = {off: '[ ]', on: '[x]', disabled: 'X'};
```

### [.choices](index.js#L253)

Getter/setter for getting and setting choices (if applicable).

* `returns` **{Object}**: Returns an instance of [prompt-choices](https://github.com/enquirer/prompt-choices)

**Example**

```js
var question = new Question();
question.choices = ['a', 'b', 'c'];
```

### [.Question.isQuestion](index.js#L288)

Static method that returns true if `question` is a valid question object.

**Params**

* `question` **{Object}**
* `returns` **{Boolean}**

**Example**

```js
console.log(Question.isQuestion('foo'));
//=> false
console.log(Question.isQuestion(new Question('What is your name?')));
//=> true
```

### [.Question.choices](index.js#L305)

Static method for creating a new `Choices` object. See [prompt-choices](https://github.com/enquirer/prompt-choices) for more details.

**Params**

* `choices` **{Array}**: Array of choices
* `returns` **{Object}**: Returns an intance of Choices.

**Example**

```js
var choices = new Question.Choices(['foo', 'bar', 'baz']);
```

### [.Question.Separator](index.js#L320)

Static method for creating a new `Separator` object. See [choices-separator](https://github.com/enquirer/choices-separator) for more details.

**Params**

* `separator` **{String}**: Optionally pass a string to use as the separator.
* `returns` **{Object}**: Returns a separator object.

**Example**

```js
new Question.Separator();
```

## Release history

### v5.0.0

* Support `.choices` as a function

### v4.0.0

* bumps [prompt-choices](https://github.com/enquirer/prompt-choices)

### v3.0.0

* bumps [prompt-choices](https://github.com/enquirer/prompt-choices)

### v2.0.0

* bumps [prompt-choices](https://github.com/enquirer/prompt-choices). A major bump was warranted due to potentially breaking changes in prompt-choices. Please see that library for more details.

## About

### Related projects

* [choices-separator](https://www.npmjs.com/package/choices-separator): Separator for choices arrays in prompts. Based on the Separator from inquirer. | [homepage](https://github.com/enquirer/choices-separator "Separator for choices arrays in prompts. Based on the Separator from inquirer.")
* [enquirer](https://www.npmjs.com/package/enquirer): Intuitive, plugin-based prompt system for node.js. | [homepage](http://enquirer.io "Intuitive, plugin-based prompt system for node.js.")
* [prompt-choices](https://www.npmjs.com/package/prompt-choices): Create an array of multiple choice objects for use in prompts. | [homepage](https://github.com/enquirer/prompt-choices "Create an array of multiple choice objects for use in prompts.")
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

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on July 08, 2017._