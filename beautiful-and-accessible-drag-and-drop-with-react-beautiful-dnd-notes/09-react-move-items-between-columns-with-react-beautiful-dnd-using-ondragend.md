## :movie_camera: [Lesson 9](https://egghead.io/lessons/react-move-items-between-columns-with-react-beautiful-dnd-using-ondragend)



<TimeStamp start="0:01" end="0:08">

We are going to add further columns to our application and enable the movement of tasks between columns.

</TimeStamp>

<TimeStamp start="0:09" end="0:31">

We go to `initial-data.js` file and quickly add two columns. 

```js

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initialData;

```
</TimeStamp>

<TimeStamp start="0:41" end="0:52">

Now, over in `index.js`, we are going to wrap our columns in a `Container` 

```js
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
</TimeStamp>

<TimeStamp start="0:57" end="1:11">

Then add some styles to that container with `flex` which will align the items next to each other,as well as import styled.

``` js

import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

```
</TimeStamp>

<TimeStamp start="1:18" end="1:27">

To make our columns look nicer and all have the same look, in `column.js`, we are going to add a `width: 220px;` to our Container.

</TimeStamp>

<TimeStamp start="1:30" end="1:51">

Now the columns are not highlighting when we try to drag a task over into it. To fix that we convert our `container` as a `flex` parent.

```js
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;
```

</TimeStamp>

<TimeStamp start="2:02" end="2:35">

We set up `flex` growing in `TaskList` we can see how `flexbox` will grow to fill the available space and add the minimum height to the droppable components. After hovering through the columns we get the correct coloring 

```js

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

```
</TimeStamp>

<TimeStamp start="3:15" end="3:40">

We go back to `index.js` and we rename our `column` to start, with this we have created a new variable to store our reference to the column that we finish. 

```js 

const start = this.state.columns[source.droppableId];
const finish = this.state.columns[destination.droppableId];

if (start === finish) {
  ....
}

```
</TimeStamp>

<TimeStamp start="4:05" end="4:33">

Now from moving to one list to another, we need to create a `startTaskIds` array and a `newStart` column and remove the dragged `taskId` from the old array. 

```js
const startTaskIs = Array.from(start.taskIds);
startTaskIds.splice(source.index, 1);
const newStart = {
  ...start,
  taskIds: startTaskIds
};

```
</TimeStamp>

<TimeStamp start="4:34" end="4:59">

We also need to create a `finishTaskIds` array and a `newFinish` 
```js
const finishTaskIs = Array.from(finish.taskIds);
finishTaskIss.splice(destination.index, 0, draggableId);
const newFinish = {
  ...finish,
  taskIds: finishTaskIds
};
```
</TimeStamp>

<TimeStamp start="5:00" end="5:11">

Finally, we need to create a `newState` updating the new column's map and task Ids. 

```js

 const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

```

</TimeStamp>


<TimeStamp start="5:34" end="5:59">

Also this changes still work for keyboard dragging. :thinking: [Here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/sensors/keyboard.md) is some documentation on that and shortcuts.

</TimeStamp>

