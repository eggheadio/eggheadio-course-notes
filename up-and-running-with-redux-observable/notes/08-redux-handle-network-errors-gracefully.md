## Handle network errors gracefully

<Timestamp start="0:00" end="0:45">
    
We wrote the code for this Epic in the last lesson. RxJS has been updated such that we now need to `pipe` operators into `action$`. Furthermore, `ajax` is now a standalone Observable creation operator. Relevant changes to the code are outlined below:

```
import { combineEpics, ofType } from "redux-observable";
import { debounceTime, map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
...
const ajaxGet = (term) => ajax.getJSON(search(term));
...

function searchBeersEpic(action$) {
  return action$.pipe(
    ofType(SEARCHED_BEERS),
    debounceTime(500),
    switchMap(({ payload }) => {
      return ajaxGet(payload).pipe(map(receiveBeers));
    })
  );
}
```

</Timestamp>

<Timestamp start="0:46" end="1:15">
    
RxJS Observables no longer have the `throw` method. Instead, we use the `throwError` Observable creation operator to throw an error. We should now have:

```
import { debounceTime, map, switchMap, throwError } from "rxjs";
...
const ajaxGet = (term) =>
  term === "skull"
    ? throwError(() => new Error("Ajax failed!"))
    : ajax.getJSON(search(term));
```

</Timestamp>

<Timestamp start="3:30" end="4:00">
    
In newer versions of RxJS, the `catch()` operator has changed to the `catchError()` operator. Furthermore, we'll want to `pipe` the `catchError()` operator into the `ajaxGet` observable. Lastly, `of()` is now a standalone Observable creation operator that no longer needs to be called on `Observable`:

</Timestamp>

<Timestamp start="4:00" end="4:15">

Omitting some unchanged imports/code, we can implement `searchBeersEpic` on newer versions of RxJS as follows:

```
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
```

</Timestamp>

We should expect anything that "talks to the outside world" (API calls, in this case) to potentially throw an error. We'll want to catch those errors by piping `catchError()` into our Observable.

The following resources provide information about updates/deprecations to RxJS that are relevant to this lesson:

-   https://rxjs.dev/guide/operators
-   https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax
-   https://rxjs.dev/api/index/function/throwError
-   https://rxjs.dev/api/operators/catchError
-   https://rxjs.dev/api/index/function/of
