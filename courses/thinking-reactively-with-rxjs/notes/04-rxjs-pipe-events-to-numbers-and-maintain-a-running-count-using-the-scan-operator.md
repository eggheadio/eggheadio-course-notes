# 04. Pipe events to numbers and maintain a running count using the scan operator

#### [📹 Video](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-04/src/lesson-code/TaskProgressService.js)

## Summary

- In this lesson, we will use the simple data sources we created earlier, to **create a more specialized stream** that gives us the current count of tasks that are in progress.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=0) Let's look at the first problem we have to solve. I'll paste it here so we can follow more easily. I'll use my raw initial sources that I have up here to create a more specialized `loadUp` _Observable_ that emits `1` anytime a task starts.

### TaskProgressService.js

```js
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

/*
How do we count?
  Start from zero
  When an async task starts, increase the count by 1
  When a task ends, decrease the count by 1
*/

const taskStarts = new Observable();
const taskCompletions = new Observable();
const showSpinner = new Observable();

const loadUp = taskStarts.pipe(mapTo(1));

export default {};
```

- [00:16](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=16) I'll do the same thing for a `loadDown` _Observable_ that emits a `-1` anytime a task completes. Now, we can use these two to combine them into an even more useful `loadVariations` _Observable_ that gives us `+1`'s and `-1`'s, depending on how tasks are starting and ending.

```js
import { Observable, merge } from "rxjs";

...

const loadUp = taskStarts.pipe(mapTo(1));
const loadDown = taskCompletions.pipe(mapTo(-1));

const loadVariations = merge(loadUp, loadDown);
```

- [00:36](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=36) Notice how I've imported `mapTo` from the `"rxjs/operators"` package because it's meant to be _piped_ and _merged_ because we're actually using it to create a brand new _Observable_. It's being _imported_ from the root `"rxjs"` package.

- [00:50](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=50) Let's celebrate progress. We're already in a much better position than when we started. This _Observable_ is actually all we need from now on to solve our problem. We can forget anything that we have up here.

- [01:01](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=61) I'll actually make this more obvious and use the special comment from now on to mark that we can stop worrying about anything we have above it. This helps us work in a very restricted space. My cognitive demand is much lower when I can be sure that all the context I need to keep in my head is what I have highlighted versus this whole page.

```js
const loadUp = taskStarts.pipe(mapTo(1));
const loadDown = taskCompletions.pipe(mapTo(-1));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

const loadVariations = merge(loadUp, loadDown);
```

- [01:23](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=83) Because we're pretending that we don't have access to whatever is above this, variable names are very important when we work like this. We shouldn't really have to go back up to see how all of this works. It should make sense from its name.

- [01:35](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=95) We'll consider our current problem solved, if we have this, an _Observable_ that gives us the `currentLoadCount` of tasks in our app. We'll start with our `loadVariations` _Observable_. Because we need to maintain a running count between emissions, I'm going to `pipe()` that to a `scan()`. I'll quickly go up and `import` it.

```js
import { mapTo, scan } from "rxjs/operators";

...

const loadVariations = merge(loadUp, loadDown);

const currentLoadCount = loadVariations.pipe(
  scan()
)
```

- [01:57](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=117) `scan()` has the same API as the `reduce()` array method. It accepts a _function_, which will receive two arguments, the `totalCurrentLoads` and the `changeInLoads`. Our variation that we get from here. What it's going to `return` is the previous load count (`totalCurrentLoads`) to which we will add the new change in the number of loads (`changeInLoads`).

```js
const currentLoadCount = loadVariations.pipe(
  scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  })
);
```

- [02:24](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=144) It also accepts a starting value after our _function_ and we wanted to start from zero.

```js
const currentLoadCount = loadVariations.pipe(
  scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  }, 0)
);
```

- [02:28](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=148) Just to quickly go back and recap, the moment the task starts, it will get mapped to a number one so `loadVariations` will limit to one, which will in turn increase the count by one. If a task ends, it will get mapped to a `-1`, so `loadVariations` will emit the `-1` which will decrease our count by one.

- [02:45](https://egghead.io/lessons/rxjs-pipe-events-to-numbers-and-maintain-a-running-count-using-the-scan-operator#t=165) We started from some very raw streams, and we used those to create two more specialized streams. Then we combined those to create an even more useful stream, all the way up to this. A stream that whenever somebody subscribes to it, they'll get the current number of loads in our application.

## Personal Take

### First Problem:

**How do we Count?**

Create a `loadUp` and `loadDown` `Observable` to emit 1 and -1 when tasks start or complete, using mapTo:

- `import { mapTo } from 'rxjs/operators'` , because we will be using `pipe`
- `const loadUp = taskStarts.pipe(mapTo(1))`
- `const loadDown = taskCompletions.pipe(mapTo(-1))`

import `merge` from rxjs to create a new `Observable`

- `const loadVariations = merge(loadUp, loadDown)` creates new `Observable` that combines the two

`**loadVariations` is now all we need to solve our problem!\*\*

**Cognitive demand is much lower when we only need to deal with fewer pieces of information**, and they are intelligently designed/named so that we can easily understand what they do (re: the naming convention of `loadUp`, `loadDown` and `loadVariations`.

We can consider our problem solved if: we have an `observable` that gives the `currentLoadCount` of tasks in our app. So lets make it!

```js
const currentLoadCount = loadVariations.pipe(
	scan((totalCurrentLoads, changeInLoads) => {
		return totalCurrentLoads + changeInLoads;
}, 0)

```

- `scan` should be imported from `rxjs/operators`, and accepts the same parameters as `reduce` in JS, including the starting value after the function (which is `0` here)
- We need to make `currentLoadCount` work as predictably as possible.

_Good abstractions are predicatable_

- We won't get anything until `currentLoadCount` emits something, so we need it to initially emit `0`

- To accomplish this:
  - import `startWith` from `rxjs/operators`
  - add `startWith` to our `currentLoadCount` function like this:

```js
const currentLoadCount = loadVariations.pipe(
    startWith(0);
    scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  })
```

_We can now remove our starting value `0`, and let our `startsWith(0)` flow through the `scan` function to return `0` initially_
