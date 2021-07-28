## Filter a stream to exclude empty values

<Timestamp start="0:37" end="0:47">

We've worked on `searchBeersEpic` throughout the past couple of lessons, so you may want to go back and see the necessary updates to the RxJS code before moving on.

</Timestamp>

<Timestamp start="0:48" end="1:10">

To summarize updates to RxJS here, we now `pipe` operators into the Observable instead of calling them as methods on the Observable. Furthermore, `ajax` is now a standalone Observable creation operator, so it no longer needs to be called as a method on `Observable`. See https://rxjs.dev/guide/operators for more information.

</Timestamp>

<Timestamp start="1:11" end="1:31">

We can see how `pipe` works with the addition of the `filter` operator:

```
import { catchError, debounceTime, filter, map, of, switchMap, throwError } from "rxjs";
...
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
```

</Timestamp>

<Timestamp start="4:40" end="4:52">

`of()` is now a standalone Observable creation operator and no longer needs to be called on an Observable.

</Timestamp>

<Timestamp start="5:00" end="5:30">

`concat()` is also now a standalone Observable creation opertaor, although it is now recommended to replace the `concat()` operator with `concatWith()` and, in this case, pipe `concatWith(request)` into the `loading` observable. These changes are demonstrated below:

```
import { catchError, concatWith, debounceTime, filter, map, of, switchMap, throwError } from "rxjs";
...
function searchBeersEpic(action$) {
  return action$.pipe(
    ofType(SEARCHED_BEERS),
    debounceTime(500),
    filter((action) => action.payload !== ""),
    switchMap(({ payload }) => {
      const loading = of(searchBeersLoading(true));
      const request = ajaxGet(payload).pipe(
        map(receiveBeers),
        catchError((err) => {
          return of(searchBeersError(err));
        })
      );
      return loading.pipe(concatWith(request));
    })
  );
```

</Timestamp>

The RxJS `filter` operator can help us bail out of an action under some condition.

The RxJS `concat` (now replaced by `concatWith()`) operator creates a higher-order Observable that "strings Observables together": the operator takes in any number of arguments and subscribes to them in sequence, each waiting for the previous to complete successfully.

The following resources provide information about updates/deprecations to RxJS that are relevant to this lesson:

-   https://rxjs.dev/guide/operators
-   https://rxjs.dev/api/operators/concatWith
-   https://rxjs.dev/api/index/function/of
