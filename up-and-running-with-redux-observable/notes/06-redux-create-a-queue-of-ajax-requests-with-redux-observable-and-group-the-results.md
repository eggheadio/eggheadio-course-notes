## 06. Create a queue of Ajax requests with redux-observable and group the results.

<Timestamp start="1:50" end="3:00">
    
As mentioned in prior lessons, updates to RxJS operators require us to change the code of our Epic to match the functionality in the lesson. The new implementation for `fetchStoriesEpic` with the `pipe()` syntax is as follows:

```
import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, switchMap, tap } from "rxjs";
import { FETCH_STORIES } from "../actions";
import { ajax } from "rxjs/ajax";

const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const url = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

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

export const rootEpic = combineEpics(fetchStoriesEpic);
```

See https://rxjs.dev/guide/operators, https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax, and https://www.learnrxjs.io/learn-rxjs/operators/utility/do for more information.

</Timestamp>

<Timestamp start="3:01" end="5:20">

The updated RxJS implementation with the `pipe()` syntax is as follows:

```
import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, map, switchMap, tap } from "rxjs";
import { FETCH_STORIES } from "../actions";
import { ajax } from "rxjs/ajax";

const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const url = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

function fetchStoriesEpic(action$) {
  return action$.pipe(
    ofType(FETCH_STORIES),
    switchMap(({ payload }) => {
      return ajax.getJSON(topStories).pipe(
        map((ids) => ids.slice(0, 5)),
        map((ids) => ids.map(url)),
        map((urls) => urls.map((url) => ajax.getJSON(url))),
        tap((x) => console.log(x)),
        ignoreElements()
      );
    })
  );
}

export const rootEpic = combineEpics(fetchStoriesEpic);
```

<Timestamp start="5:30" end="7:20">

The `forkJoin` operator from RxJS is now a standalone function and no longer needs to be called on an Observable object. The updated RxJS implementation using the `pipe()` syntax is as follows:

```
import { combineEpics, ofType } from "redux-observable";
import { forkJoin, map, mergeMap, switchMap } from "rxjs";
import { fetchStoriesFulfilledAction, FETCH_STORIES } from "../actions";
import { ajax } from "rxjs/ajax";

const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const url = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

function fetchStoriesEpic(action$) {
  return action$.pipe(
    ofType(FETCH_STORIES),
    switchMap(({ payload }) => {
      return ajax.getJSON(topStories).pipe(
        //  slice first 5 ids
        map((ids) => ids.slice(0, 5)),
        // convert ids -> urls
        map((ids) => ids.map(url)),
        // convert urls -> ajax
        map((urls) => urls.map((url) => ajax.getJSON(url))),
        // execute 5 ajax requests
        mergeMap((reqs) => forkJoin(reqs)),
        // results -> store
        map((stories) => fetchStoriesFulfilledAction(stories))
      );
    })
  );
}

export const rootEpic = combineEpics(fetchStoriesEpic);
```

</Timestamp>

RxJS and redux-observable allow us to queue up separate AJAX requests and execute them sequentially when an action is dispatched.
