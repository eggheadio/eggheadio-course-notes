## Use an action to cancel an Ajax request

<Timestamp start="0:25" end="0:45">

To match the functionality at this point in the lesson, we need to include `delay` as an import from `"rxjs"` and `pipe()` it into our AJAX get request:

```
const ajaxGet = (term) =>
  term === "skull"
    ? throwError(() => new Error("Ajax failed!"))
    : ajax.getJSON(search(term));
...
const request = ajaxGet(payload).pipe(
    delay(5000),
    map(receiveBeers),
    catchError((err) => {
        return of(searchBeersError(err));
    })
);
```

See https://rxjs.dev/guide/operators for more information.

</Timestamp>

<Timestamp start="0:50" end="2:50">

The instructor moves the `delay` operator up and out of the way, so remember to `pipe()` this operator into the `ajax.getJSON()` observable. We also must pipe `takeUntil()` into our AJAX GET Observable, and pipe `ofType()` into the `action$` stream:

```
import { combineEpics, ofType } from "redux-observable";
import {
  catchError,
  concatWith,
  debounceTime,
  delay,
  filter,
  map,
  of,
  switchMap,
  takeUntil,
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
    : ajax.getJSON(search(term)).pipe(delay(5000));
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
        takeUntil(action$.pipe(
          ofType(CANCEL_SEARCH)
        )),
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

<Timestamp start="3:00" end="3:35">

To match the functionality described at this point in the lesson, we should replace `merge` with the `mergeWith` operator and pipe it. Furthermore, we should pipe `ofType()` into each `action$` stream. An example of this is shown below:

```
switchMap(({ payload }) => {
    // loading state in UI
    const loading = of(searchBeersLoading(true));

    // new implementation of merge (mergeWith) and ofType operators
    const cancel$ = action$.pipe(ofType(CANCEL_SEARCH))
    const navigate$ = action$.pipe(ofType(NAVIGATE))
    const blockers = cancel$.pipe(
        mergeWith(navigate$)
    );

    // external API call
    const request = ajaxGet(payload).pipe(
        takeUntil(blockers),
        map(receiveBeers),
        catchError((err) => {
            return of(searchBeersError(err));
        })
    );
    return loading.pipe(concatWith(request));
})
```

See https://rxjs.dev/api/operators/mergeWith about `mergeWith()` and https://redux-observable.js.org/docs/basics/Epics.html about `ofType()`

</Timestamp>

The RxJS `takeUntil()` operator will accept elements from the stream before it only until the stream provided as an argument produces a value. Once the stream provided as an argument produces a value, `takeUntil()` will unsubscribe from the previous Observable. This is useful for cancelling an AJAX request.

`takeUntil()` handles the subscription and unsubscription for us so that we can avoid an imperative style of programming. The operator will also handle the subscription to and unsubscription from the stream provided as an argument.
