## Mocking an ajax request when testing epics

<Timestamp start="0:05" end="0:35">

Our `searchBeersEpic()` looks a lot different with the updates made in newer versions of RxJS. Before viewing this lesson, you probably should follow along with lessons 7 through 10 of this course and their corresponding notes. This way, you can understand the implementation of this Epic and the updates that need to be made to the code so that it works on newer versions of RxJS.

</Timestamp>

<Timestamp start="0:45" end="1:20">

As mentioned in the last lesson, `ActionsObservable` has been removed from redux-observable with the introduction of pipeable operators in RxJS. Furthermore, `of()` is now a standalone Observable creation operator and does not need to be called on an Observable. Thus, we can create our `action$` stream as follows:

`const action$ = of(searchBeers("shane"))`

</Timestamp>

<Timestamp start="2:01" end="2:15">

Only received one `console.log` at this step: `{ type: 'SEARCHED_BEERS_LOADING', payload: true }`

</Timestamp>

<Timestamp start="3:55" end="4:25">

Again, because `of()` is now a standalone Observable creation operator, we do not need to call it on an Observable. Our test should look as follows (some unchanged code/imports omitted):

```
import { of } from "rxjs";
...
it("should perform a search", function () {
  const action$ = of(searchBeers("shane"));
  const deps = {
    ajax: {
      getJSON: () => of([{ name: "shane" }]),
    },
  };
  const output$ = searchBeersEpic(action$, null, deps);
  output$.subscribe((actions) => {
    console.log(actions);
  });
});
```

</Timestamp>

<Timestamp start="5:12" end="5:22">

We'll want to pipe `toArray()` into `output$`.

```
output$.pipe(toArray()).subscribe(...)
```

</Timestamp>

<Timestamp start="5:30" end="6:15">

As mentioned in the prior lesson, I found that these tests would pass regardless of the assertions made. Passing in a `done` argument for the test and calling it at the end of the assertions fixed this issue (see https://stackoverflow.com/a/51640742). Now, the test passes almost immediately if the assertions hold and times out if the assertions are defied. Our working test should look as follows (some unchanged code/imports omitted):

```
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
    // assertions go here
    done(); // include this so that tests fail when they should
  });
});
```

</Timestamp>

<Timestamp start="6:55" end="7:30">

Middleware setup for redux-observable has changed a little bit in newer versions. Also, `ajax` is now a standalone observable creation operator. So, we should now include dependencies in our middleware as follows:

```
import { ajax } from "rxjs/ajax";
...
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    ajax,
  },
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);
```

</Timestamp>

We can mock what comes back from the network via an API call in our tests. This is a great technique if example data is accessible.

We can include dependencies when we create our Epic middleware. Every Epic that is registered to the `rootEpic` running on the middleware will have access to those dependencies as a third argument.

The following resources provide information about updates/deprecations to RxJS that are relevant to this lesson:

-   https://redux-observable.js.org/CHANGELOG.html#200-alpha0-2019-11-14
-   https://rxjs.dev/api/index/function/of
-   https://stackoverflow.com/a/51640742
-   https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
-   https://rxjs.dev/api/ajax/ajax
