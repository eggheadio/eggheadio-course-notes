# 12. Use combineLatest to only emit notifications when certain events have happened

#### [📹 Video](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-12/src/lesson-code/TaskProgressService.js)

## Summary

- Having just congratulated us on the very quick and bug-free turn-around of our previous work item, our manager pings us again to tell us that this time, some tasks finish very shortly after our 2 second threshold.
- So **users are still seeing the glitchy spinner behavior.** Our new requirement is that once we start showing the spinner, we need to show it for at least 2 seconds, even if there are no more tasks in the background.
- **To solve this, we will create another proxy,** this time for the hiding set of events, and use the combineLatest to wait for two events to happen before we can hide the spinner: **we actually get the instruction to hide it (no more tasks in the background) and at least 2 seconds have passed.**

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=0) But now we have a new problem. If we have a task that lasts just a bit over two seconds like this one, you'll notice there's a delay, but then the spinner quickly appears and disappears again.

### New Problem

![New Problem](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168478/transcript-images/egghead-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened-new-problem.jpg)

- [00:11](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=11) Let's try it again. It appears and then disappears quickly. We're back to square one of having a glitchy spinner. Our problem stems from the decision to hide the spinner for the first two seconds of activity and only show it after that.

### Time Diagram

![Time Diagram](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168475/transcript-images/egghead-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened-time-diagram.jpg)

- [00:27](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=27) If this segment is really small, it's going to look glitchy again. Our virtual manager comes in and tells us that once the spinner is showing, keep showing it for at least two seconds. Before jumping in to implement this, let's think about how we can reword it.

- [00:45](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=45) Once the spinner is showing, when can we hide it? Well, we need to listen for two events in parallel. Have two seconds passed since we started showing it? Check. Did we also get the signal that we have zero tasks remaining and the spinner is inactive?

### Checklist

![Checklist](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168494/transcript-images/egghead-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened-checklist.jpg)

- [01:01](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=61) It doesn't really matter in which order these become true. The spinner might get deactivated before the two seconds are up, as in the case of the problematic task we just saw. The two seconds might be reached way before we get the signal to deactivate the spinner, as in the case of a really, really long task.

- [01:18](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=78) If both of these are true, we can hide the spinner. Let's use the space we have at this level of abstraction. The new answer to the question when does the spinner need to hide will be when two events have happened, spinner became inactive and two seconds have passed.

### Obstruction Levels - Added Segment

![Added Segment](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168509/transcript-images/egghead-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened-added-segment.jpg)

- [01:35](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=95) I'll copy this to my code. I'll put it right here at this level. I'll declare `shouldHideSpinner` and I'll use the `combineLatest()` operator. `combineLatest()` waits for all of its inputs to emit before emitting for the first time. The first event I want to wait for is `spinnerDeactivated`. The second is a timer of two seconds (`timer(2000)`).

### TaskProgressService.js

```js
/*
When does the spinner need to hide?

When 2 events have happened:
  Spinner became inactive
  2 seconds have passed
*/

const shouldHideSpinner = combineLatest();
```

- [01:59](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=119) _combineLatest()_ is usually used to combine the latest emissions from its inputs and emit them as an array, but we don't need the combination capabilities. We're just using it to wait for two separate events to happen before emitting. We've seen this two-second timer before. It actually represents our flash threshold.

- [02:19](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=139) Anything flashing on the screen for less than two seconds we consider a bad experience for the user. I'll extract it out and I'll replace it here and here. Now, I just need to replace this (`shouldHideSpinner`) in our top level stream. Let's go and test this out.

```js
const flashThreshold = timer(2000);

const shouldShowSpinner = spinnerActivated.pipe(
  switchMap(() => flashThreshold.pipe(takeUntil(spinnerDeactivated)))
);

/*
When does the spinner need to hide?

When 2 events have happened:
  Spinner became inactive
  2 seconds have passed
*/

const shouldHideSpinner = combineLatest(spinnerDeactivated, flashThreshold);
```

- [02:37](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=157) If I trigger the task that takes just a bit over two seconds and please watch the count of background tasks along with the spinner at the bottom, there will be a small two second delay, the spinner shows and then it hides again. Even though the count of background tasks went to zero, the spinner was still up for the full two seconds that we wanted it to. It's not glitchy anymore.

- [02:58](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=178) Let's see that again. I'll click this, we wait for a bit, the spinner shows, tasks go to zero and then the spinner hides. This top one, which is really quick continues to work as normal. It doesn't trigger any spinners at all.

- [03:12](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=192) What's cool is that if we have a really long task like this one and again, please pay attention to both the spinner and the number of tasks we have here, the spinner will wait the obligatory two seconds and then show up. The moment the tasks go down to zero, the spinner will hide as well.

- [03:31](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=211) If we have a task that's long enough and wouldn't cause a glitch by ending too quickly, the spinner hides immediately as soon as it's deactivated.

- [03:40](https://egghead.io/lessons/rxjs-use-combinelatest-to-only-emit-notifications-when-certain-events-have-happened#t=220) To recap, we really spent some time to understand and then rejuggle our initial requirement into something that makes a bit more sense. We used _combineLatest()_ to wait for two separate events to happen. We created another proxy between events of spinner becoming deactivated (_spinnerDeactivated_) in our disposal of the spinner in the top-level stream (_shouldHideSpinner_).

## Personal Take

**But now our spinner looks glitchy when action takes slightly more than 2 seconds...**

**New Requirement:** once the spinner is showing, keep showing it for _at least_ 2 seconds

- We need to listen for 2 events in parallel...

  - has it been showing for 2 seconds?
  - have the number of active tasks reached 0?
  - if both are true, we can hide the spinner...

- New `shouldHideSpinner` function:

  const shouldHideSpinner = combineLatest(
  spinnerDeactivated,
  timer(2000)
  )

- Extract `timer(2000)` as our `flashThreshold`, or the minimum amount of time we want something to show on screen.... Replace any instance of `timer(2000)`

```js
const flashThreshold = timer(2000);

const shouldHideSpinner = combineLatest(spinnerDeactivated, flashThreshold);
```

- Spinner now hides _either_ when it has been showing for 2 seconds, _or_ when the number of tasks reaches 0 (in the case when this takes _longer than 2 seconds_)
