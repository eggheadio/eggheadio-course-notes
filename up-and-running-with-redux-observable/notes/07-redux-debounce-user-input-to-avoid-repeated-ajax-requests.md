## Debounce user input to avoid repeated Ajax requests

<Timestamp start="3:40" end="4:10">
    
The RxJS `ajax` operator is now standalone and does not need to be called on an Observable. We need to `import { ajax } from "rxjs/ajax"` and change the name and initialization of the `const ajax` variable to something like the following:

`const ajaxGet = (term) => ajax.getJSON(search(term))`

Now, when the instructor refers to the `ajax` variable, we should use the `ajaxGet` variable

</Timestamp>

<Timestamp start="4:15" end="4:50">
    
With newer versions of RxJS, we'll want to `pipe` these operators into the Observables. Here is a working implementation of that (some unchanged code/imports omitted.

```
import { combineEpics, ofType } from "redux-observable";
import { map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
...
const ajaxGet = (term) => ajax.getJSON(search(term));
...

function searchBeersEpic(action$) {
  return action$.pipe(
    ofType(SEARCHED_BEERS),
    switchMap(({ payload }) => {
      return ajaxGet(payload).pipe(map(receiveBeers));
    })
  );
}
```

</Timestamp>

<Timestamp start="6:30" end="7:35">
    
Again, in newer versions of RxJS, we need to `pipe` operators like `debounceTime` into `action$` as follows (some unchanged code/imports omitted):

```
import { debounceTime, map, switchMap } from "rxjs";
...
return action$.pipe(
    ofType(SEARCHED_BEERS),
    debounceTime(500),
    switchMap(({ payload }) => {
      return ajaxGet(payload).pipe(map(receiveBeers));
    })
  );
```

</Timestamp>

The RxJS `switchMap` operator unsubscribes from the old AJAX request and resubscribes to the new one every time a new action is dispatched. This causes multiple requests to be made and canceled while typing. The functionality we want is to make the AJAX request only after the user has stopped typing for a short period of time.

The `debounceTime()` operator subscribes to the stream before it, and has an internal timer (of time specified) that keeps resetting while events are entering the stream. The element is only let through to the next operator when the timer has completed.

`debounceTime(500)` acts as a barrier or a gate that drops events that occur within 500 milliseconds of eachother. So, while the user is typing at a steady pace, no AJAX requests are made. A request is made only when the user stops typing for 500 milliseconds.

See https://rxjs.dev/guide/operators for more information about updates to RxJS operators.
