## :movie_camera: [Lesson 10](https://egghead.io/lessons/react-conditionally-allow-movement-using-react-beautiful-dnd-draggable-and-droppable-props)


<TimeStamp start="0:01" end="0:22">

There is basically an on/off switch to components to configure what can be dragged or dropped where. To do this, we use `isDragDisabled`

```jsx
<Draggable 
  draggableId = {this.props.task.id} 
  index={this.props.index}
  isDragDisabled={true}
>
```

</TimeStamp>

<TimeStamp start="0:47" end="0:50">

We can make it so that there are conditions to whether or not a task can be dragged. We will make a new `const` and assign our conditions to that.

```jsx
const isDragDisabled = this.props.task.id === 'task-1';
```

</TimeStamp>

<TimeStamp start="0:56" end="0:59">

Now we can assign `isDragDisabled` to `isDragDisabled` with our conditions, not allowing dragging if the id is equal to 'task-1'.

```jsx
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

</TimeStamp>

<TimeStamp start="1:10" end="1:15">

We can add styling to show wether or not a task is draggable.

```jsx
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

</TimeStamp>

<TimeStamp start="1:42" end="2:25">

There are two mechanisms that control where a draggable can be dropped. The simplest is the droppable `type`. We can set our conditions to wether or not a task can be dropped into a certain column. We can add our stipulations in `column.jsx`.

```jsx
<Droppable 
  droppableId={this.props.column.id}
  type={this.props.column.id === 'column-3' ? 'done' : 'active'}
>
```

With this, we set the 3rd column to need a type of done to have a task dropped in it and the other two need to have a type of active to be dropped in.

</TimeStamp>

<TimeStamp start="2:35" end="2:55">

The second mechanism is the droppable isDropDisabled.

```jsx
<Droppable 
  droppableId={this.props.column.id}
  isDropDisabled={this.props.isDropDisabled}
>
```

</TimeStamp>

<TimeStamp start="3:25" end="3:47">

We can make it so that tasks can only be dropped to the right of where they started. Over in `index.jsx`, we create an `onDragStart` function to hold most of our logic for this.

```jsx
onDragStart = start => {
  const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

  this.setstate({
    homeIndex,
  });
};
```

</TimeStamp>

<TimeStamp start="3:56" end="3:58">

Add in this: 

```jsx
this.setState({
    homeIndex: null,
  })
```

to our `onDragEnd` function.

</TimeStamp>

<TimeStamp start="4:02" end="4:10">

We now bind our `onDragStart` function to `theDragDropContext` at the bottom of our file. 

```jsx
<DragDropContext 
  onDragStart={this.onDragStart}
  onDragEnd={this.onDragEnd}
>
```

</TimeStamp>

<TimeStamp start="4:11" end="4:36">

We are going to get the `index` of the column from our map function as well as creating a function called `isDropDisabled`. It will be set to true when the index of our map function is less than the index of the column that we started on.

```jsx
{this.state.columnOrder.map((columnId, index) => {
  const column = this.state.columns[columnId];
  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
  const isDropDisabled = index < this.state.homeIndex;

  return <Column key={column.id} column={column} tasks={tasks} />;
})}
```

This will prevent dragging backwards between the columns. 

</TimeStamp>

<TimeStamp start="4:52" end="4:59">

If you are still able to drag tasks backwards, that was because you didn't delete our previous `onDragStart` function that we made. Make sure to delete that function before creating our new one. 

**Delete the following code**

```jsx
onDragStart = () => {
  document.body.style.color = 'orange';
  document.body.style.transition = 'background-color 0.2s ease';
}
```

</TimeStamp>
