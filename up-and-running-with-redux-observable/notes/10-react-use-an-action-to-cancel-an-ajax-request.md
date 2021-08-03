## Use an action to cancel an Ajax request

<Timestamp start="0:25" end="0:45">

To match the functionality at this point in the lesson, we need to include `delay` as an import from `"rxjs"` and `pipe()` it into our AJAX get request:

```jsx
import { catchError, concatWith, debounceTime, delay, filter, map, of, switchMap, takeUntil, throwError } from "rxjs";
...
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

</Timestamp>

<Timestamp start="0:50" end="1:05">

The instructor moves the `delay` operator up and out of the way, so remember to `pipe()` this operator into the `ajax.getJSON()` observable.

```jsx
...
const ajaxGet = (term) =>
  term === "skull"
    ? throwError(() => new Error("Ajax failed!"))
    : ajax.getJSON(search(term)).pipe(delay(5000));
```

</Timestamp>

<Timestamp start="1:10" end="1:30">

We must import `takeUntil` from `'rxjs'` and pipe it into our `ajax` GET Observable. Then, where the instructor uses `action$.ofType`, we will pipe `ofType()` into the `action$` stream:

```jsx
const request = ajaxGet(payload).pipe(
  takeUntil(action$.pipe(
    ofType(CANCEL_SEARCH)
  )),
  map(receiveBeers),
  catchError((err) => {
    return of(searchBeersError(err));
  })
);
```

</Timestamp>

<Timestamp start="3:00" end="3:30">

To match the functionality described at this point in the lesson, we should replace `merge` with the `mergeWith` operator and pipe it. Furthermore, we should pipe `ofType()` into each `action$` stream. An example of this is shown below:

```jsx
switchMap(({ payload }) => {
    const loading = of(searchBeersLoading(true));

    const cancel$ = action$.pipe(ofType(CANCEL_SEARCH))
    const navigate$ = action$.pipe(ofType(NAVIGATE))
    const blockers = cancel$.pipe(mergeWith(navigate$));

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

</Timestamp>

The RxJS `takeUntil()` operator will accept elements from the stream before it only until the stream provided as an argument produces a value. Once the stream provided as an argument produces a value, `takeUntil()` will unsubscribe from the previous Observable. This is useful for cancelling an AJAX request.

`takeUntil()` handles the subscription and unsubscription for us so that we can avoid an imperative style of programming. The operator will also handle the subscription to and unsubscription from the stream provided as an argument.

The following resources provide information about updates/deprecations to RxJS that are relevant to this lesson:

-   https://rxjs.dev/guide/operators
-   https://rxjs.dev/api/operators/mergeWith
-   https://redux-observable.js.org/docs/basics/Epics.html
