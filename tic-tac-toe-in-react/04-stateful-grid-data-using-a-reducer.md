# Notes 

<TimeStamp start="0:00" end="0:06">

The main goal of this lesson is to make our `grid` stateful and update when we clicked on cells in our game. 

</TimeStamp>

<TimeStamp start="0:07" end="0:10">

We will be using React's `useReducer` hook. You can find documentation of this hook [here] (https://reactjs.org/docs/hooks-reference.html#usereducer) 

</TimeStamp>

<TimeStamp start="0:11" end="0:31">

We start by creating the initial state of the component and a reducer function toi accept current state and the action and return the next state. 

The code should look like this: 

```js 

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
 
 At this point we can see in our project that we can click values and we can see showing uo in our grid. 

 The resulting code for this lesson is: 

```jsx

 import React from 'react'

export default function App() {
  return (
    <div>
      <header>
        <h1>Tic Tac Toe in React</h1>
      </header>
      <Game/>
    </div>
  )
}

const clone = x => JSON.parse(JSON.stringify(x))

function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper))
}

const newTicTacToeGrid = () =>
  generateGrid(3, 3, () => null)


const NEXT_TURN = {
  O: 'X', 
  X: 'O'
}

const initialState = {
  grid: newTicTacToeGrid(),
  turn: "X"

}
   
const reducer = (state, action) => {
    switch (action.type) {
      case 'CLICK': {
        const { x, y } = action.payload
        const { grid, turn }  = state

        if (state.grid[y][x]){
          return state
        }

        const nextState = clone(state)

        nextState.grid[y][x] = turn 
        nextState.turn = NEXT_TURN[turn]

        

        return nextState

      }
      default: 
      return state 
    }
}

function Game() {
    const [state, dispatch] = React.useReducer(
      reducer,
      initialState
    )
    const { grid } = state
    const handleClick = (x,y) => {
      dispatch({ type: 'CLICK', payload: { x, y } })
    } 
    return (
      <div>
        <Grid grid={grid} handleClick={handleClick} />
      </div>
    )
  }

function Grid({ grid, handleClick}) {
  return (
    <div css={{ display: 'inline-block' }}>
      <div
        css={{
          backgroundColor: '#444',
          display: 'grid',
          gridTemplateRows: `repeat(${grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
          gridGap: 2,
        }}
        >
          {grid.map((row, rowIdx)=> 
            row.map((value, colIdx) => (
              <Cell 
                key={`${colIdx}-${rowIdx}`}
                onclick={() => {
                  handleClick(colIdx, rowIdx)
                }}
                value={value}
              />
            ))
          )}     
        </div>
      </div>
    )
  }


  function Cell({onclick,  value }) {
    return (
      <div
        css={{
          backgroundColor: '#fff',
          width: 100,
          height: 100,
        }}
      >
        <button  css={{
          width='100%', 
          height='100%'
         }}
         onclick={onclick}    
         type="button">
          {value}
        </button>
      
        
        
      </div>
    )
  }
  
  ```

</TimeStamp>

