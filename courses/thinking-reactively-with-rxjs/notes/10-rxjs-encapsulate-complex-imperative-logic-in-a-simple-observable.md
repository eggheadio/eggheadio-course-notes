# 10. Encapsulate complex imperative logic in a simple observable

#### [📹 Video](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson10/src/lesson-code/TaskProgressService.js)

## Summary

- **Two very important features** of the Observable primitive is that they can be **activated by subscribing to them and disposed off** when we are not interested in them anymore. All good observables **need to clean up after themselves when they are disposed off**.
- We took advantage of this when we wrote the observable that switches to showing the loader when the count is positive, and stops listening to it when the count is zero.
- In this lesson, we will learn **how to encapsulate all the complex imperative logic for showing and hiding the spinner**, inside a simple observable that can be plugged into any stream.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=0) Let's finally display the spinner. I'll `import` the _function_ `initLoadingSpinner` from this service. The implementation of this doesn't really matter. Imagine we're using an NPM library that shows spinners.

### TaskProgressService.js

```js
import { initLoadingSpinner } from '../services/LoadingSpinnerService';
```

- [00:14](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=14) As we've seen in the previous lesson, we can't expect a lot of libraries out there to use RxJS. This case is no different. The way this specific library works is when you call the _function_ `initLoadingSpinner`, you get back a _promise_ of a spinner. When that _promise_ resolves, you get access to an instance of the spinner, on which you can call `.show()`.

```js
shouldShowSpinner
  .pipe(switchMap(() => showSpinner.pipe(takeUntil(shouldHideSpinner))))
  .subscribe();

const loadingSpinnerPromise = initLoadingSpinner();

loadingSpinnerPromise.then(spinner => spinner.show());
```

- [00:36](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=36) Let's see that in action. I'll bring in our app, save the file and we can see our spinner at the bottom. Granted, the it is always on the screen now because we've not plugged it into our logic, but it's there, we can see it.

### Application of Spinner

![Application of Spinner](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168505/transcript-images/egghead-encapsulate-complex-imperative-logic-in-a-simple-observable-application-of-spinner.jpg)

- [00:48](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=48) Once we have the instance, let's set up a `setTimeout()` after a few seconds and then call another method that's available on the spinner, which is `.hide()`. I'll save this, wait for the app to refresh, I'll see it. After a few seconds, it goes away. It works.

```js
loadingSpinnerPromise.then(spinner => {
  spinner.show();
  setTimeout(() => {
    spinner.hide();
  }, 3000);
});
```

- [01:06](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=66) This is a bit of a weird API, right? It takes a few steps to get the spinner instance and then to _show_ it and then finally, to _hide_ it. While I'm not using the exact same library, the angular loading spinner from ionic ([Ionic's Loading Spinner Docs](https://ionicframework.com/docs/api/loading)) actually exposes a `loadingController` service.

- [01:24](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=84) You can call `.crate()` on that loading controller. You can pass it some options and you have to `await` the result because it's a _promise_. When you get back the result, you can call `present()` on it.

- [01:34](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=94) It's pretty similar to our service and you might end up using something like this. The truth is you can't really know what types of APIs you'll be dealing with when using third party services. You need to be ready for anything.

- [01:46](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=106) We made the assumption that this is an _Observable_ that when switched to, it shows the spinner. When _unsubscribed_ from it, it hides the spinner. That fits in very nicely with our whole event flow in here and reads like our initial requirement.

- [02:02](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=122) We want to keep this intact and avoid polluting it with our multi step API. I'll just scroll a bit up and cut out the `showSpinner` and I'll just move it down here. Now, the _Observable_ constructor actually accepts a callback, which will be invoked anytime somebody _subscribes_ to our _Observable_.

```js
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

const showSpinner = new Observable(() => {
  //I've been subscribed to!!
});

shouldShowSpinner
  .pipe(switchMap(() => showSpinner.pipe(takeUntil(shouldHideSpinner))))
  .subscribe();

const loadingSpinnerPromise = initLoadingSpinner();

loadingSpinnerPromise.then(spinner => {
  spinner.show();
  setTimeout(() => {
    spinner.hide();
  }, 3000);
});
```

- [02:24](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=144) Let's move our code for showing the spinner in here. I'll just get rid of the hiding part. Let's try this out. I'll bring in the app again. Whenever we start a few tasks, we can see the spinner now appearing. When they go back down to zero, it's still there.

```js
const showSpinner = new Observable(() => {
  //I've been subscribed to!!
  const loadingSpinnerPromise = initLoadingSpinner();

  loadingSpinnerPromise.then(spinner => {
    spinner.show();
  });
});

shouldShowSpinner
  .pipe(switchMap(() => showSpinner.pipe(takeUntil(shouldHideSpinner))))
  .subscribe();
```

- [02:41](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=161) From this _Observable_ callback, you can optionally return another _function_ that will be called whenever the _Observable_ is unsubscribed from.

```js
const showSpinner = new Observable(() => {
  //I've been subscribed to!!
  const loadingSpinnerPromise = initLoadingSpinner();

  loadingSpinnerPromise.then(spinner => {
    spinner.show();
  });

  return () => {
    //oh no, I've been unsubscribed from!
  };
});
```

- [02:51](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=171) This is the perfect place to get an instance of the spinner again and call `.hide()` on it. Keep in mind that promises cached their values. Once this resolves and we get the spinner instance, by the time this gets called, the spinner instance will have already been cached in the _promise_. This is going to resolve instantly with the same exact instance.

```js
const showSpinner = new Observable(() => {
  //I've been subscribed to!!
  const loadingSpinnerPromise = initLoadingSpinner();

  loadingSpinnerPromise.then(spinner => {
    spinner.show();
  });

  return () => {
    //oh no, I've been unsubscribed from!
    loadingSpinnerPromise.then(spinner => {
      spinner.hide();
    });
  };
});
```

- [03:12](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=192) Let's try that again. I'll save it, I'll start a few tasks and you can see that once they start going down and they reach zero, our spinner disappears now.

- [03:23](https://egghead.io/lessons/rxjs-encapsulate-complex-imperative-logic-in-a-simple-observable#t=203) To recap, we've seen how to wrap complex JavaScript-based logic inside an observer primitive where we took full advantage of its setup and tear down mechanics. It fits in neatly within our streams that switches to it whenever it's time to show the spinner and disposes of it whenever it's time to hide it.

## Personal Take

### Display and Hide the Spinner:

- Import loading spinner.
  - (implementation doesn't matter for this. it's just a spinner we are importing.)
- `Observable` accepts a callback that will be invoked anytime the `Observable` is subscribed to
  - we put the code to show our spinner inside this callback on our `showSpinner` `Observable`
- Then we put a return inside the `Observable` callback, which will be invoked when the `observable`d is unsubscribed from
  - we put the code to hide the spinner inside this return
