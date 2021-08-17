# Notes 

# Set up the environment 

The documentation on how to set up the latest version of react can be found [here](https://reactjs.org/docs/create-a-new-react-app.html)

1. Inside of an empty directory/folder tun the following command to create a new react project `npx create-react-app tic-tac-toe` 
2. Run `cd tic-tac-toe`
3. Finally, to run your react server you could either run `npm start` or `yarn start`

Before you start looking at the lesson, you will need to do some changes in your files to be abl;e to follow along the instructor:

1. Under the `/src` folder you'll find the `App.js` file, open that file, delete all the content and add the following code: 

``` jsx
    import React from 'react'

    export default function App() {
    return (
        <div>
        <header>
            <h1>Tic Tac Toe in React</h1>
        </header>
        </div>
    )
    }
```

* Instructor does not explain how to set up the project, assuming he is working on a simple page React Project, the project does not run properly on the latest version of React. The version used in the course is React 16.04* *Refer to notes for second lesson for more information about this matter*

* If you want to just clone the repository from the author, you'll create a new folder to work on the project and then run `git clone git@github.com:kyleshevlin/tic-tac-toe-in-react.git`, later you need to run `yarn` and finally you'll be able to run `yarn start` to start the server *


<TimeStamp start="0:02" end="0:15">

On the `App.js` file we will need to create the game component to hold the state of our game and other state values and add it to the `App` component.

```jsx
function Game() {
    return <div> Game </div>
}
```
</TimeStamp>

<TimeStamp start="0:49" end="1:37">

Now, we are going to add a `grid`, our `grid` will be a two dimensional array. To do that, we are going to create a function.

```jsx
function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper))
}
```

</TimeStamp>

<TimeStamp start="1:38" end="1:55">

We will create a new functions specifically for tic tac toe.

```jsx
const newTicTacToeGrid = () =>
  generateGrid(3, 3, () => null)
```

</TimeStamp>

<TimeStamp start="1:56" end="2:09">

Now we can add `grid` to our `Game` component and `console.log` the `grid`.

Our `function Game` should look like this:

```jsx
function Game() {
    const grid = newTicTacToeGrid()
    console.log(grid)
    return <div> Game </div>
}
```

</TimeStamp>
