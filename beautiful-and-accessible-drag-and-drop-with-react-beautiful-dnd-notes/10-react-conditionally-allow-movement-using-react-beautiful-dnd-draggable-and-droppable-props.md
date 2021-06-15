## :movie_camera: [Lesson 10](https://egghead.io/lessons/react-conditionally-allow-movement-using-react-beautiful-dnd-draggable-and-droppable-props)

There is basically an on/off switch to components to allow them to be dragged or not. To do this, we use `isDragDisabled`.

```js
<Draggable 
  draggableId = {this.props.task.id} 
  index={this.props.index}
  isDragDisabled={true}
>
```

We can make it so that there are conditions to wether or not a task can be dragged. We will make a new const and assign our conditions to that. 

```js
const isDragDisabled = this.props.task.id === 'task-1';
```

Now we can assign `isDragDisabled` to `isDragDisabled` with our conditions, not allowing dragging if the id is equal to 'task-1'.

```js
<Draggable 
  draggableId = {this.props.task.id} 
  index={this.props.index}
  isDragDisabled={isDragDisabled}
>
  {(provided, snapshot) => (
    <Container
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      isDragging={snapshot.isDragging}
      isDragDisabled={isDragDisabled}
    >
      {this.props.task.content}
    </Container>
  )}
</Draggable>
```

We can add styling to show wether or not a task is draggable. 

```js
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => 
    props.isDragDisabled
      ?'lightgrey'
      : props.isDragging 
      ? 'lightGreen' 
      : 'white'};
`;
```

There are two mechanisms that control where a draggable can be dropped. the simplest is the droppable `type`. We can set our conditions to wether or not a task can be dropped into a certain column. We can add our stipulations in `column.js`.

```js
<Droppable 
  droppableId={this.props.column.id}
  type={this.props.column.id === 'column-3' ? 'done' : 'active'}
>
```

With this, we set the 3rd column to need a type of `done` to have a task dropped in it and the other two need to have a type of `active` to be dropped in. 

The second mechanism is the droppable `isDropDisabled`. 

```js
<Droppable 
  droppableId={this.props.column.id}
  isDropDisabled={this.props.isDropDisabled}
>
```

We can make it so that tasks can only be dropped to the right of where they started. Over in `index.js`, we create an `onDragStart` function to hold most of our logic for this. 

```js
onDragStart = start => {
  const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

  this.setstate({
    homeIndex,
  });
};
```

Add in this: 

```js
this.setState({
    homeIndex: null,
  })
```

to our `onDragEnd` function.

We now bind our `onDragStart` function to `theDragDropContext` at the bottom of our file. 

```js
<DragDropContext 
  onDragStart={this.onDragStart}
  onDragEnd={this.onDragEnd}
>
```

We are going to get the `index` of the column from our map function as well as creating a function called `isDropDisabled`. It will be set to true when the index of our map function is less than the index of the column that we started on.

```js
{this.state.columnOrder.map((columnId, index) => {
  const column = this.state.columns[columnId];
  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
  const isDropDisabled = index < this.state.homeIndex;

  return <Column key={column.id} column={column} tasks={tasks} />;
})}
```

This will prevent dragging backwards. 

Now I ran into an issue, I was still able to drag my tasks backwards, that was because I didn't delete our previous `onDragStart` function that we made. Make sure to delete that function before creating our new one. 

```js  
onDragStart = () => {
  document.body.style.color = 'orange';
  document.body.style.transition = 'background-color 0.2s ease';
}
```

Delete this ^