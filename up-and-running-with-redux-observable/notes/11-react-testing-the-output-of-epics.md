## Testing the output of epics

<Timestamp start="0:00" end="0:55">
    
On newer versions of RxJS, our `fetchUserEpic()` will need to use the `pipe()` syntax. Below is an implementation of the Epic on newer versions of RxJS:

```
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

See https://rxjs.dev/guide/operators for more information.

</Timestamp>

<Timestamp start="0:56" end="1:30">
    
Now that RxJS has pipeable operators, we do not need to define an `ofType()` method on `action$`! We can simply create an Observable with the `of()` operator and set `action$` to that.

`const action$ = of({ type: "FETCH_USER", payload: "shakyshane" });`

</Timestamp>

<Timestamp start="1:33" end="2:25">

Again, now that RxJS has switched to pipeable operators, there is no need to provide an `ofType()` method on the prototype of the `action$` stream. Thus, `ActionsObservable` has been removed in favor of pipeable operators. So, on newer versions of RxJS and redux-observable, our test should look like:

```
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

<Timestamp start="2:30" end="3:26">

With newer versions of RxJS, we'll want to pipe `toArray()` into `output$`. Also, I found that this test would pass regardless of whether the assertion was true. Passing in a `done` argument for the test and calling it at the end of the assertions fixed this issue (see https://stackoverflow.com/a/51640742). Now, the test passes almost immediately if the assertions hold and times out if the assertions are defied. Our test should look like:

```
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
