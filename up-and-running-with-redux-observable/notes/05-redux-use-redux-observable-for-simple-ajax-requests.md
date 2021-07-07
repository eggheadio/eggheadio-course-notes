## Use redux-observable for simple Ajax requests

<Timestamp start="0:00" end="0:30">
    
The contents of `epics/index.js` at the start of the lesson are as follows:
```
import { combineEpics } from "redux-observable";
import { FETCH_USER, fetchUserFulfilledAction } from "../actions/index";
export const rootEpic = combineEpics();
```

</Timestamp>

<Timestamp start="4:35" end="6:13">
    
As mentioned in prior lessons, updates to RxJS operators require us to change the code of our Epic to match the functionality in the lesson. The new implementation for `fetchUserEpic` is as follows:

```
import { combineEpics, ofType } from "redux-observable";
import { map, switchMap } from "rxjs";
import { FETCH_USER, fetchUserFulfilledAction } from "../actions/index";
import { ajax } from "rxjs/ajax";
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
export const rootEpic = combineEpics(fetchUserEpic);
```

See https://rxjs.dev/guide/operators and https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax for more information.

</Timestamp>

Actions and, more specifically, action names are the glue between Redux and redux-observable, so it's helpful to define actions first.

We can fetch data from an API in redux-observable using the RxJS `ajax.getJSON()` Observable creation operator.
