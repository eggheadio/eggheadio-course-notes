# 09. Expose complex reactive code as simple function based APIs

#### [📹 Video](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-09/src/lesson-code/TaskProgressService.js)

## Summary

- Before we can test what we built, we need to go back to the empty Subjects that we used as placeholders to define when tasks start and end and actually connect them to our app.
- In addition, we will **learn how to keep our external APIs simple, and avoid making our users understand RxJS.**

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=0) Now that we solved our problem, we can go back and focus on our Observables. How do we make them emit whenever a task starts or complete? Tasks come in all shapes and sizes. It might be an _Observable_ that someone's just _Subscribed_ to and we're waiting for it to emit or it might be a `setTimeout()` or even a `fetch()` request that's been fired off to some server.

```js
/*
  timer(6000).subscribe(...)
  setTimeout(() => ..., 6000)
  fetch('someapi.com', () => ...)
*/
```

- [00:19](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=19) We need to expose the most widely applicable API possible, so that whenever a task is created or completes, we can easily tell our servers about it. The most generic API you can think of is a _function_, a simple `function` that's called `newTaskStarted`, which is going to be _exported_ from our service.

### TaskProgressService.js

```js
/*
  timer(6000).subscribe(...)
  setTimeout(() => ..., 6000)
  fetch('someapi.com', () => ...)
*/

export function newTaskStarted() {}

const taskStarts = new Observable();
```

- [00:34](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=34) All somebody needs to do to tell us that a task has started is to `import` and call this. Let's do one for tasks ending as well. How do we tell this _Observable_ to emit whenever this _function_ is called? We can just use subjects `Subject()` and they've already been imported from the top-level package.

```js
import { Observable, merge, Subject } from "rxjs";

...

/*
  timer(6000).subscribe(...)
  setTimeout(() => ..., 6000)
  fetch('someapi.com', () => ...)
*/

export function newTaskStarted() {

}

export function existingTaskCompleted() {

}
```

- [00:50](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=50) A `Subject()` is both an `Observable()` and an observer. In other words, whenever we call `.next()` on this, it will also cause the `Observable()` to emit a notification to whoever is _Subscribed_ to it. I'll just do the same for `taskCompletions` as well. Let's look at our project now.

```js
/*
  timer(6000).subscribe(...)
  setTimeout(() => ..., 6000)
  fetch('someapi.com', () => ...)
*/

export function newTaskStarted() {
  taskStarts.next();
}

export function existingTaskCompleted() {
  taskCompletions.next();
}
```

- [01:05](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=65) I have here some `components`. I'll just open up the `SlowExample.js` and also open the app to the side. These two buttons here are responsible for the two buttons on the first step. Whenever you click on the button, it _Subscribes_ to an _Observable_ that emits after three seconds or six seconds for the longer one.

### SlowExample.js Overview

![Slow Example Overview](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168508/transcript-images/egghead-expose-complex-reactive-code-as-simple-function-based-apis-slow-example-overview.jpg)

- [01:25](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=85) We have our service already _imported_ here. I'm just going to pick our two _exported functions_. We want to call this whenever one of the buttons is pressed. We want to call `existingTaskCompleted()` right in the `.subscribe()` for both of the _Observables_. Basically, we consider them completed whenever they emit.

### On Button Click Example

![On Button Click Example](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168502/transcript-images/egghead-expose-complex-reactive-code-as-simple-function-based-apis-on-button-click-example.jpg)

- [01:44](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=104) Why are we going from an _Observable_ to a _Function_, back to an _Observable_ again? Let's open up our code for the other tab. This is the `component` responsible for our second tab at the bottom. Here we're dealing with _Promises_. Because we've kept our API simple, we can now `import` our two _functions_ (`existingTaskCompleted, newTaskStarted`) again and call `newTaskStarted()` before the _Promises_ are created and `newTaskCompleted()` right before they `resolve`.

- [02:10](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=130) Now, whenever a button is clicked, it's going to tell our service that the new task has started. Whenever this `Promise` resolves after a few seconds, it's going to tell our service that a task has just completed.

### Button Reactions

![Button Reactions](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168503/transcript-images/egghead-expose-complex-reactive-code-as-simple-function-based-apis-button-reactions.jpg)

- [02:22](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=142) To recap, we've been taking advantage of RxJS to create readable streams of nicely flowing logic. We paid attention to how we create these obstructions to keep our solution maintainable and robust, but most code bases are not using RxJS.

- [02:37](https://egghead.io/lessons/rxjs-expose-complex-reactive-code-as-simple-function-based-apis#t=157) To keep our features usable in as many places as possible, we exposed two simple functions to the outside world, and we connected those function calls to the sources that trigger all of our internal reactive logic via subject.

## Personal Take

### Now we can focus on making `taskStarts` and `taskCompletions` emit.

Tasks could be:

- an `observable`
- a set timeout
- a fetch request
- etc

**To be widely applicable, we'll go generic and use a function called `newTaskStarted`**

- (and `existingTaskCompleted` for when a task is completed)
- Change each `observable` to a `Subject`
- Then, inside these functions, call the associated subject with `next()`

  - ie: `export function newTaskStarted() { taskStarts.next() }`

- Then we import these functions into our React app's "slow" component, and call the `newTaskStarted` function when the associated buttons are clicked.
- We then call `existingTaskCompleted` inside of the `subscribe` for each `observable`.
- We consider them completed whenever they emit

- Inside of our other "quick" component we are using promises. So in this case:

- call the `newTaskStarted` function right before the promise
- and call `existingTaskCompleted` when the promise resolves

### RECAP:

- took advantage of RxJS to create readable streams of logic
- paid attention to how we maintain these abstractions
- to keep features usable, we exposed two simple functions that trigger all of our internal reactive logic via subject
- then imported these functions into a React app
