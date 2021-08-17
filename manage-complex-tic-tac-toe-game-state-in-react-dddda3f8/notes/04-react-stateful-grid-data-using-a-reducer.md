# Notes 

<TimeStamp start="0:00" end="0:06">

The main goal of this lesson is to make our `grid` stateful and update when we clicked on cells in our game.
</TimeStamp>

<TimeStamp start="0:07" end="0:10">

We will be using React's `useReducer` hook. You can find documentation of this hook [here](https://reactjs.org/docs/hooks-reference.html#usereducer) 

</TimeStamp>

<TimeStamp start="0:11" end="0:31">

We start by creating the initial state of the component and a reducer function to accept current state and the action and return the next state. 

The code should look like this: 

```jsx
const initialState = {
    grid: newTicTacToeGrid()
}
 
const reducer = (state, action) => {
    return state
}
```

</TimeStamp>

<TimeStamp start="2:00" end="2:20">

How to make return the next state? We will make a clone of the current state and make mutations of that. With the purpose of returning an immutable state without changing the passed state. 

</TimeStamp>

<TimeStamp start="5:08" end="5:14">
 
 At this point we can see in our project that we can click values and we can see showing up in our grid. 

</TimeStamp>

