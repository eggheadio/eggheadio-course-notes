## Filter a stream to exclude empty values

<Timestamp start="0:37" end="1:50">

On newer versions of RxJS, we need to use the `pipe()` syntax to pipe our operators into the Observable. The following code implements the functionality demonstrated in the lesson but on newer versions of RxJS:

```
import { combineEpics, ofType } from "redux-observable";
import {
  catchError,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  throwError,
} from "rxjs";
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
    filter((action) => action.payload !== ""),
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

See https://rxjs.dev/guide/operators

</Timestamp>

<Timestamp start="4:20" end="6:05">

With the `pipe()` syntax in newer versions of RxJS, working code will look a bit different here. Furthermore, `of()` is now a standalone Observable creation operator and no longer needs to be called on an Observable. This is also the case with `concat()`, although it is now recommended to replace the `concat()` operator with `concatWith()` and, in this case, pipe `concatWith(request)` into `loading`. The following code demonstrates all of these changes:

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
  throwError,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  receiveBeers,
  searchBeersError,
  searchBeersLoading,
  SEARCHED_BEERS,
} from "../actions";
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
    filter((action) => action.payload !== ""),
    switchMap(({ payload }) => {
      // loading state in UI
      const loading = of(searchBeersLoading(true));
      // external API call
      const request = ajaxGet(payload).pipe(
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

See https://rxjs.dev/api/operators/concatWith and https://rxjs.dev/api/index/function/of for more information

</Timestamp>

The RxJS `filter` operator can help us bail out of an action under some condition.

The RxJS `concat` (now replaced by `concatWith()`) operator creates a higher-order Observable that "strings Observables together": the operator takes in any number of arguments and subscribes to them in sequence, each waiting for the previous to complete successfully.
