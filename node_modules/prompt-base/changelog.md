# Release history

## v4.1.0

**Changed**

- `render` is now emitted before the message is created.

## v4.0.2

**Fixed**

- don't get choices until prompt is called. this ensures that choices defined as a function won't be called early.

## v4.0.0

**Changed**

- no longer throws an error when question name is undefined

**Added**

- adds support for defining `prompt.question.default` as a function
- adds support for defining `prompt.question.choices` as a function

## v3.0.0

**Added**

- adds initial support for `prompt.context`, an object that can be passed around at runtime to simplify rendering. Future releases will gradually improve context handling until we make a full transition to redux, or redux-like state. Throughout this process, special care will be taken to ensure that the API is the same until the transition to redux, at which time we'll fully document any API changes.

## v2.0.2

**Added**

- `.getDefault` method: to consistently get the `options.default` on any prompt type: input, list, choices etc.

## v2.0.0

**Potentially breaking changes**

- Changes how the `actions` property is initialized. It's unlikely that this will break anyone's code, since it doesn't change any of the behavior or functionality, but a major bump seemed appropriate just in case.

## v1.0.0

**Breaking changes**

- converted hard-coded prototype-methods-as-listeners to [prompt-actions][]. This makes it much easier for custom prompts to change behavior without overriding entire prototype methods.

## v0.8.2 - 2017-05-12

- 100% tests coverage
- various bugfixes and improvements in event handling
- ensures nested prompts are working correctly
- fixes `.getAnswer` to always work with `.ask` or `.run`