# prompt-choices [![NPM version](https://img.shields.io/npm/v/prompt-choices.svg?style=flat)](https://www.npmjs.com/package/prompt-choices) [![NPM monthly downloads](https://img.shields.io/npm/dm/prompt-choices.svg?style=flat)](https://npmjs.org/package/prompt-choices) [![NPM total downloads](https://img.shields.io/npm/dt/prompt-choices.svg?style=flat)](https://npmjs.org/package/prompt-choices) [![Linux Build Status](https://img.shields.io/travis/enquirer/prompt-choices.svg?style=flat&label=Travis)](https://travis-ci.org/enquirer/prompt-choices)

> Create an array of multiple choice objects for use in prompts.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save prompt-choices
```

## Usage

```js
var Choices = require('prompt-choices');
var choices = new Choices(['foo', 'bar', 'baz']);
```

## API

### [Choices](index.js#L21)

Create a new `Choices` collection.

**Params**

* `choices` **{Array}**: One or more `choice` strings or objects.

**Example**

```js
const choices = new Choices(['foo', 'bar', 'baz']);
const choices = new Choices([{name: 'foo'}, {name: 'bar'}, {name: 'baz'}]);
```

### [.render](index.js#L52)

Render choices.

**Params**

* `position` **{Number}**: Cursor position
* `options` **{Object}**
* `returns` **{String}**

### [.renderChoice](index.js#L90)

Render a specific choice. This can be overridden in prompts.

**Params**

* `choice` **{Object}**
* `position` **{Number}**
* `options` **{Object}**
* `returns` **{String}**: Returns the line to render.

**Example**

```js
choices.render = function(choice, position, options) {
  // do custom logic
  return '';
};
```

### [.choice](index.js#L105)

Create a new `Choice` object.

**Params**

* `val` **{String|Object}**
* `returns` **{Object}**: Returns a choice object.

**Example**

```js
choices.choice('blue');
```

### [.toChoice](index.js#L123)

Returns a normalized `choice` object.

**Params**

* `choice` **{Object|String}**
* `returns` **{Object}**

**Example**

```js
choices.toChoice('foo');
choices.toChoice({name: 'foo'});
```

### [.addChoice](index.js#L143)

Add a normalized `choice` object to the `choices` array.

**Params**

* `choice` **{string|Object}**: One or more choices to add.

**Example**

```js
choices.addChoice(['foo', 'bar', 'baz']);
```

### [.addChoices](index.js#L173)

Add an array of normalized `choice` objects to the `choices` array. This method is called in the constructor, but it can also be used to add choices after instantiation.

**Params**

* `choices` **{Array|Object}**: One or more choices to add.

**Example**

```js
choices.addChoices(['foo', 'bar', 'baz']);
```

### [.toGroups](index.js#L206)

Create choice "groups" from the given choices object. ![choice groups](docs/prompt-groups.gif).

**Params**

* `choices` **{Object}**: (required) The value of each object must be an array of choices (strings or objects).
* `returns` **{Array}**: Returns an array of normalized choice objects.

**Example**

```js
choices.toGroups({
  foo: ['a', 'b', 'c'],
  bar: ['d', 'e', 'f']
});
```

### [.separator](index.js#L282)

Create a new `Separator` object. See [choices-separator](https://github.com/enquirer/choices-separator) for more details.

**Params**

* `separator` **{String}**: Optionally pass a string to use as the separator.
* `returns` **{Object}**: Returns a separator object.

**Example**

```js
choices.separator();
```

### [.hasChoice](index.js#L298)

Returns true if a choice exists.

**Params**

* `val` **{Number}**: The index or key of the choice to check for.
* `returns` **{Boolean}**

**Example**

```js
choices.hasChoice(1);
choices.hasChoice('foo');
```

### [.getChoice](index.js#L314)

Get a non-separator choice from the collection.

**Params**

* `idx` **{Number}**: The selected choice index
* `returns` **{Object|undefined}**: Return the matched choice object or undefined

**Example**

```js
choices.getChoice(1);
choices.getChoice('foo');
```

### [.getIndex](index.js#L341)

Get the index of a non-separator choice from the collection.

**Params**

* `key` **{String}**: The key of the choice to get
* `returns` **{Number}**: Index of the choice or `-1`;

**Example**

```js
const choices = new Choices(['foo', 'bar', 'baz']);
console.log(choices.getIndex('foo')); //=> 0
console.log(choices.getIndex('baz')); //=> 2
console.log(choices.getIndex('bar')); //=> 1
console.log(choices.getIndex('qux')); //=> -1
```

### [.get](index.js#L365)

Get the choice at the specified index.

**Params**

* `key` **{Number|String}**: The name or index of the object to get
* `returns` **{Object}**: Returns the specified choice

**Example**

```js
const choice = choices.get(1);
//=> {name: 'foo'}
const choice = choices.get(1, 'name');
//=> 'foo'
```

### [.clear](index.js#L389)

Clear all choices from the instance. This is useful when you need to update the indices of choices without re-instantiating.

**Example**

```js
choices.clear();
```

### [.key](index.js#L403)

Return the `.key` property from the choice at the given index.

**Params**

* `key` **{String}**: Property name to use for plucking objects.
* `returns` **{Array}**: Plucked objects

### [.check](index.js#L417)

Check the choice at the given `idx`.

**Params**

* `val` **{Number|Array}**: The key(s) or index(s) of the choice(s) to check.

**Example**

```js
choices.check(1);
```

### [.uncheck](index.js#L442)

Disable the choice at the given `idx`.

**Params**

* `idx` **{Number}**: The index of the choice to enable.

**Example**

```js
choices.uncheck(1);
```

### [.isChecked](index.js#L473)

Returns true if a choice is checked.

**Params**

* `name` **{String|Number}**: Name or index of the choice.
* `returns` **{Boolean}**

**Example**

```js
const choices = new Choices(['foo', 'bar', 'baz']);
console.log(choices.isChecked('foo'));
//=> false
choices.check('foo');
console.log(choices.isChecked('foo'));
//=> true
```

### [.toggle](index.js#L501)

Toggle the choice at the given `idx`.

**Params**

* `idx` **{Number}**: The index of the choice to toggle.

**Example**

```js
choices.toggle(1);
// radio mode
choices.toggle(1, true);
```

### [.swap](index.js#L609)

Swap two choices in the choices array.

**Params**

* `a` **{String|Number}**
* `b` **{String|Number}**
* `returns` **{Object}**: Returns the `Choices` instance

### [.where](index.js#L625)

Return choice values for choices that return truthy based
on the given `val`.

**Params**

* `val` **{Array|Object|Function|String|RegExp}**
* `returns` **{Array}**: Matching choices or empty array

### [.isItem](index.js#L673)

Returns true if the given `choice` is a valid choice item, and
not a "group" or "radio" choice.

**Params**

* `key` **{String}**: Property name to use for plucking objects.
* `returns` **{Array}**: Plucked objects

### [.isValidIndex](index.js#L688)

Returns true if the given `index` is a valid choice index.

**Params**

* `key` **{String}**: Property name to use for plucking objects.
* `returns` **{Array}**: Plucked objects

### [.pluck](index.js#L699)

Pluck an object with the specified key from the choices collection.

**Params**

* `key` **{String}**: Property name to use for plucking objects.
* `returns` **{Array}**: Plucked objects

### [.default](index.js#L735)

Getter for getting the default choice.

### [.checked](index.js#L762)

Getter for getting the checked choices from the collection.

### [.length](index.js#L804)

Getter for getting the length of the collection.

### [.Separator](index.js#L824)

Create a new `Separator` object. See [choices-separator](https://github.com/enquirer/choices-separator) for more details.

**Params**

* `separator` **{String}**: Optionally pass a string to use as the separator.
* `returns` **{Object}**: Returns a separator object.

**Example**

```js
new Choices.Separator();
```

### [.isChoices](index.js#L840)

Create a new `Separator` object. See [choices-separator](https://github.com/enquirer/choices-separator) for more details.

**Params**

* `choices` **{String}**: The value to test.
* `returns` **{Boolean}**: Returns true if the given value is an instance of `Choices`.

**Example**

```js
const Choices = require('prompt-choices');
const choices = new Choices(['foo']);
console.log(Choices.isChoices(choices)); //=> true
console.log(Choices.isChoices({})); //=> false
```

### [.isChoice](index.js#L859)

Create a new `Separator` object. See [choices-separator](https://github.com/enquirer/choices-separator) for more details.

**Params**

* `choice` **{String}**: The value to test.
* `returns` **{Boolean}**: Returns true if the given value is an instance of `Choice`.

**Example**

```js
const Choices = require('prompt-choices');
const choices = new Choices(['foo']);
const foo = choices.getChoice('foo');
console.log(Choices.isChoice(foo)); //=> true
console.log(Choices.isChoice({})); //=> false
```

## Release history

### v3.0.2

**Added**

* adds array support to `.isChecked`

**Fixed**

* ensures that choice groups are checked/unchecked based on group items

### v3.0.0

**Added**

* adds support for choice "groups"! This allows you to define an object of choice arrays, where each key in the object creates a choice group.

### v2.0.0

**Changed**

* renamed `Move` class to `Actions`
* renamed `choices.move` property to `choices.actions`

**Removed**

* removed `.enable` and `.disable` prototype methods from both `Choice` and `Choices`. These methods were ambiguous as they blurred the distinction between "enabling" a choice (meaning that it's "checked") versus enabling a property on a choice. If this is confusing, that's why they were removed.

**Added**

* adds `Actions` class (previously named `Move`) for managing actions on choices
* adds `.addChoice` prototype method, for adding a single choice after instantiation
* adds `.action` prototype method to `Choices`, which calls a method on the `Actions` class
* adds `.check` and `.uncheck` prototype methods (previously ambiguously named `.enable` and `.disable`)

## Attribution

Some of the code in this library was initially based on the `Choices` class in Inquirer.

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [enquirer](https://www.npmjs.com/package/enquirer): Intuitive, plugin-based prompt system for node.js. | [homepage](http://enquirer.io "Intuitive, plugin-based prompt system for node.js.")
* [prompt-base](https://www.npmjs.com/package/prompt-base): Base prompt module used for creating custom prompts. | [homepage](https://github.com/enquirer/prompt-base "Base prompt module used for creating custom prompts.")
* [prompt-checkbox](https://www.npmjs.com/package/prompt-checkbox): Multiple-choice/checkbox prompt. Can be used standalone or with a prompt system like [Enquirer]. | [homepage](https://github.com/enquirer/prompt-checkbox "Multiple-choice/checkbox prompt. Can be used standalone or with a prompt system like [Enquirer].")
* [prompt-question](https://www.npmjs.com/package/prompt-question): Question object, used by Enquirer and prompt plugins. | [homepage](https://github.com/enquirer/prompt-question "Question object, used by Enquirer and prompt plugins.")
* [prompt-radio](https://www.npmjs.com/package/prompt-radio): Radio prompt. Can be used as a standalone prompt, or as a plugin for [Enquirer]. | [homepage](https://github.com/enquirer/prompt-radio "Radio prompt. Can be used as a standalone prompt, or as a plugin for [Enquirer].")

### Author

**Jon Schlinkert**

* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)
* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on May 28, 2018._