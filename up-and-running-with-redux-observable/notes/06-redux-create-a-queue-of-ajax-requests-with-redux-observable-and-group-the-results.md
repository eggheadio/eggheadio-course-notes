## 06. Create a queue of Ajax requests with redux-observable and group the results.

<Timestamp start="1:50" end="2:02">
    
Updates to RxJS require us to `pipe` operators like `switchMap` into `action$`.

</Timestamp>

<Timestamp start="2:10" end="2:25">

`ajax` is now a standalone Observable creation operator. We can now use `ajax.getJSON` to make our GET request to the API.

</Timestamp>

<Timestamp start="2:26" end="2:38">
    
The `do` operator has been replaced by `tap`, and we'll need to pipe that and the `ignoreElements()` operator into our `ajax` observable.

</Timestamp>

<Timestamp start="2:39" end="3:05">
    
We can implement the `fetchStoriesEpic` as follows (some unchanged code/imports omitted):

```jsx
import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
...

function fetchStoriesEpic(action$) {
  return action$.pipe(
    ofType(FETCH_STORIES),
    switchMap(({ payload }) => {
      return ajax.getJSON(topStories).pipe(
        tap((x) => console.log(x)),
        ignoreElements()
      );
    })
  );
}
```

</Timestamp>

<Timestamp start="3:48" end="4:00">

The instructor will use a string of `map` operators on the `ajax` Observable here. On newer versions of RxJS, we'll need to `pipe` these operators into the Observable.

</Timestamp>

<Timestamp start="4:45" end="5:05">

Again, don't call `ajax` as a method on `Observable` but as a standalone Observable creation function. Also remember to replace the instructor's usage of `do` with `tap` and to `pipe` operators into the observable.

</Timestamp>

<Timestamp start="5:29" end="5:39">

Just as with the `map` operator, we want to `pipe` the `mergeMap` operator into the `ajax` Observable.

</Timestamp>

<Timestamp start="5:40" end="6:00">

`forkJoin` has been changed in the same way that `ajax` has. Now, we can call `forkJoin` as a standalone Observable creation operator. This line, with the operator `pipe` syntax, should look as follows:

```jsx
// execute 5 ajax requests
mergeMap((reqs) => forkJoin(reqs)),
```

</Timestamp>

<Timestamp start="6:38" end="6:58">

In newer versions of RxJS, implementation of `fetchStoriesEpic` should look as follows (some unchanged code/imports omitted):

```jsx
import { combineEpics, ofType } from "redux-observable";
import { forkJoin, map, mergeMap, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
...

function fetchStoriesEpic(action$) {
  return action$.pipe(
    ofType(FETCH_STORIES),
    switchMap(({ payload }) => {
      return ajax.getJSON(topStories).pipe(
        map((ids) => ids.slice(0, 5)),
        map((ids) => ids.map(url)),
        map((urls) => urls.map((url) => ajax.getJSON(url))),
        mergeMap((reqs) => forkJoin(reqs)),
        map((stories) => fetchStoriesFulfilledAction(stories))
      );
    })
  );
}
```

</Timestamp>

RxJS and redux-observable allow us to queue up separate AJAX requests and execute them sequentially when an action is dispatched.

`forkJoin` accepts an array of Observables, calls subscribe on each of them, and groups them back together.
