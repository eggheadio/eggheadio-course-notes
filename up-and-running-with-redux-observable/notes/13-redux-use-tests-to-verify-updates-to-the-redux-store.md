## Use tests to verify updates to the Redux store

<Timestamp start="0:00" end="0:30">
    
With new versions of RxJS, tests should look a little different. Also, assertions that should have been failing were passing. To fix this, I had to include and call the `done` argument in the test. (see https://stackoverflow.com/a/51640742). The working test is given below (some unchanged code/imports omitted):

```jsx
import { of, toArray } from "rxjs";
...
it("should perform a search", function (done) {
  const action$ = of(searchBeers("shane"));
  const deps = {
    ajax: {
      getJSON: () => of([{ name: "shane" }]),
    },
  };
  const output$ = searchBeersEpic(action$, null, deps);
  output$.pipe(toArray()).subscribe((actions) => {
    // assertions
    done(); // include so that tests fail when they should
  });
});
```

</Timestamp>

<Timestamp start="0:31" end="1:05">

Middleware setup has changed some in newer versions of redux-observable. We need to create the Epic middleware, create the store and apply that middleware, then run the middleware with the `rootEpic`. So, our `configureStore()` function is going to look slightly different than what is presented in the lesson (some unchanged imports omitted):

```jsx
import { ajax } from "rxjs/ajax";
...
export function configureStore() {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      ajax,
    },
  });
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
}
```

</Timestamp>

<Timestamp start="4:28" end="4:45">

Make sure to remove the `done` argument here. Since we are asserting on the Redux store and not using Observables, we do not need to tell Jest when to finish the test.

</Timestamp>

We can make assertions on the final state of our Redux store by extracting the store configuration from `index.js` into its own file (`configureStore.js`). This is useful in situations where we care more about the final state of the Redux store than about the particular stream of events from the Epic.

We ran into errors testing an Epic that used the `debounceTime()` operator. This is because, when we test synchronous Redux functionality, we expect everything to be completed by the time we make an assertion. Thus, the delay from `debounceTime()` causes our test to fail.

We can use RxJS schedulers to solve the problem with `debounceTime()` in our tests. We can create a `new VirtualTimeScheduler()` and `flush()` it before our assertions are made. This executes any queued actions that it has built up as fast as possible.

The following resources provide information about updates/deprecations to RxJS that are relevant to this lesson:

-   https://stackoverflow.com/a/51640742
-   https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
