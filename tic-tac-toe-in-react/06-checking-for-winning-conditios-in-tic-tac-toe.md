# Notes 

<TimeStamp start="0:02" end="0:07">

Our main goal in this lesson is to create condition to determine the winner in our game. 

</TimeStamp>

<TimeStamp start="0:44" end="0:58">

The simplest way to check the winner is to combine a simple checkThree function that will verify that a row has all the same values with a function that will operate on every row, every column, and the two diagonals.

</TimeStamp>



```jsx

The resulting code for this lesson is:
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



  function checkThree(a, b, c) {
    if (!a || !b || !c) return false
    return a === b && b === c
  }
  
  // ES2019 Array.prototype.flat() could be used instead
  const flatten = arr =>
    arr.reduce((acc, cur) => [...acc, ...cur], [])
  
  function checkForWin(flatGrid) {
    const [nw, n, ne, w, c, e, sw, s, se] = flatGrid
  
    return (
      checkThree(nw, n, ne) ||
      checkThree(w, c, e) ||
      checkThree(sw, s, se) ||
      checkThree(nw, w, sw) ||
      checkThree(n, c, s) ||
      checkThree(ne, e, se) ||
      checkThree(nw, c, se) ||
      checkThree(ne, c, sw)
    )
  }
  


const NEXT_TURN = {
  O: 'X', 
  X: 'O'
}

const getInitialState = () => ({
  grid: newTicTacToeGrid(),
  status: 'in progress',
  turn: "X"

})
   
const reducer = (state, action) => {
    switch (action.type) {
      case 'RESET':
        return getInitialState()

      case 'CLICK': {
        const { x, y } = action.payload
        const { grid, turn }  = state

        if (state.grid[y][x]){
          return state
        }

        const nextState = clone(state)

        nextState.grid[y][x] = turn 
        const flatGrid = flatten()
        if (checkForWin(flatGrid)) {
          nextState.status = 'success'
          return nextState
        }

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
      getInitialState
    )
    const { grid, status, turn } = state
    const handleClick = (x,y) => {
      dispatch({ type: 'CLICK', payload: { x, y } })
    } 

    const reset = () => {
      dispatch({ type: "RESET"})
    }

    return ( 
      <div css={{display: 'inline-block'}}> 
        <div css={{ display: "flex", justifyContent:"space-between"}}>
          <div> Next Turn </div>
          <div> { status === 'success' ? `${turn} won!` : null} </div>
          <button onclick={reset} type= "button">
            reset 
          </button>
        </div>
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