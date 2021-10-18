# 05. Create safe and predictable observable abstractions

#### [📹 Video](https://egghead.io/lessons/rxjs-create-safe-and-predictable-observable-abstractions)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-05/src/lesson-code/TaskProgressService.js)

## Summary

- Because we're thinking in terms of very isolated layers of abstractions, we're also **looking to build well abstracted observables** that make sense on their own. One way you could figure out if an observable can live on its own is: If I threw my initial requirement away, could this observable still be useful for something else?
- As part of building well designed abstractions, we need to assume they can be used in any context, and not just in the one we're focused on building at the moment. So we need to make them as predictable as possible to consumers.
- In this lesson, we'll **ensure that the stream we built previously guards against situations where we have more task completions than starts**, and also always gives an initial value.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-create-safe-and-predictable-observable-abstractions#t=0) Our `currentLoadCount` _Observable_ is great and useful. Anybody can subscribe to it and they'll get how many tasks are currently loading in their application. Because we can't assume who will subscribe to it, how it will be used, we need to make it work in a very predictable fashion, so it doesn't bring surprises to consumers.

- [00:18](https://egghead.io/lessons/rxjs-create-safe-and-predictable-observable-abstractions#t=18) Good abstractions are as predictable as possible. If somebody subscribes to this, they won't get anything until this (`loadVariations`) emits a value. Which is not right. We know that the count is 0 initially so might as well emit 0 and then start tracking properly as tasks begin to start and finish. This scenario is captured in our requirements, start from zero and the nice thing about RxJS is that it usually flows like an English instruction. Let me just `import` the `startWith` operator. We want to `startWith(0)` because `startWith` now gives us the initial value, we don't really need the second argument to `scan()`.

### TaskProgressService.js

```js
import { mapTo, scan, startWith } from "rxjs/operators";

...

const currentLoadCount = loadVariations.pipe(
  startWith(0),
  scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  })
)
```

- [00:57](https://egghead.io/lessons/rxjs-create-safe-and-predictable-observable-abstractions#t=57) To put that differently, if you don't give an initial value to `scan()`, it will just let the first value it gets flow through it. Any consumers to this will get 0 immediately, and this _function_ won't even get called for that initial value. Once we start getting more values after that, it will start getting called and it will start adding values to the initial one.

- [01:17](https://egghead.io/lessons/rxjs-create-safe-and-predictable-observable-abstractions#t=77) Another problem is what happens if for some reason we get way more `taskCompletions` than `taskStarts`? I don't know why that would happen, but this (`currentLoadCount`) would start going into the negative which, again, doesn't really make sense.

- [01:29](https://egghead.io/lessons/rxjs-create-safe-and-predictable-observable-abstractions#t=89) Let's extract this into a variable and say that if it's smaller than 0, return 0, otherwise, just return the new actual amount. Nice. This doesn't get into the negative. If we do get to the scenario where we get way more completions than starts, this will just keep emitting 0 over and over again which is not a huge problem.

```js
const currentLoadCount = loadVariations.pipe(
  startWith(0),
  scan((totalCurrentLoads, changeInLoads) => {
    const newLoadCount = totalCurrentLoads + changeInLoads;
    return newLoadCount < 0 ? 0 : newLoadCount;
  })
);
```

- [01:50](https://egghead.io/lessons/rxjs-create-safe-and-predictable-observable-abstractions#t=110) Again, as good abstraction builders, we want to be as predictable as possible to our consumers. I'll go up and `import` the `distinctUntilChanged` operator. I'll use it here to filter subsequent values which are equal.

```js
import { mapTo, scan, startWith, distinctUntilChanged } from "rxjs/operators";

...

const currentLoadCount = loadVariations.pipe(
  startWith(0),
  scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  }),
  distinctUntilChanged()
)
```

## Personal Take

### What happens if we get more `taskCompletions` than `taskStarts`?

_This shouldn't happen_, but we can safeguard against this anyway by changing the function to check if `newLoadCount` is `< 0` and return `0` if it is, to prevent going into the negative.

BUT then we might emit `0` over and over!

**RxJS to the rescue!**

- import `distinctUntilChanged` from `rxjs/operators`
- place this at the very end of `currentLoadCount`
- this will filter subsequent values that are equal (like repeating `0`s)
