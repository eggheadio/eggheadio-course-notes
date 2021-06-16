## :movie_camera: [Lesson 5](https://egghead.io/lessons/react-persist-list-reordering-with-react-beautiful-dnd-using-the-ondragend-callback)

<TimeStamp start="0:01" end="0:14">

When we move things around in our task list, interactions are not being persisted, it doesn't save the change and the tasks go back to their original position. 

</TimeStamp>


<TimeStamp start="0:15" end="1:01">

To work on persistence we need to work inside of our `onDragEnd` function in `index.js`, we already passed in `result`. We can see the following example for a result given: 

```JS

const result = {
    draggableId: 'task-1',
    type: 'TYPE',
    reason: 'DROP',
    source: {
        droppableId: 'column-1,
        index: 0,
    },
    destination: {
        droppableId: 'column-1',
        index: 1,
    },
}
```
The properties of this result are Id, type, reason and most important ones, source and destination; these objects contain location information about where the draggable started and finished. 

</TimeStamp>

<TimeStamp start="1:15" end="1:22">

There are cases where the destination destination can be null, such as where the user drops outside of a list.

</TimeStamp>

<TimeStamp start="1:23" end="1:43">

Then you grab the information that we are interested in from the result object. If there's no destination, then there's nothing that we need to do as a result of this drag, so we can simply exit.

```js

 onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

```
</TimeStamp>

<TimeStamp start="1:44" end="2:05">

I like to do a little check to see if the location of the draggable changes. We do this by checking if the `destination.droppableId` is the same as `source` and if the `index` is has the same destination as the `source`.

```js

if (
  destination.droppableId === source.droppableId &&
  destination.index === source.index
) {
  return;
}

```
</TimeStamp>

<TimeStamp start="2:06" end="2:29">

Now we need to reorder the `taskIds` array for the column. 

```js

const column = this.state.columns[source.droppableId];

```
</TimeStamp>

<TimeStamp start="2:51" end="2:58">

We need to create a new `taskId` array with the same contents as our last array.

```js

const newTaskIds = Array.from(column.taskIds);

```

</TimeStamp>

<TimeStamp start="3:09" end="3:21">

Now need to move the task ID from its old index to its new index in the array. `splice` modifies the array and will modify the `newTaskIds`

```js

newTaskIds.splice(source.index, 1);

```


</TimeStamp>

<TimeStamp start="3:40" end="4:00">

We will use `splice` again starting from the `destination.index` to remove nothing and insert the `draggableId` 

```Js

newTaskIds.splice(destination.index, 0, draggableId);

```

</TimeStamp>

<TimeStamp start="4:03" end="5:12">

We create a new column and a new state and save those in a constant. The resulting code should look like this: 

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

</TimeStamp>
