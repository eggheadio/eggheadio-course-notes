## 03. Add redux-observable to an existing Redux project

<Timestamp start="0:30" end="1:30">
    
As of redux-observable 1.0.0, we no longer provide rootEpic to createEpicMiddleware. Instead, we call `epicMiddleware.run(rootEpic)` after creating our store with it. Our middleware setup should look as follows:

```jsx
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);  
```

</Timestamp>

<Timestamp start="2:50" end="3:40">

RxJS Operators are now piped to Observables using the `Observable.pipe(operator1, operator2, ...)` syntax. This means that we need to import each RxJS operator separately from `rxjs/operators`.

```jsx
import { tap, ignoreElements } from "rxjs/operators"

function loadStoriesEpic(action$) {
    return action$.pipe(
        tap((action) => console.log(action)),
        ignoreElements()
    )
} 
```

Note also that the RxJS `do` operator has been replaced with `tap`.

</Timestamp>

<Timestamp start="4:15" end="4:50">

With pipeable operators, we now can filter the action type as follows (some imports omitted):

```jsx
import { tap, ignoreElements, filter } from "rxjs/operators"

function loadStoriesEpic(action$) {
    return action$.pipe(
        filter((action) => action.type === LOAD_STORIES),
        tap((action) => console.log(action)),
        ignoreElements()
    )
}  
```

</Timestamp>

<Timestamp start="4:51" end="5:20">

We'll want to import the `ofType` operator from "redux-observable" and pipe it into `action$` as follows (some unchanged code/imports omitted):

```jsx
import { combineEpics, ofType } from "redux-observable"

function loadStoriesEpic(action$) {
    return action$.pipe(
        ofType(LOAD_STORIES),
        tap((action) => console.log(action)),
        ignoreElements()
    )
}
```

</Timestamp>

<Timestamp start="5:30" end="6:20">
    
We should now use the `pipe()` syntax to pipe the `ofType()` and `switchMap()` operators to `action$`. Furthermore, `of()` is now a standalone function that returns an Observable, and we must again pipe the `delay` operator into that Observable. We can see these changes made in the code that follows (some unchanged code/imports omitted):

```jsx
import { of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

function loadStoriesEpic(action$) {
  return action$.pipe(
    ofType(LOAD_STORIES),
    switchMap(() => {
      return of(clear()).pipe(delay(2000));
    })
  );
}
```

</Timestamp>

An Epic is a function that takes in a stream of actions and returns a stream of actions. You will end up with many Epics in your application: one defined for each action in the Redux store that you want to react to.

`createStore()` from Redux takes in a second argument that allows us to apply middleware. Import `applyMiddleware` from Redux, and specify the middleware with

`const store = createStore(reducer, applyMiddleware(epicMiddleware))`

`combineEpics()` from redux-observable allows us to register multiple functions

Everytime the LOAD_STORIES action has been processed by the Redux store, we will receive that action in our Epic stream.

See https://rxjs.dev/guide/operators and https://www.learnrxjs.io/learn-rxjs/operators/utility/do for more information about discussed updates and deprecations in RxJS.

See https://redux-observable.js.org/MIGRATION.html for more information about discussed updates and deprecations in redux-observable.
