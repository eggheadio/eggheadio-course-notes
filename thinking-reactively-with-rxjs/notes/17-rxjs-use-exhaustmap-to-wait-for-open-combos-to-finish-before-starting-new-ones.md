# 17. Use exhaustMap to wait for open combos to finish before starting new ones

#### [📹 Video](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-15/src/lesson-code/TaskProgressService.js)

## Summary

- In this lesson, **we'll be looking at an issue with our combo implementation**: given that we're `switchMapping` to a new inner combo each time the user presses the combo initiation key (the letter "a" in our example), if the initiation key is found anywhere in the middle of the combo, it will just cancel out any on-going inner combos.
- To fix it, we'll look at the differences between `switchMap` and `exhaustMap`and why `exhaustMap` is a much better choice for our scenario: `switchMap` disposes of any previous inner observables when it gets a new notification from the source, while `exhaustMap` waits for the inner observable to finish, before considering any new notifications from the source.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=0) But there's still a problem with our implementation. Let's change the combo to have the initiator, the letter A somewhere in the middle as well. Now to trigger the combo, we need to press the letters `'a', 's', 'a'` and finally `'f'`. I'll switch to the app. The timer starts. I press the letters A, S, A, and then F.

### EventCombo.js

```js
const comboTriggered = keyCombo(['a', 's', 'a', 'f']);
```

### Unknown Continuation

![Unknown Continuation](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168492/transcript-images/egghead-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones-unknown-continuation.jpg)

- [00:23](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=23) It keeps going. It doesn't complete even though we typed the letters in the required amount of time. Why is that? Well, this _Observable_ fires whenever the _comboInitiator_ is pressed. In our case, the _comboInitiator_ is the letter A. When A is pressed, the inner combo starts. We then press S which goes through this and it's all good.

- [00:42](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=42) Then when we press A again, this app _Observable_ fires. Because of how _switchMap_ works, it's going to immediately dispose of this inner _Observable_ and just start a brand-new combo. If we have the _comboInitiator_ anywhere else in our combo, this will never work.

- [00:58](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=58) To fix it, I'll replace our `switchMap` with an `exhaustMap`. What _exhaustMap_ does is it ignores any notifications from the source until its inner _Observable_ has completed. Now when we press the letter A, the inner combo will activate.

```js
function keyCombo(keyCombo) {
  const comboInitiator = keyCombo - [0];
  return keyPressed(comboInitiator).pipe(
    exhaustMap(() => {
      //WE ARE NOW IN COMBO MODE
      return anyKeyPresses.pipe(
        takeUntil(timer(3000)),
        takeWhile((keyPressed, index) => keyCombo[index + 1]() === keyPressed),
        skip(keyCombo.length - 2),
        take(1)
      );
    })
  );
}
```

- [01:13](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=73) Once this is active, any notifications from the source will be ignored until one of these takes ends the inner combo and we're ready to start listening for a new combo. Let's try that out. The timer starts. I'll press A, S, A and then F and it completes. Nice, it works.

### Exhaust Map Output

![Exhaust Map Output](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168495/transcript-images/egghead-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones-exhaust-map-output.jpg)

- [01:31](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=91) Let's use this to disable our spinner. I'll remove our debug element. I'll `export` the _function_ (_keyCombo()_). I'll now go back to our _TaskProgressService.js_ and `import` our `keyCombo` from our _EventCombo_ package.

```js
import { fromEvent, timer } from 'rxjs';
import {
  map,
  filter,
  takeUntil,
  takeWhile,
  skip,
  exhaustMap,
  take
} from 'rxjs/operators';

const anyKeyPresses = fromEvent(document, 'keypress').pipe(
  map(event => event.key)
);

function keyPressed(key) {
  return anyKeyPresses.pipe(filter(pressedKey => pressedKey === key));
}

export function keyCombo(keyCombo) {
  const comboInitiator = keyCombo - [0];
  return keyPressed(comboInitiator).pipe(
    exhaustMap(() => {
      return anyKeyPresses.pipe(
        takeUntil(timer(3000)),
        takeWhile((keyPressed, index) => keyCombo[index + 1]() === keyPressed),
        skip(keyCombo.length - 2),
        take(1)
      );
    })
  );
}
```

### TaskProgressService.js

```js
import { keyCombo } from './EventCombo';
```

- [01:46](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=106) I'll define a new _Observable_ called `hideSpinnerCombo`. It's going to be a `keyCombo` of the letters, `'q', 'w', 'e', 'r', 't', 'y'`. Our requirement was that we need to disable the spinner completely when the combo is triggered. It's not enough to just add it to this _takeUntil_. We need to add it right at the tail.

```js
const hideSpinnerCombo = keyCombo(['q', 'w', 'e', 'r', 't', 'y']);

shouldShowSpinner
  .pipe(switchMap(() => spinnerWithStats.pipe(takeUntil(shouldHideSpinner))))
  .subscribe();
```

- [02:07](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=127) I'll do another `takeUntil(hideSpinnerCombo)`. Whenever this is triggered, it's going to completely dispose of everything above it. Once this fires, the spinner should get disabled forever.

```js
const hideSpinnerCombo = keyCombo(['q', 'w', 'e', 'r', 't', 'y']);

shouldShowSpinner
  .pipe(
    switchMap(() => spinnerWithStats.pipe(takeUntil(shouldHideSpinner)))
    takeUntil(hideSpinnerCombo))
  .subscribe();
```

- [02:19](https://egghead.io/lessons/rxjs-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones#t=139) If I switch back to the app, I'm going to trigger a task. I'll start typing in my combo and the moment I press Y, the spinner hides. If I try to trigger more tasks, we can see that the spinner doesn't even show at all because it's been disabled.

### Disabling Spinner Output

![Disabling Spinner Output](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168485/transcript-images/egghead-use-exhaustmap-to-wait-for-open-combos-to-finish-before-starting-new-ones-disabling-spinner-output.jpg)
