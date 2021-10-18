# 16. Simplify usage of your reactive service by building an RxJS operator to manage it for you

#### [📹 Video](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-15/src/lesson-code/TaskProgressService.js)

## Summary

- While we’ve made sure to **expose our spinner service using simple, external APIs, most of the time, it will be called in the same way, from observables and promises**.
- In this lesson, we will be creating an RxJS operator that be easily plugged in to different observables to track them via the spinner.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=0) We've built our service and it works great, but has a very, very simple API, a function you can call to tell it that a task has started and one to tell it that a task is completed.

- [00:11](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=11) This is great because it opens up our service to be used in the largest amount of context with _Observables_, _Promises_, _setTimeouts_, _fetchEvents_, and other things we haven't even thought of. For the most popular use cases like _Observables_, we can provide additional extensions on top of it to make it even easier to use.

- [00:32](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=32) As right now, anytime a developer wants to track an _Observable_, it has to remember to call this right before it starts and then this right when it completes.

- [00:41](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=41) A much more idiomatic solution for an RxJS context is an _Operator_. We'd `.pipe` it to an _Observable_ and they would automatically mark a task as started whenever this is _subscribed_ to and mark it as done whenever it completes, whenever the timer fires.

### SlowExample.js

```js
const slowObservable = timer(3000).pipe(showLoadingStatus());
const verySlowObservable = timer(6000);
```

- [00:57](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=57) Let's build an _Operator_. All an _Operator_ is is a _function_ that takes a `source` Observable and returns another `Observable`. If I declare an `interval` that emits every half a second and we just take the first two values from it and then we `.subscribe`. I'll log `next:` notifications as well as completion events.

### Extensions.js

```js
function showLoadingStatus(source) {
  return new Observable();
}

interval(500).pipe(
  take(2).subscribe({
    next: x => console.log('next: ', x),
    complete: () => console.log('COMPLETED!')
  })
);
```

- [01:20](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=80) If I wanted to track this Observable, `interval`, with my newly created _Operator_, I could just add it in our `.pipe`. Now my source would just be this, but because the convention is to make these _Operators_ configurable by calling them as you pass them in the pipe, we're going to wrap our `return` in a function that returns our Operator function. I know we're not really passing anything to this, but we're just following the convention.

```js
function showLoadingStatus() {
  return source => {
    return new Observable();
  };
}

interval(500)
  .pipe(take(2), showLoadingStatus())
  .subscribe({
    next: x => console.log('next: ', x),
    complete: () => console.log('COMPLETED!')
  });
```

- [01:48](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=108) I'll now `import` our task functions from our service. If you remember from earlier, the _function_ we pass to the _Observable_ constructor will get called any time somebody _subscribes_ to this _Observable_. This is a perfect place to call our new `taskStarted` function.

```js
import {
  existingTaskCompleted,
  newTaskStarted
} from '../lesson-code/TaskProgressService';

function showLoadingStatus() {
  return source => {
    return new Observable(() => {
      // I'VE BEEN SUBSCRIBED TO
      newTaskStarted();
    });
  };
}
```

- [02:05](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=125) The second thing we want to do is we want to make sure this Operator, `showLoadingStatus()`, passes all notifications it gets from the _source_ downwards to its subscribers. To listen for notifications from the source, I'll just `subscribe` to it. Whenever somebody _subscribes_ to our returned _Observable_, we'll get a reference to that `subscriber`. Now I can just pass all the events from the _source_ down to our `subscriber`.

```js
function showLoadingStatus() {
  return source => {
    return new Observable(subscriber => {
      // I'VE BEEN SUBSCRIBED TO
      newTaskStarted();
      source.subscribe(subscriber);
    });
  };
}
```

- [02:31](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=151) Finally, we need to make sure we _unsubscribe_ from this whenever our _Observable_ gets disposed of. I'll store a reference to the subscription, `sourceSubscription`. In the disposable _function_ we learned about earlier, I'll just call `unsubscribe()` on our subscription (`sourceSubscription`).

```js
function showLoadingStatus() {
  return source => {
    return new Observable(subscriber => {
      // I'VE BEEN SUBSCRIBED TO
      newTaskStarted();
      const sourceSubscription = source.subscribe(subscriber);
      return () => {
        sourceSubscription.unsubscribe();
        existingTaskCompleted();
      };
    });
  };
}
```

- [02:46](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=166) Since we started the task in our Observable and the event that this _Observable_ is disposed of, we also want to complete the task with `existingTaskcompleted()`. Otherwise, we run the risk of the spinner staying on the screen forever. Let me just add some `console.log()` so we can see when _taskStarted_ is getting called and when _taskComplete_ is getting called. I'm also going to `import` all the RxJS tokens that we've missed.

```js
import {
  existingTaskCompleted,
  newTaskStarted
} from '../lesson-code/TaskProgressService';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

function showLoadingStatus() {
  return source => {
    return new Observable(subscriber => {
      // I'VE BEEN SUBSCRIBED TO
      newTaskStarted();
      console.log('task start...');
      const sourceSubscription = source.subscribe(subscriber);
      return () => {
        sourceSubscription.unsubscribe();
        existingTaskCompleted();
        console.log('task complete...');
      };
    });
  };
}
```

- [03:09](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=189) If I bring in the console, we can see that we correctly called _taskStarted_ whenever we _subscribed_ to it. We then get the two notifications from the interval. Because we only take the first two, we then get a complete notification.

### Correct Call Verifications

![Correct Call Verifications](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168484/transcript-images/egghead-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you-01697ee7-correct-call-verifications.jpg)

- [03:24](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=204) What's interesting is that even though we don't explicitly _unsubscribe_ from this one, we still get our _taskComplete_ invocation inside our disposal _function_. That's because whenever our _Observer_ gets a complete notification, it's going to immediately _unsubscribe_ from its source _Observable_, which is going to trigger the disposal _function_ in our _Operator_. Awesome.

- [03:48](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=228) Let me just remove the debugging statements and I'll `export` our _Operator_.

```js
export function showLoadingStatus() {
  return source => {
    return new Observable(subscriber => {
      // I'VE BEEN SUBSCRIBED TO
      newTaskStarted();
      const sourceSubscription = source.subscribe(subscriber);
      return () => {
        sourceSubscription.unsubscribe();
        existingTaskCompleted();
      };
    });
  };
}
```

Then I'll go back to `SlowExample.js`. I'll remove any reference to our _service_ and instead I'll just `import { showLoadingStatus } from "../lesson-code/Extensions"`. I'll add it to this _Observable_ as well. Finally, I'll just remove all the extra invocations to the old service.

### SlowExample.js

```js
import { showLoadingStatus } from '../lesson-code/Extensions';

const slowObservable = timer(3000).pipe(showLoadingStatus());
const verySlowObservable = timer(6000).pipe(showLoadingStatus());

const doWork = () => {
  slowObservable.subscribe();
};

const doLongWork = () => {
  verySlowObservable.subscribe();
};
```

- [04:12](https://egghead.io/lessons/rxjs-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you#t=252) If I try this out, I'll just click once on each one of these buttons. The spinner appears and as tasks are completed, eventually it's going to go away. Nice, it works. Now we have an _Operator_ that can just be _piped_ to any _Observable_ in our app and it's going to enable spinner tracking capabilities on that _Observable_.

### Polished Output

![Polished Output](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168477/transcript-images/egghead-simplify-usage-of-your-reactive-service-by-building-an-rxjs-operator-to-manage-it-for-you-01697ee7-polished-output.jpg)
