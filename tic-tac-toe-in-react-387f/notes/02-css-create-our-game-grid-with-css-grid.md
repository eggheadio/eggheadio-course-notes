# Notes

<TimeStamp start="0:04" end="0:06">

We remove the `console.log` from the `Function Game` 

</TimeStamp>

<TimeStamp start="0:32" end="0:46">

We'll start adding the `grid` component where receives our `grid` data, and we will create a cell for each datum in the set of data

</TimeStamp>

<TimeStamp start="2:30" end="2:40">

The resulting code for `function Grid` should look like this: 

```jsx
function Grid({ grid }) {
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
                value={value}
              />
            ))
          )}     
        </div>
      </div>
    )
  }
```

</TimeStamp>

After here, the project does not work properly on the latest version of React. It does not display the layout of the game, after reviewing and reading proper documentation of react I was not able to find the error. The terminal and the website itself does not throw any error. 

**What did I do to fix this problem? **

I have cloned the repository from the Instructor and compared the dependencies that he is working with and make sure all of those dependencies are in the new project, however, this was not sufficient to make it work. 

One of the dependencies that the instructor's repository works is => "parcel-bundler" This package has been deprecated [here](https://www.npmjs.com/package/parcel-bundler). Moreover, the repository works with the dependencies of "Babel' and the newest versions of React have those files hidden since they are already included when the app is created, for more information of this refer to this documentation [here](https://reactjs.org/docs/create-a-new-react-app.html). However, I downloaded all of the Babel dependencies but not luck when running the app. 

Finally, my last option was to upgrade the dependencies on the current project, specially React dependency in the repository, running the following command `yarn upgrade --latest react-scripts`. Doing that the project crashes. 

I have spent more than one hour trying to figure out this problem. 

From now on I'm reviewing the course and taking notes while working on the repository made by the instructor. 

<TimeStamp start="3:10" end="3:16">

The resulting code for `function Cell` should look like this:

```jsx 
  function Cell({ value }) {
    return (
      <div
        css={{
          backgroundColor: '#fff',
          width: 100,
          height: 100,
        }}
      >
        
        {value}
        
      </div>
    )
  }
```

</TimeStamp>

<TimeStamp start="4:30" end="4:35">

After mapping the `grid` into the `function Grid` we can see in our browser the design of our Tic Tac Toe game. The resulting code of `function grid` should look like this: 

```jsx
function Grid({ grid }) {
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
                value={value}
              />
            ))
          )}     
        </div>
      </div>
    )
  }
```

</TimeStamp>
