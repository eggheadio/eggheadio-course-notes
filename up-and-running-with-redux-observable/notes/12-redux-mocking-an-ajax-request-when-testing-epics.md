## Mocking an ajax request when testing epics

<Timestamp start="0:00" end="0:44">

Our `searchBeersEpic()` looks a lot different with the changes made in newer versions of RxJS. Below is an implementation of the functionality demonstrated in the lesson on newer versions of RxJS and redux-observable.

```
import { combineEpics, ofType } from "redux-observable";
import {
  catchError,
  concatWith,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  takeUntil,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  receiveBeers,
  searchBeersError,
  searchBeersLoading,
  SEARCHED_BEERS,
  CANCEL_SEARCH,
} from "../actions";
const beers = `https://api.punkapi.com/v2/beers`;
const search = (term) => `${beers}?beer_name=${encodeURIComponent(term)}`;
export function searchBeersEpic(action$) {
  return action$.pipe(
    ofType(SEARCHED_BEERS),
    debounceTime(500),
    filter((action) => action.payload !== ""),
    switchMap(({ payload }) => {
      // loading state in UI
      const loading = of(searchBeersLoading(true));
      // external API call
      const request = ajax.getJSON(search(payload)).pipe(
        takeUntil(action$.pipe(ofType(CANCEL_SEARCH))),
        map(receiveBeers),
        catchError((err) => {
          return of(searchBeersError(err));
        })
      );
      return loading.pipe(concatWith(request));
    })
  );
}
export const rootEpic = combineEpics(searchBeersEpic);
```

</Timestamp>

<Timestamp start="0:45" end="2:00">

As mentioned in the last lesson, `ActionsObservable` has been removed from redux-observable because the introduction of pipeable operators in RxJS removed the need for Observables to have access to an `ofType()` method. Furthermore, `of()` is now a standalone Observable creation operator and does not need to be called on an Observable. Thus, we can create our `action$` stream as follows:

`const action$ = of(searchBeers("shane"))`

See https://redux-observable.js.org/CHANGELOG.html#200-alpha0-2019-11-14 and https://rxjs.dev/api/index/function/of for more information.

</Timestamp>

<Timestamp start="2:01" end="2:25">

Only received one `console.log` at this step: `{ type: 'SEARCHED_BEERS_LOADING', payload: true }`

</Timestamp>

<Timestamp start="3:35" end="4:40">

Again, because `of()` is now a standalone Observable creation operator, we do not need to call it on an Observable. Our test should look like:

```
import { of } from "rxjs";
import { searchBeersEpic } from ".";
import { searchBeers } from "../actions";
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

<Timestamp start="5:12" end="6:07">

We'll want to pipe `toArray()` into `output$`. Also, as mentioned in the prior lesson, I found that these tests would pass regardless of the assertions made. Passing in a `done` argument for the test and calling it at the end of the assertions fixed this issue (see https://stackoverflow.com/a/51640742). Now, the test passes almost immediately if the assertions hold and times out if the assertions are defied. Our working test should look like:

```
import { of, toArray } from "rxjs";
import { searchBeersEpic } from ".";
import {
  RECEIVED_BEERS,
  searchBeers,
  SEARCHED_BEERS_LOADING,
} from "../actions";
it("should perform a search", function (done) {
  const action$ = of(searchBeers("shane"));
  const deps = {
    ajax: {
      getJSON: () => of([{ name: "shane" }]),
    },
  };
  const output$ = searchBeersEpic(action$, null, deps);
  output$.pipe(toArray()).subscribe((actions) => {
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(SEARCHED_BEERS_LOADING);
    expect(actions[1].type).toBe(RECEIVED_BEERS);
    done();
  });
});
```

</Timestamp>

<Timestamp start="6:26" end="7:30">

Middleware setup for redux-observable has changed a little bit in newer versions. Here is how it looks to include dependencies in our middleware on newer versions of redux-observable.

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

See https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html and https://rxjs.dev/api/ajax/ajax for more information.

</Timestamp>

We can mock what comes back from the network via an API call in our tests. This is a great technique if example data is accessible.

We can include dependencies when we create our Epic middleware. Every Epic that is registered to the `rootEpic` running on the middleware will have access to those dependencies as a third argument.
