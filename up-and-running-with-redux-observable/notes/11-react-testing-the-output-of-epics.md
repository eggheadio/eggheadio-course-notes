## Testing the output of epics

<Timestamp start="0:05" end="0:25">
    
On newer versions of RxJS, our `fetchUserEpic()` will need to use the `pipe()` syntax. Below is an implementation of the Epic on newer versions of RxJS:

```jsx
import { ofType } from "redux-observable";
import { map } from "rxjs";
export function fetchUserEpic(action$) {
  return action$.pipe(
    ofType("FETCH_USER"),
    map((action) => ({
      type: "FETCH_USER_FULFILLED",
      payload: {
        name: "Shane",
        user: action.payload,
      },
    }))
  );
}
```

</Timestamp>

<Timestamp start="1:15" end="1:35">

If we want to take this approach with newer versions of RxJS, then we should use `of` as a standalone Observable creation operator. That is, `of` is no longer a method of `Observable`.

</Timestamp>

<Timestamp start="1:36" end="1:51">
    
Now that RxJS has pipeable operators, we do not need an `ActionsObservable`! In fact, `ActionsObservable` has been removed completely. Now, we can simply set `action$` to an Observable created with the `of` operator.

`const action$ = of({ type: "FETCH_USER", payload: "shakyshane" });`

</Timestamp>

<Timestamp start="1:52" end="2:22">

So, on newer versions of RxJS and redux-observable, our test should look like:

```jsx
import { of } from "rxjs";
import { fetchUserEpic } from "./fetch-user-epic";
it("should return correct actions", function () {
  const action$ = of({ type: "FETCH_USER", payload: "shakyshane" });
  const output$ = fetchUserEpic(action$);
  output$.subscribe((actions) => {
    console.log(actions);
  });
});
```

See https://redux-observable.js.org/CHANGELOG.html#200-alpha0-2019-11-14 for more information.

</Timestamp>

<Timestamp start="2:30" end="2:45">

With newer versions of RxJS, we'll want to pipe `toArray()` into `output$`.

```jsx
output$.pipe(toArray()).subscribe(...)
```

</Timestamp>

<Timestamp start="2:46" end="3:26">

I found that this test would pass regardless of whether the assertion was true. Passing in a `done` argument for the test and calling it at the end of the assertions fixed this issue (see https://stackoverflow.com/a/51640742). Now, the test passes almost immediately if the assertions hold and times out otherwise. Our test should look as follows:

```jsx
import { of, toArray } from "rxjs";
import { fetchUserEpic } from "./fetch-user-epic";
it("should return correct actions", (done) => {
  const action$ = of({ type: "FETCH_USER", payload: "shakyshane" });
  const output$ = fetchUserEpic(action$);
  output$.pipe(toArray()).subscribe((actions) => {
    expect(actions.length).toBe(1);
    done();
  });
});
```

</Timestamp>

We can unit test Epics just like any other function in our application. Because we are dealing with observables, we need a way of mocking the input stream.

Since the Epic returns an observable, we can subscribe to it and assert on the actions that come out on the other end.

The following resources provide information about updates/deprecations to RxJS that are relevant to this lesson:

-   https://rxjs.dev/guide/operators
-   https://rxjs.dev/api/index/function/of
-   https://redux-observable.js.org/CHANGELOG.html#200-alpha0-2019-11-14
-   https://stackoverflow.com/a/51640742
