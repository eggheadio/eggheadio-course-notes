# Notes

<TimeStamp start="0:02" end="0:07">

We are going to add buttons in each cell to make our cells interactive

</TimeStamp>

<TimeStamp start="0:35" end="0:58">

The resulting code for out buttons is: 

```jsx
 <button
        css={{
          fontSize: '2.5rem',
          width: '100%',
          height: '100%',
        }}
        onClick={() => {})}
        type="button"
      >

 ```
</TimeStamp>

<TimeStamp start="1:45" end="1:52">

For more information about  lifting of state and state updaters in React review the following documentation [here](https://reactjs.org/docs/lifting-state-up.html#lifting-state-up)

</TimeStamp>

<TimeStamp start="2:55" end="3:05">

So far we can see on our server that our the buttons are interactive, and if we open the console we can see tha arrays with the update information. 

The resulting code for this lesson should look like this: 

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

function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper))
}

const newTicTacToeGrid = () =>
  generateGrid(3, 3, () => null)



function Game() {
    const grid = newTicTacToeGrid()
    const handleClick = (x,y) => {
      console.log({x, y})
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



