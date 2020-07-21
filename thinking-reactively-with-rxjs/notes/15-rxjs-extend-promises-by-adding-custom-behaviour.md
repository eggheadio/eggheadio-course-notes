# 15. Extend promises by adding custom behaviour

#### [📹 Video](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-15/src/lesson-code/TaskProgressService.js)

## Summary

- We will create a Promise wrapper, that can be used instead of normal promises, to track different tasks that we need to show the spinner for.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=0) Another common task we might want to track is a Promise. Since Promises don't have Operators, let's create a custom Promise. I'll go back to our `Extensions.js` file and paste in our use case. I'll call our new Promise `PromiseWithLoadingProgress`. It will extend the native `Promise`.

```js
/*
  new Promise(resolve => {
    setTimeout(() => {
      existingTaskCompleted();
      resolve();
    }, 300);
  });
*/

class PromiseWithLoadingProgress extends Promise {}
```

- [00:19](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=19) Unlike Observables, Promises are eager, which means that the moment they are constructed, the work they need to do will also start. We can also assume that whenever our custom Promise is constructed, a new task has started `(newTaskStarted())` as well, and we can tell our spinner service about it.

```js
class PromiseWithLoadingProgress extends Promise {
  constructor() {
    newTaskStarted();
  }
}
```

- [00:36](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=36) We assume that the Promise has completed when the resolve() function is called, but how can we possibly know when the resolve() function is called? Because it's a function that the Promise creates internally, and it sends it to us via the callback.

- [00:49](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=49) Let's see what happens when a developer creates a new Promise. They send the Promise a callback. Then the Promise invokes that callback and sends the developer a resolve and reject function, which they can use whenever they want.

- [01:03](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=63) We need to hijack that process and place our new custom spinner Promise between the developer and the real Promise. Now we'll send the callback to the real Promise, which will send us back the original resolve and reject.

- [01:17](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=77) We then need to wrap the resolve and reject that we get from the Promise with our custom spies. We'll then get a hold of the callback that the developer originally passed to us. Instead of the original resolve and reject, we're going to send back our spies.

- [01:33](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=93) Let's do the first step. Let's get the original resolve and reject from the Promise. Because we're extending from another class, the Promise class, we have access to the `super()` keyword, which will accept whatever Promises normally accept in their constructor -- a callback that will be invoked with the `originalResolve` and `originalReject`.

```js
class PromiseWithLoadingProgress extends Promise {
  constructor() {
    super((originalResolve, originalReject) => {});
    newTaskStarted();
  }
}
```

- [01:54](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=114) Now that we have access to the original resolve and original reject, let's do the second step, wrap them in our spy functions.

- [02:02](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=122) I'll create a new function, `resolveSpy`, which will accept a variable number of arguments. It will call the `originalResolve` with those same arguments. Because whenever `resolveSpy` will be called, it will mean that our Promise has resolved, we can call `taskCompleted` in it as well, which will remove our previously started task from the spinner service.

```js
class PromiseWithLoadingProgress extends Promise {
  constructor() {
    super((originalResolve, originalReject) => {
      const resolveSpy = (...args) => {
        originalResolve(...args);
      };
    });
    newTaskStarted();
  }
}
```

- [02:24](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=144) I'll also create a `rejectSpy` which, again, will get called with a variable number of arguments. We'll call the `originalReject()` to the same arguments. We'll consider a rejection a task completion as well (`existingTaskCompleted()`).

```js
class PromiseWithLoadingProgress extends Promise {
  constructor() {
    super((originalResolve, originalReject) => {
      const resolveSpy = (...args) => {
        originalResolve(...args);
      };
      const rejectSpy = (...args) => {
        originalReject(...args);
        existingTaskCompleted();
      };
    });
    newTaskStarted();
  }
}
```

- [02:36](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=156) Finally, we need to provide a way for the developer to give us the callback so we can then call it with our resolve and reject spies. When the developer calls our custom Promise, they'll pass in the callback in the constructor. I'll just accept a `callback` in our `constructor`.

```js
class PromiseWithLoadingProgress extends Promise {
  constructor(callback) {
    super((originalResolve, originalReject) => {
      const resolveSpy = (...args) => {
        originalResolve(...args);
      };
      const rejectSpy = (...args) => {
        originalReject(...args);
        existingTaskCompleted();
      };
    });
    newTaskStarted();
  }
}
```

- [02:51](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=171) We can then invoke this callback with our custom resolve and reject spies. What's going to happen now is that developers will construct a new Promise with loading progress. They'll pass in a callback. We'll receive that callback, hold on it for a second.

- [03:06](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=186) We'll then invoke the constructor of the original Promise, pass it in a callback of our own. Get the original resolve and reject from the Promise, wrap them in our custom spies, and finally invoke the callback that we got from the developer with our two spies.

- [03:21](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=201) Then, whenever the developer will call resolve, which will call our custom spy, the originalResolve will get invoked. The Promise will continue to work in the same way, and the task that originally started when the Promise was constructed will now get completed. The same thing we do with reject.

- [03:38](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=218) Now we're done. Let's use this. I'll first `export` our new Promise. I'll then go back to `FastExample.js` which is responsible for our second tab, remove all the references to the TaskProgressService, and I'll `import` our new Promise (`PromiseWithLoadingProgress`). I'll replace it here and here and get rid of these invocations as we don't need them anymore.

```js
export class PromiseWithLoadingProgress extends Promise {
  constructor(callback) {
    super((originalResolve, originalReject) => {
      const resolveSpy = (...args) => {
        originalResolve(...args);
      };
      const rejectSpy = (...args) => {
        originalReject(...args);
        existingTaskCompleted();
      };
    });
    newTaskStarted();
  }
}
```

## FastExample.js

```js
import { PromiseWithLoadingProgress } from '../lesson-code/Extensions';

const doVeryQuickWork = () => {
  new PromiseWithLoadingProgress(resolve => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
};

const doAlmostQuickWork = () => {
  new PromiseWithLoadingProgress(resolve => {
    setTimeout(() => {
      resolve();
    }, 2200);
  });
};
```

- [03:59](https://egghead.io/lessons/rxjs-extend-promises-by-adding-custom-behaviour#t=239) Now the developer can just use Promises as they normally would, but they'll get the added benefit of the underlying task being tracked with a spinner. I'll save, go back to my app, and I'm just going to launch a bunch of these. When the tasks start finishing, the spinner disappears.
