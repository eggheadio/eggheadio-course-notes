## :movie_camera: [Lesson 12](https://egghead.io/lessons/react-reorder-columns-with-react-beautiful-dnd)

<TimeStamp start="0:00" end="0:04">

Now we are going to work on being able to reorder our columns. 

</TimeStamp>

<TimeStamp start="0:58" end="1:06">

Let's start by removing the third column from our `initial-data.js` just to make it easier to work with. 

</TimeStamp>

<TimeStamp start="1:16" end="1:18">

In `index.js`, let's import Droppable from `react-beautiful-dnd`. 

</TimeStamp>

<TimeStamp start="1:21" end="2:14">

Let's wrap the Container with our new `Droppable`. as well as give our droppable and ID and a direction of "horizontal". We are also going to give it a type of "column".

```js
<DragDropContext onDragEnd={this.onDragEnd}>
  <Droppable droppableId="all-columns" direction="horizontal" type="column">
    {() => (
      <Container>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    )}
  </Droppable>
</DragDropContext>
```

</TimeStamp>

<TimeStamp start="2:15" end="2:30">

Now to our Container, we need to add the droppable props, the DOM ref, and a `placeholder` 

```js
<DragDropContext onDragEnd={this.onDragEnd}>
  <Droppable 
    droppableId="all-columns" 
    direction="horizontal" 
    type="column"
  >
    {provided => (
      <Container
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
        {provided.placeholder}
      </Container>
    )}
  </Droppable>
</DragDropContext>
```

</TimeStamp>

<TimeStamp start="2:31" end="3:25">

Now, over in `column.jsx`, we want to make our column `draggable`. So lets import `Draggable` from **react-beautiful-dnd**. We wrap our column inside of a `Draggable` and add our container to the function. For the `draggableId`, we are going to use the column id and make sure to give our columns and index. 

```js
export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {() => (
          <Container>
            <Title>{this.props.column.title}</Title>
            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => 
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              }
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
```

</TimeStamp>

<TimeStamp start="3:29" end="3:42">

To give it an index, we have to do that over in `index.js`. We add `index` as a prop for our map function and pass that straight along to our column component. 

```js
{this.state.columnOrder.map((columnId, index) => {
  const column = this.state.columns[columnId];
  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
  return <Column key={column.id} column={column} tasks={tasks} index={index}/>;
})}
```
</TimeStamp>

<TimeStamp start="3:43" end="4:09">

Now back in `column.jsx`, we need to finish wiring up our `draggable`.

The resulting code should look like this:

```js
export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps} 
            ref={provided.innerRef}
          >
            <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => 
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              }
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
```

</TimeStamp>

<TimeStamp start="4:26" end="4:32">

In this instance, we are going to use the title as our `dragHandle` 

</TimeStamp>

<TimeStamp start="4:51" end="4:55">

Now we can drag our columns, BUT we get an error when we drop it. Now we need to update our reordering object in onDragEnd in `index.js`. 

</TimeStamp>

<TimeStamp start="5:06" end="5:41">

We add in the `type` prop so we can differentiate the difference between a task and a column. We add the logic for if a type equals column, it'll create a new array and delete the old one. 

```js
if(type === 'column') {
  const newColumnOrder = Array.from(this.state.columnOrder);
  newColumnOrder.splice(source.index, 1);
  newColumnOrder.splice(destination.index, 0, draggableId);
}
```
</TimeStamp>

<TimeStamp start="5:42" end="5:53">

We create a newState object with the columnOrder added to it and set the state to the newState. 

```js
if(type === 'column') {
  const newColumnOrder = Array.from(this.state.columnOrder);
  newColumnOrder.splice(source.index, 1);
  newColumnOrder.splice(destination.index, 0, draggableId);

  const newState = {
    ...this.state,
    columnOrder: newColumnOrder,
  };
  this.setState(newState);
  return;
}
```

</TimeStamp>

<TimeStamp start="6:10" end="6:24">

We can now reorder our columns. Now lets just add some styling to our `column.js`.

```js
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;
```

</TimeStamp>

