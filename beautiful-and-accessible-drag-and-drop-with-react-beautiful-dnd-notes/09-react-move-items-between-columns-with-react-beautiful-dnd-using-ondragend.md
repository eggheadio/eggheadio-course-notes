## :movie_camera: [Lesson 9](https://egghead.io/lessons/react-move-items-between-columns-with-react-beautiful-dnd-using-ondragend)

Here we are going to be adding in two more columns, an in progress and done column. We can just quickly add those  in our `initial-data.js` file. 

```js
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    }
  },
  // Facilitate reordering of the columns
  columnOrder: [ 'column-1', 'column-2', 'column-3']
};

export default initialData;
```

Now, over in `index.js`, we are going to wrap our columns in a `Container` and then add some styles to that container as well as import styled. 

```js
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

render() {
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      <Container>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  )
}
```

To make our columns look nicer and all have the same look, in `column.js`, we are going to add a `width: 220px;` to our Container. 

One thing that happens here that doesn't happen in the lesson video, is that our other columns are highlighting when we try to drag a task over into it. Now it doesn't highlight the entire column like we want it too, so we can change that by adding in some `flex` to our styling as well as a minimum height. 

```js
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;
```

Now we need to update the reordering of our onDragEnd so that we can drop tasks into other columns. We need to edit our `onDragEnd` to basically create a new column and splice in our task every time we want to drag one into it. 

```js
onDragEnd = result => {
  document.body.style.color = 'inherit';
  document.body.style.backgroundColor = 'inherit';

  const {destination, source, draggableId } = result;

  if(!destination) {
    return;
  }

  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return;
  }

  const start = this.state.columns[source.droppableId];
  const finish = this.state.columns[destination.droppableId];

  if(start === finish) {
    const newTaskIds = Array.from(start.taskIds);
  newTaskIds.splice(source.index, 1);
  newTaskIds.splice(destination.index, 0, draggableId);

  const newColumn = {
    ...finish,
    taskIds: newTaskIds,
  };

  const newState = {
    ...this.state,
    columns: {
      ...this.state.columns,
      [newColumn.id]: newColumn,
    },
  };

  this.setState(newState);
  return;  
}

// Moving from one list to another
const startTaskIds = Array.from(start.taskIds);
startTaskIds.splice(source.index, 1);
const newStart = {
  ...start,
  taskIds: startTaskIds,
};

const finishTaskIds = Array.from(finish.taskIds);
finishTaskIds.splice(destination.index, 0, draggableId);
const newFinish = {
  ...finish,
  taskIds: finishTaskIds,
};

const newState = {
  ...this.state,
  columns: {
    ...this.state.columns,
    [newStart.id]: newStart,
    [newFinish.id]: newFinish,
  },
};
this.setState(newState);
};
```

Don't forget to change your `column` to either `start` or `finish` and correct the logic that was using `column` anywhere else in this file. I forgot to do that and took a decent chunk of time figuring out where I missed that. 

Also this still works for keyboard. :thinking: [Here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/sensors/keyboard.md) is some documentation on that and shortcuts.