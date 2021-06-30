# Notes

<TimeStamp start="0:00" end="0:19">

The main goal of this lesson is to add the last features of our game, so far we are able to reset and see who is the winner, however after a winner is announced you can still play. That's not ideal, let's change that! 

</TimeStamp>

<TimeStamp start="0:49" end="1:03">

The final touch that we are going to add is that instead of only checking for a win, we'll check for a draw, which means that in teh current state is impossible for someone to win. 

</TimeStamp>

The resulting code for this lesson is:

```jsx
import React from 'react'

export default function App() {
  return (
    <div>
      <header>
        <h1>Tic Tac Toe in React</h1>
      </header>
      <Game />
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

function checkForDraw(flatGrid) {
  return (
    !checkForWin(flatGrid) &&
    flatGrid.filter(Boolean).length ===
      flatGrid.length
  )
}

const NEXT_TURN = {
  O: 'X',
  X: 'O',
}

const getInitialState = () => ({
  grid: newTicTacToeGrid(),
  status: 'inProgress',
  turn: 'X',
})

const reducer = (state, action) => {
  if (
    state.status === 'success' &&
    action.type !== 'RESET'
  ) {
    return state
  }

  switch (action.type) {
    case 'RESET':
      return getInitialState()

    case 'CLICK': {
      const { x, y } = action.payload
      const { grid, turn } = state

      if (grid[y][x]) {
        return state
      }

      const nextState = clone(state)

      nextState.grid[y][x] = turn

      const flatGrid = flatten(nextState.grid)

      if (checkForWin(flatGrid)) {
        nextState.status = 'success'
        return nextState
      }

      if (checkForDraw(flatGrid)) {
        return getInitialState()
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
    getInitialState()
  )
  const { grid, status, turn } = state

  const handleClick = (x, y) => {
    dispatch({ type: 'CLICK', payload: { x, y } })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div css={{ display: 'inline-block' }}>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>Next turn: {turn}</div>
        <div>
          {status === 'success'
            ? `${turn} won!`
            : null}
        </div>
        <button onClick={reset} type="button">
          reset
        </button>
      </div>
      <Grid
        grid={grid}
        handleClick={handleClick}
      />
    </div>
  )
}

function Grid({ grid, handleClick }) {
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
        {grid.map((row, rowIdx) =>
          row.map((value, colIdx) => (
            <Cell
              key={`${colIdx}-${rowIdx}`}
              onClick={() => {
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

function Cell({ onClick, value }) {
  return (
    <div
      css={{
        backgroundColor: '#fff',
        width: 100,
        height: 100,
      }}
    >
      <button
        css={{
          fontSize: '2.5rem',
          width: '100%',
          height: '100%',
        }}
        onClick={onClick}
        type="button"
      >
        {value}
      </button>
    </div>
  )
}

```