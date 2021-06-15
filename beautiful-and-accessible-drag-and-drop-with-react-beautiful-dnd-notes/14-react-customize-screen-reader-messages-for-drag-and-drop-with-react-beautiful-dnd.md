## :movie_camera: [Lesson 14](https://egghead.io/lessons/react-customize-screen-reader-messages-for-drag-and-drop-with-react-beautiful-dnd)

In this lesson, we are going to be talking about customizing the screen reader and its messages. 

On a mac, the way to turn screen reader on is to go to your `System Preferences`, click on `Accessibility`, click on `VoiceOver` on the left of the window, then click the `Enable VoiceOver` button. The shortcut for this is `CMD+F5`. 

On a windows 10 device, there are three way to turn this option on. I'm just going to link it :thinking: [here](https://support.microsoft.com/en-us/help/4028598/windows-10-start-or-stop-narrator) and you can follow those instructions. 

This lesson is a good example for how you can change messages but the examples that he used are already implemented in the VoiceOver. 

You can customize what the voice over says by using the `aria-roledescription` prop in your container. We are doing this in `task.jsx`.  

```js
export default class Task extends React.Component {
  render() {
    return (
    <Draggable 
      draggableId = {this.props.task.id} 
      index={this.props.index}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          aria-roledescription="Press space bar to lift the task"
        >
          {this.props.task.content}
        </Container>
      )}
    </Draggable>
    );
  }
}
```

We can also change what it says while dragging a task. In `index.js`, we are going to add in an `onDragStart` and `onDragEnd`. 

```js
render() {
  return (
    <DragDropContext 
      onDragStart={this.onDragStart}
      onDragUpdate={this.onDragUpdate}
      onDragEnd={this.onDragEnd}
    >
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
            {this.state.columnOrder.map((columnId, index) => {
              const column = this.state.columns[columnId];
              
              return <InnerList 
                key={column.id} 
                column={column} 
                taskMap={this.state.tasks} 
                index={index}
              />;
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  )
}
```

We also need to create those. These come with a prop called `provided` and on provided, we have `announce`. Here is where you can change the text. 

```js
onDragStart = (start, provided) => {
  provided.announce(`You have lifted the task in position ${start.source.index + 1}`,)
}
```

For `onDragUpdate`, we have it so that it tells us the position of the task or if it is not currently over a droppable area using the `announce` method like onDragStart. 

```js
onDragUpdate = (update, provided) => {
  const message = update.description
    ? `You have moved the task to position ${update.destination.index + 1}`
    : `You are currently not over a droppable area`;

  provided.announce(message)
}
```

Lastly for our `onDragEnd`, we can use `destination` to tell our user where they have dropped the task, either in a new position on in the starting position. 

```js
const message = result.destination
  ? `You have moved the task from position ${result.source.index + 1} to ${result.destination.index +1}`
  : `The task has been returned to its starting position of ${result.source.index + 1}`;

provided.announce(message)
```