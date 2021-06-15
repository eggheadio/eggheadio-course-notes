## :movie_camera: [Lesson 5](https://egghead.io/lessons/react-persist-list-reordering-with-react-beautiful-dnd-using-the-ondragend-callback)

When we move things around in our task list, it doesn't save and the tasks go back to their original position. 

Inside of our `onDragEnd` function in `index.js`, we already passed in `result`. We not want to grab off the different props we want from result, destination, source, and draggableId. Then we will do a couple checks to see where the task was dropped. 

```js
onDragEnd = result => {
  const {destination, source, draggableId } = result;

  if(!destination) {
    return;
  }

  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return;
  }

  const column = this.state.columns[source.droppableId];
  const newTaskIds = Array.from(column.taskIds);
  newTaskIds.splice(source.index, 1);
  newTaskIds.splice(destination.index, 0, draggableId);

  const newColumn = {
    ...column,
    taskIds: newTaskIds,
  };

  
};
```

We create a new column and a new state and save those in a constant. 

```js
onDragEnd = result => {
  const {destination, source, draggableId } = result;

  if(!destination) {
    return;
  }

  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return;
  }

  const column = this.state.columns[source.droppableId];
  const newTaskIds = Array.from(column.taskIds);
  newTaskIds.splice(source.index, 1);
  newTaskIds.splice(destination.index, 0, draggableId);

  const newColumn = {
    ...column,
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
};
```

This now saves our tasks in their new order. 
