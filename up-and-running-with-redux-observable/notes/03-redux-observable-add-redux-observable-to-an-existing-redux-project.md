## 03. Add redux-observable to an existing Redux project

<Timestamp start="0:30" end="1:30">
    
As of redux-observable 1.0.0, we no longer provide rootEpic to createEpicMiddleware. Instead, we call `epicMiddleware.run(rootEpic)` after creating our store with it. Our middleware setup should look as follows:

```
import { applyMiddleware, createStore } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { rootEpic } from "./epics"

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
```

See https://redux-observable.js.org/MIGRATION.html for more information.

</Timestamp>

<Timestamp start="1:40" end="4:50">

RxJS Operators are now piped to Observables using the `Observable.pipe(operator1, operator2, ...)` syntax. This means that we need to import each RxJS operator separately from `rxjs/operators`. Also, with pipeable operators, `do()` is replaced with `tap()` (see https://www.learnrxjs.io/learn-rxjs/operators/utility/do). Thus, to match the functionality demonstrated in the lesson our `epics/index.js` should look like

```
import { tap, ignoreElements, filter } from "rxjs/operators"
import { combineEpics } from "redux-observable"
import { LOAD_STORIES } from "../actions"

function loadStoriesEpic(action$) {
    return action$.pipe(
        filter((action) => action.type === LOAD_STORIES),
        tap((action) => console.log(action)),
        ignoreElements()
    )
}

export const rootEpic = combineEpics(loadStoriesEpic);
```

See https://rxjs.dev/guide/operators for more information.

</Timestamp>

<Timestamp start="4:51" end="5:20">

Instead of calling `ofType()` on the `action$` observable as is done in the lesson, we want to import `ofType` from "redux-observable" and `pipe` it into `action$`:

```
import { tap, ignoreElements} from "rxjs/operators"
import { combineEpics, ofType } from "redux-observable"
import { LOAD_STORIES } from "../actions"

function loadStoriesEpic(action$) {
    return action$.pipe(
        ofType(LOAD_STORIES),
        tap((action) => console.log(action)),
        ignoreElements()
    )
}

export const rootEpic = combineEpics(loadStoriesEpic);
```

</Timestamp>

<Timestamp start="5:30" end="6:49">
    
With the previously noted changes to RxJS operators, we now must use the `pipe()` syntax to pipe the `ofType()` and `switchMap()` operators to `action$`. Furthermore, `of()` is now a standalone function that returns an Observable, and we must again use `pipe()` to pipe `delay` to that Observable. Our `epics/index.js` should now look like

```
import { of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { clear, LOAD_STORIES } from "../actions";
function loadStoriesEpic(action$) {
  return action$.pipe(
    ofType(LOAD_STORIES),
    switchMap(() => {
      return of(clear()).pipe(delay(2000));
    })
  );
}
export const rootEpic = combineEpics(loadStoriesEpic);
```

See https://rxjs.dev/guide/operators for more information.

</Timestamp>

An Epic is a function that takes in a stream of actions and returns a stream of actions. You will end up with many Epics in your application: one defined for each action in the Redux store that you want to react to.

`createStore()` from Redux takes in a second argument that allows us to apply middleware. Import `applyMiddleware` from Redux, and specify the middleware with

`const store = createStore(reducer, applyMiddleware(epicMiddleware))`

`combineEpics()` from redux-observable allows us to register multiple functions

Everytime the LOAD_STORIES action has been processed by the Redux store, we will receive that action in our Epic stream.
