# 08. Build an observable from a simple english requirement

#### [📹 Video](https://egghead.io/lessons/rxjs-build-an-observable-from-a-simple-english-requirement)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-08/src/lesson-code/TaskProgressService.js)

## Summary

- Having built all the event streams we need, **we can now assemble them and generate the observable equivalent of our main requirement sentence**: _“When the loader needs to show, show the loader, until it’s time to hide it”_.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-build-an-observable-from-a-simple-english-requirement#t=0) We started from some very low-level terms like tasks starting or ending. We went up our floors tackling one small problem at a time creating higher and higher-level abstractions that eventually brought us to being able to solve our top-level requirement. We now have all the pieces we need for this. Let's go and assemble it.

### Obstruction Levels Diagram

![Obstruction Levels Diagram](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168499/transcript-images/egghead-build-an-observable-from-a-simple-english-requirement-obstruction-levels-diagram.jpg)

- [00:19](https://egghead.io/lessons/rxjs-build-an-observable-from-a-simple-english-requirement#t=19) I'll add a comment for this new layer as well. When the spinner needs to show, show the spinner. Remember, we consider `showSpinner` to be an observable that when activated, shows the spinner. We're not going to worry yet about how that's going to work. When a task starts, switch to displaying the spinner until -- and I'll `pipe()` this to a take until -- until it's time to hide it.

### TaskProgressService.js

```js
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

/*
When the spinner needs to show
    → show the spinner..until it's time to hide it
*/

shouldShowSpinner.pipe(
  switchMap(() => showSpinner.pipe(takeUntil(shouldHideSpinner)))
);

export default {};
```

- [00:48](https://egghead.io/lessons/rxjs-build-an-observable-from-a-simple-english-requirement#t=48) We don't really care what or when this _Observable_ emits. This is meant to be a top-level overview of how everything is wired up. We don't really need to reuse it, but we do want to activate it. I'll just `.subscribe()` to it in here.

```js
shouldShowSpinner
  .pipe(switchMap(() => showSpinner.pipe(takeUntil(shouldHideSpinner))))
  .subscribe();
```

- [01:02](https://egghead.io/lessons/rxjs-build-an-observable-from-a-simple-english-requirement#t=62) The moment somebody _imports_ this file, this _Observable_ will be activated. Yes, it will live on for the duration of our app. We never _unsubscribe_ from it, but that's something we're OK with because we do want this to keep tracking tasks for the lifetime of our app.

- [01:16](https://egghead.io/lessons/rxjs-build-an-observable-from-a-simple-english-requirement#t=76) To recap, we've marked our low-level building blocks and we kept assembling them into more powerful building blocks, but we also made sure not to dump everything in the same stream. Instead, obstruct the obstructions that make sense on their own.

- [01:32](https://egghead.io/lessons/rxjs-build-an-observable-from-a-simple-english-requirement#t=92) Not only does this keep our RxJS code more readable, almost flowing like an English sentence, but it also allows us to reuse some of these should we need to do so later. And we will need to.

## Personal Take

### Highest Level of Abstraction Achieved! 🎉

- Now we can simply tackle our top level abstraction: showing the spinner until it's time to hide it...
- Currently, we consider `showSpinner` an `Observable` that when "activated" shows the spinner.
- _But_ we're not worrying about how it does that just yet.
- When a task starts, switch to displaying the spinner, until it's time to hide it...

  shouldShowSpinner.pipe(
  switchMap(() => showSpinner.pipe(takeUntil(shouldHideSpinner)))
  ).subscribe();
