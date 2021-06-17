## :movie_camera: [Lesson 6](https://egghead.io/lessons/react-customise-the-appearance-of-an-app-during-a-drag-using-react-beautiful-dnd-snapshot-values)


<TimeStamp start="0:00" end="0:08">

Our design so far looks really nice, but now we are going to be working on customizing the appearance of an app during a drag. 

</TimeStamp>

<TimeStamp start="0:09" end="0:27">
 
 You can modify anything you like, as long as you don't change the dimensions of your `Draggable` and `Droppable` components during a drag. 

</TimeStamp>

<TimeStamp start="0:28" end="0:36">

Let's change our tasks to be a different color when dragging them. 
 
</TimeStamp>

<TimeStamp start="0:39" end="2:14">
 
Now we move to `task.jsx`. We are going to be talking about `snapshot`. It has two main properties, `isDragging` which is a boolean flag and `draggingOver` will be set to the `Id` of the droppable. 

To do that, we add `snapshot` as a parameter to our Container function and in the styling, we add the function to check that if a task is being dragged, it would change the color to light green, otherwise it would have a white background. 

The resulting code should look like this: 

```JS

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightGreen' : 'white')};
`;

export default class Task extends React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {this.props.task.content}
        </Container>
      )}
    </Draggable>
    );
  }
}

```

</TimeStamp>

<TimeStamp start="2:23" end="3:53">

We can do the same for our `column.jsx`. We will be using `snapshot` with the same properties explained previously, `isDragging` and  `draggingOver`.  When we are dragging a task around in a column, we can change the color of the background of that column by using `isDraggingOver`. We set up the background color as skyblue.

The resulting code should look like this:

```js
const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

export default class Column extends React.Component {
  render() {
    return (
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
    );
  }
}
```
</TimeStamp>

<TimeStamp start="4:06" end="4:22">

You can also add in transitions to your color changes to make it a little more visually appealing.

```js 

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

 ```

</TimeStamp>

