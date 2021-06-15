## :movie_camera: [Lesson 12](https://egghead.io/lessons/react-reorder-columns-with-react-beautiful-dnd)

Now we are going to work on being able to reorder our columns. 

Let's start by removing the third column from our `initial-data.js` just to make it easier to work with. 

In `index.js`, Lets import Droppabled from react-beautiful-dnd. 

Let's wrap the Container with our new Droppable. as well as give our droppable and ID and a direction of "horizontal". We are also going to give it a type of "column".

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

Now to our Container, we need to add the droppable props as well as the DOM ref. 

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

Now, over in `column.jsx`, we want to make our column draggable. So lets import Draggable from react-beautiful-dnd. We wrap our column inside of a Draggable and add our container to the function. For the draggableId, we are going to use the column id and make sure to give our columns and index. 

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

To give it an index, we have to do that over in `index.js`. We add `index` as a prop for our map function and pass that straight along to our column component. 

```js
{this.state.columnOrder.map((columnId, index) => {
  const column = this.state.columns[columnId];
  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
  return <Column key={column.id} column={column} tasks={tasks} index={index}/>;
})}
```

Now back in `column.js`, we need to finish wiring up our draggable. We've done that a couple times now so I'm just going to paste in the code. 

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

In this instance, we are going to use the title as our dragHandle. 

Now we can drag our columns, BUT we get an error when we drop it. Now we need to update our reordering object in onDragEnd in `index.js`. 

We add in the `type` prop so we can differentiate the difference between a task and a column. We add the logic for if a type equals column, it'll create a new array and delete the old one. 

```js
if(type === 'column') {
  const newColumnOrder = Array.from(this.state.columnOrder);
  newColumnOrder.splice(source.index, 1);
  newColumnOrder.splice(destination.index, 0, draggableId);
}
```

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