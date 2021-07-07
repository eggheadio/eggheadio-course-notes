## Handle network errors gracefully

<Timestamp start="0:00" end="0:45">
    
We wrote the code for this Epic in the last lesson. To work on newer versions of RxJS, we need to use the `pipe()` syntax on Observables. Furthermore, the `ajax` function is now standalone and does not need to be called on an Observable. Working code for this Epic on the newest versions of RxJS are as follows:

```
import { combineEpics, ofType } from "redux-observable";
import { debounceTime, map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { receiveBeers, SEARCHED_BEERS } from "../actions";

const beers = `https://api.punkapi.com/v2/beers`;
const search = (term) => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajaxGet = (term) => ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$.pipe(
    ofType(SEARCHED_BEERS),
    debounceTime(500),
    switchMap(({ payload }) => {
      return ajaxGet(payload).pipe(map(receiveBeers));
    })
  );
}

export const rootEpic = combineEpics(searchBeersEpic);
```

See https://rxjs.dev/guide/operators and https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax for more information.

</Timestamp>

<Timestamp start="0:45" end="1:15">
    
RxJS Observables no longer have the `throw` method. Instead, we use the `throwError` Observable creation operator to throw an error. We should now have:

```
import { debounceTime, map, switchMap, throwError } from "rxjs";
...
const ajaxGet = (term) =>
  term === "skull"
    ? throwError(() => new Error("Ajax failed!"))
    : ajax.getJSON(search(term));
```

See https://rxjs.dev/api/index/function/throwError

</Timestamp>

<Timestamp start="3:30" end="4:15">
    
In newer versions of RxJS, the `catch()` operator has changed to the `catchError()` operator. Furthermore, we'll want to `pipe()` the `catchError()` operator into the `ajaxGet` observable. Lastly, `of()` is now a standalone Observable creation operator that no longer needs to be called on `Observable`:

```
import { combineEpics, ofType } from "redux-observable";
import { catchError, debounceTime, map, of, switchMap, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { receiveBeers, searchBeersError, SEARCHED_BEERS } from "../actions";

const beers = `https://api.punkapi.com/v2/beers`;
const search = (term) => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajaxGet = (term) =>
  term === "skull"
    ? throwError(() => new Error("Ajax failed!"))
    : ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$.pipe(
    ofType(SEARCHED_BEERS),
    debounceTime(500),
    switchMap(({ payload }) => {
      return ajaxGet(payload).pipe(
        map(receiveBeers),
        catchError((err) => {
          return of(searchBeersError(err));
        })
      );
    })
  );
}

export const rootEpic = combineEpics(searchBeersEpic);
```

See https://rxjs.dev/api/operators/catchError and https://rxjs.dev/api/index/function/of.

</Timestamp>

We should expect anything that "talks to the outside world" (API calls, in this case) to potentially throw an error. We'll want to catch those errors by piping `catchError()` into our Observable.
