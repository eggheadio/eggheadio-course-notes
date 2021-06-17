## :movie_camera: [Lesson 11](https://egghead.io/lessons/react-create-reorderable-horizontal-lists-with-react-beautiful-dnd-direction-prop)


<TimeStamp start="0:14" end="0:16">

We are going to start this lesson off by deleting our second and third column and removing their id's from the columnOrder in `initial-data.js` 

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
    }
  },
  // Facilitate reordering of the columns
  columnOrder: [ 'column-1']
};

export default initialData;
```

</TimeStamp>

<TimeStamp start="0:25" end="0:43">

In `column.jsx` we convert `TaskList` into a flex parent and remove remove some of the styling that we did for our tasks

```js
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};

  display: flex;
`;
```

</TimeStamp>

<TimeStamp start="0:45" end="0:52">

And lets have it print out only the first character of our tasks. We do this very easily in our `task.jsx` file.

```js
<Container
  {...provided.draggableProps}
  {...provided.dragHandleProps}
  ref={provided.innerRef}
  isDragging={snapshot.isDragging}
>
  {this.props.task.content[0]}
</Container>
```
</TimeStamp>

<TimeStamp start="0:54" end="1:16">

Let's add a width and a height to our boxes as well as making them round and centering the text. 

```js
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 50%;
  padding: 8px;
  margin-right: 8px;
  background-color: ${props => props.isDragging ? 'lightGreen' : 'white'};
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
```
</TimeStamp>

<TimeStamp start="1:28" end="1:48">

Now we really need to set it up so that we can drag in between our tasks and make that look much nicer. 

In the Droppable component in `column.js`, you can add in the prop `direction`. By default, it is set to 'vertical'. Let's set it to horizontal. 

```js
<Droppable 
  droppableId={this.props.column.id}
  isDropDisabled={this.props.isDropDisabled}
  direction="horizontal"
>
```

</TimeStamp>

<TimeStamp start="1:54" end="2:02">

Now we can drag from right to left and it works with keyboard. 

</TimeStamp>

<TimeStamp start="2:12" end="2:25">

Let's change our border color to red when a task is focused on as well as increase our border size. 

```js
const Container = styled.div`
  border: 3px solid lightgrey;
  border-radius: 50%;
  padding: 8px;
  margin-right: 8px;
  background-color: ${props => props.isDragging ? 'lightGreen' : 'white'};
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: red;
  }
`;
```
</TimeStamp>






