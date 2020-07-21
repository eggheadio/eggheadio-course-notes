# 11. Extend your reactive logic using observable-like proxies that delay or drop events

#### [📹 Video](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-11/src/lesson-code/TaskProgressService.js)

## Summary

- **Our app is working!** But now our manager comes in and tells us that some tasks in our app are finishing very fast, so users are seeing a short glimpse of the spooner which makes the app look glitchy.
- **Our new requirement is to wait at least 2 seconds before showing the spinner.** So without introducing any complexity into our main observable, we will create a new intermediary stream that will be a proxy between the observable that immediately tells us when to show the spinner and the one that actual shows it. **This new proxy will delay the events accordingly.**

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=0) This button here triggers a really quick task that's over in 300 milliseconds. If I click, the spinner appeared and quickly vanished. I'll do that again. Click, it appears and then vanishes. Not the best experience and it looks a bit glitchy.

### Problem Overview

![Problem Overview](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168478/transcript-images/egghead-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events-problem-overview.jpg)

- [00:13](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=13) Our virtual manager tells us that I need to change the spinner, so that instead of showing it immediately, the spinner only shows once it's been active for at least two seconds. What does this mean?

- [00:24](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=24) Well, if you imagine a timeline of two seconds and you have a really quick task that only takes 300 milliseconds, then we don't want to show it. If we have a collection of very short tasks that continuously intersect each other over a period of two seconds, then we do want to show it in that case.

### Quick Example

![Quick Example](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168489/transcript-images/egghead-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events-quick-example.jpg)

### Continuous Example

![Continuous Example](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168488/transcript-images/egghead-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events-continuous-example.jpg)

- [00:42](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=42) If it's a case where we have even a small breakage between them, we don't want to show it because we consider these two separate independent instances that were less than two seconds each. Truth is, we don't even have to think about those scenarios.

### Breakage Example

![Breakage Example](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168491/transcript-images/egghead-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events-breakage-example.jpg)

- [00:56](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=56) We've broken down our problems into very small bits. If we need to work at this level or this level or even this level, we don't even have to think about concepts down here, such as tasks starting or ending. I'll create a new floor.

- [01:10](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=70) The moment the spinner becomes active to waiting for two seconds before showing it, but cancel if it becomes inactive again in the meantime. The only inputs to this, the only information that we need to solve the problem are these two. When does the loader become active and when does the loader become inactive?

### Obstruction Levels - New Floor

![Obstruction Levels - New Floor](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168504/transcript-images/egghead-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events-new-floor.jpg)

- [01:29](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=89) What's going to happen is now, this will be the answer we need for this question, when does the spinner need to show? Let's go to our code. I'll move right below the layer where we declared these two and I'll add a new comment. I'll copy our breakdown of the requirement.

### TaskProgressService.js

```js
const shouldShowSpinner = currentLoadCount.pipe(
  pairwise(),
  filter(([prevCount, currCount]) => prevCount === 0 && currCount === 1))
);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

/*
The moment the spinner becomes active...
  Switch to waiting for 2s before showing it
  But cancel if it becomes inactive again in the meantime
*/

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

shouldShowSpinner
  .pipe(switchMap(() => showSpinner.pipe(takeUntil(shouldHideSpinner))))
  .subscribe();
```

- [01:47](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=107) First, let's rename these to be more indicative of what they actually do, `spinnerDeactivated` and `spinnerActivated`. For the new implementation of this, the moment the spinner becomes active, switch to waiting for two seconds before emitting.

```js
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

const spinnerDeactivated = currentLoadCount.pipe(
  filter(count => count === 0)
);

const spinnerActivated = currentLoadCount.pipe(
  pairwise(),
  filter(([prevCount, currCount]) => prevCount === 0 && currCount === 1))
);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

/*
The moment the spinner becomes active...
  Switch to waiting for 2s before showing it
  But cancel if it becomes inactive again in the meantime
*/

const shouldShowSpinner = spinnerActivated.pipe(
  switchMap(() => timer(2000))
)
```

- [02:05](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=125) We don't want to let the timer fire after its two seconds are up if the spinner became inactive in the meantime. I'll `takeUntil()` the spinner is deactivated. Finally, I'll need to make sure that I'm using `spinnerDeactivated` in here as well. Let's test this.

```js
const shouldShowSpinner = spinnerActivated.pipe(
  switchMap(() => timer(2000).pipe(takeUntil(spinnerDeactivated)))
);
```

- [02:21](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=141) I'll press it once, no spinner, even after two seconds. I'll press this a few times and the spinner now shows and keeps showing because there have been enough of these overlapping tasks over a period of two seconds to warrant showing it.

### Overlapping Tasks

![Overlapping Tasks](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168481/transcript-images/egghead-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events-overlapping-tasks.jpg)

- [02:36]() If I go back to the first tap and trigger a really slow task, we can see that it still works. In summary, breaking down our problems previously helped us easily find a spot for our new requirement.

### Really Slow Task

![Really Slow Task](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168478/transcript-images/egghead-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events-really-slow-task.jpg)

- [02:52](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=156) It had two clear inputs that were already answered by these questions and it had a very clear output to our top-level requirement. All of that translated perfectly into our code as well.

- [03:03](https://egghead.io/lessons/rxjs-extend-your-reactive-logic-using-observable-like-proxies-that-delay-or-drop-events#t=183) Because we created well-encapsulated building blocks, we could simply declare another well-defined building block and insert it kind of like a proxy between these sources (`spinnerDeactivated/spinnerActivated`) and our top-level consumer (`shouldShowSpinner`). Our proxy simply responds to events from this (`spinnerActivated`), delaying them as necessary and fires them to the next block on the chain.

## Personal Take

### **What if our async call is too quick to show the spinner?**

- If an async call resolves too quickly the action of showing the spinner will appear as a glitch
- We should only show the spinner once it's been active for at least 2 seconds... but how?

**New Abstraction:** When the spinner becomes active, wait for 2 seconds before showing it. BUT cancel showing it, if it becomes inactive again in the meantime.

**When does the spinner need to show?**

- Rename `shouldHideSpinner` to `spinnerDeactivated` and rename `shouldShowSpinner` to `spinnerActivated` to be more indicative of what they actually do (_replace any usage of these functions in the rest of your code!)_
- New `shouldShowSpinner` function:

  const shouldShowSpinner = spinnerActivated.pipe(
  switchMap(() => timer(2000).pipe(takeUntil(spinnerDeactivated)))
  )

- Now the spinner will wait for 2 seconds before showing, and will not show when the action is too quick to warrant it
