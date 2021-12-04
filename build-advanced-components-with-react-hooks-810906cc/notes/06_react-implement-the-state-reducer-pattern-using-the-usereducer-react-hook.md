# Implement The State Reducer Pattern Using The useReducer React Hook

[Video link](https://www.egghead.io/lessons/react-implement-the-state-reducer-pattern-using-the-usereducer-react-hook?pl=build-advanced-components-with-react-hooks-810906cc)

<TimeStamp start="00:02" end="00:07">

The [State Reducer pattern](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks) allows us to cleanly manage our state's updates based on some criteria of our (or an implementors) choosing.

</TimeStamp>

<TimeStamp start="00:20" end="00:30">

```jsx
const initialState = {
  activePageIndex: 2
}
const reducer = (state, action) => {
  if(action.type === actions.NEXT_PAGE) {
    console.log('NEXT PAGE click')
  }
  return state
}
```

</TimeStamp>

<TimeStamp start="00:33" end="00:38">

```jsx
<Wizard initialState={initialState} reducer={reducer}>
```

</TimeStamp>

<TimeStamp start="00:41" end="00:50">

```jsx
const defaultInitialState = {
  activePageIndex: 0,
  steps: 0
};
const Wizard = ({ children, reducer, initialState }) => {
  const [{ activePageIndex, steps }, dispatch] = React.useReducer(
    defaultReducer,
    initialState
  )
}
```

</TimeStamp>

<TimeStamp start="02:05" end="02:20">

```jsx
const combineReducer = (...reducers) => (state, action) => {
  return reducer.reduce((acc, nextReducer) => {
    return nextReducer(acc, action)
  }, state)
}
```

</TimeStamp>

<TimeStamp start="02:30" end="02:35">

```jsx
const Wizard = ({ children, reducer, initialState }) => {
  const [{ activePageIndex, steps }, dispatch] = React.useReducer(
    combineReducer(defaultReducer, reducer),
    initialState
  )
}
```

</TimeStamp>

<TimeStamp start="03:15" end="03:25">

```jsx
const Wizard = ({ children, reducer = defaultReducer, initialState = defaultInitialState }) => {
  const [{ activePageIndex, steps }, dispatch] = React.useReducer(
    combineReducer(defaultReducer, reducer),
    initialState
  )
}
```

</TimeStamp>

<TimeStamp start="03:50" end="03:55">

```jsx
const Wizard = ({ children, reducer = defaultReducer, initialState = {} }) => {
  const [{ activePageIndex, steps }, dispatch] = React.useReducer(
    combineReducer(defaultReducer, reducer),
    {
      ...defaultInitialState, 
      ...initialState
    }
  )
}
```

</TimeStamp>