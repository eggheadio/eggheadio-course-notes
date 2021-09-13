# Manage Component State by Using The useReducer and useCallback React Hooks

[Video link](https://www.egghead.io/lessons/react-manage-component-state-by-using-the-usereducer-and-usecallback-react-hooks?pl=build-advanced-components-with-react-hooks-810906cc)

<TimeStamp start="00:30" end="00:35">

[useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) is an alternative to useState. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a dispatch method. 

</TimeStamp>

<TimeStamp start="00:40" end="00:45">

```jsx
const defaultInitialState = {
  activePageIndex: 0,
  steps: 0
}
```

</TimeStamp>

<TimeStamp start="00:55" end="01:03">

```jsx
const defaultReducer = (state, action) => {
  const { activePageIndex, steps } = state
  switch(action.type) {
    default:
    return state
  }
}
```

</TimeStamp>

<TimeStamp start="01:10" end="01:18">

```jsx
const actions = {
  NEXT_PAGE: 'NEXT_PAGE',
  PREV_PAGE: 'PREV_PAGE',
  SET_STEPS: 'SET_STEPS'
}
```

</TimeStamp>

<TimeStamp start="01:40" end="01:50">

```jsx
const defaultReducer = (state, action) => {
  const { activePageIndex, steps } = state
  switch(action.type) {
    case actions.NEXT_PAGE: 
      return {...state, activePageIndex: activePageIndex + 1 }
    case actions.PREV_PAGE:
      return {...state, activePageIndex: activePageIndex - 1 }
    case actions.SET_STEPS:
      return { ...state, steps: action.payload }
    default:
    return state
  }
}
```

</TimeStamp>

<TimeStamp start="02:00" end="02:10">

```jsx
const [ state, dispatch ] = React.useReducer(defaultReducer, defaultInitialState);
```

</TimeStamp>

<TimeStamp start="02:20" end="02:30">

```jsx
const goNextPage = () => {
  dispatch({ type: actions.NEXT_PAGE })
};
const goPrevPage = () => {
  dispatch({ type: actions.PREV_PAGE })
};
```

</TimeStamp>

<TimeStamp start="02:40" end="02:45">

```jsx
const setSteps = (n) => {
  dispatch({ type: actions. SET_STEPS, payload: n })
}
```

</TimeStamp>

<TimeStamp start="03:08" end="03:15">

[useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) passes an inline callback and an array of dependencies. `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed.

</TimeStamp>

<TimeStamp start="03:18" end="03:25">

```jsx
const [ {activePageIndex, steps } dispatch ] = React.useReducer(defaultReducer, defaultInitialState);

const setSteps = React.useCallback((n) => {
  dispatch({ type: action.SET_STEPS, payload: n })
}, [ dispatch ])
```

</TimeStamp>