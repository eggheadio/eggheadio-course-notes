## Use redux-observable for simple Ajax requests

<Timestamp start="0:10" end="0:25">
    
The contents of `epics/index.js` at this point in the lesson are as follows:

```
import { combineEpics } from "redux-observable";
import { FETCH_USER, fetchUserFulfilledAction } from "../actions/index";
export const rootEpic = combineEpics();
```

</Timestamp>

<Timestamp start="4:45" end="5:00">
    
Updates to RxJS require us `pipe` operators like `ofType` and `switchMap` into `action$`.

</Timestamp>

<Timestamp start="5:01" end="5:20">

`ajax` is now a standalone Observable creation operator. We can now use `ajax.getJSON` to make our GET request to the API.

</Timestamp>

<Timestamp start="5:30" end="6:00">

We can implement `fetchUserEpic` as follows (some unchanged code/imports omitted):

```
import { combineEpics, ofType } from "redux-observable";
import { map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
...

function fetchUserEpic(action$) {
  return action$.pipe(
    ofType(FETCH_USER),
    switchMap(({ payload }) => {
      return ajax.getJSON(`https://api.github.com/users/${payload}`).pipe(
        map((user) => {
          return fetchUserFulfilledAction(user);
        })
      );
    })
  );
}
```

</Timestamp>

Actions (more specifically, action names) are the glue between Redux and redux-observable. In this way, it's helpful to define actions first.

We can fetch data from an API in redux-observable using the RxJS `ajax.getJSON()` Observable creation operator.

See https://rxjs.dev/guide/operators and https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax for more information on relevant updates to RxJS.
