## :movie_camera: [Lesson 4](https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd)

<TimeStamp start="0:06" end="0:16">

Let's add react-beautiful-dnd as a dependency to our project. Run `yarn add react-beautiful-dnd`

</TimeStamp>

<TimeStamp start="0:28" end="0:54">

react-beautiful-dnd is made up of three different components. The first is the DragDropContexts a component, which is a component that that we use to wrap the part of our application, that we want to have drag and drop enable form.

A Droppable creates a region which can be dropped on to. They also contain Draggables, which is a component that can be dragged around and dropped into droppables. 

</TimeStamp>

<TimeStamp start="0:55" end="1:12">

In order to enable drag and drop for our column, we're going to wrap it in a DragDropContext component. In `index.js` file we'll import `import { DragDropContext } from 'react-beautiful-dnd';` 

</TimeStamp>


<TimeStamp start="1:13" end="1:21">

We wrap our columns inside of a DragDropContext. 

```jsx
render() {
    return (
      <DragDropContext >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
```

</TimeStamp>

<TimeStamp start="1:22" end="1:41">

A `DragDropContext` has three callbacks. `onDragStart`, which is called when the drag starts. `onDragUpdate` is called when something changes during a drag, and `onDragEnd`, which is called at the end of a drag.

</TimeStamp>

<TimeStamp start="1:43" end="1:50">

`onDragEnd` is the only callback required for a `DragDropContext`

```jsx
<DragDropContext onDragEnd={this.onDragEnd}>
```

</TimeStamp>

<TimeStamp start="1:53" end="2:07">

The responsibility of the `onDragEnd` is to synchronously update your state to reflect the drag and drop result. We will leave this function in blank for now.

```jsx
onDragEnd = result => {
};
```

</TimeStamp>

<TimeStamp start="2:09" end="2:37">

Now we head over to `column.js` to work in that file. We first `import {Droppable} from 'react-beautiful-dnd'` and then wrap our `TaskList` with the Droppable. Droppable only takes one required prop, a `droppableId`. This need to have a unique ID which we are going to use each column's id. 

```jsx
import {Droppable} from 'react-beautiful-dnd';

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          <TaskList>
            {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
          </TaskList>
        </Droppable>
      </Container>
    );
  }
}
```

</TimeStamp>

<TimeStamp start="2:40" end="3:00">

Now when wrapping our TaskList with a Droppable, we get an error: children is not a function. The Droppable utilizes the Render Props pattern and expects its child to be a function that returns a react component. To fix this, we have to put our TaskList inside of a function.

```jsx
<Droppable droppableId={this.props.column.id}>
  {() => 
    <TaskList>
      {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
    </TaskList>
  }
</Droppable>
```

</TimeStamp>

<TimeStamp start="3:17" end="3:41">

`provided` is our first prop in our function. This will give us things like `droppableProps` which we will use to designate which component we want as our `droppable`.

```jsx
export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => 
            <TaskList
              {...provided.droppableProps}
            >
              {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
            </TaskList>
          }
        </Droppable>
      </Container>
    );
  }
}
```

</TimeStamp>


<TimeStamp start="3:54" end="4:00">

Generally, you'll be able to just spread the provided.droppableProps object directly on to your component.

```jsx
 <TaskList {...provided.droppableProps}>
```

</TimeStamp>


<TimeStamp start="4:01" end="4:13">

The `provided` object has a property called `innerRef`, which is a function used to supply the DOM node of your component to `react-beautiful-dnd`

```jsx
 <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
```

</TimeStamp>

<TimeStamp start="4:28" end="4:57">

To conclude the droppable we need to insert a `placeholder` as a child of the component that you designate as the droppable. A `placeholder` is used to increase the available space in a droppable during a drag when it's needed.

```jsx
<TaskList
  innerRef={provided.innerRef}
  {...provided.droppableProps}
>
  {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
  {provided.placeholder}
</TaskList>
```

</TimeStamp>

<TimeStamp start="4:59" end="5:31">

Now we head over to `task.jsx` to make our tasks draggable. We `import { Draggable } from 'react-beautiful-dnd';` and wrap our return with `<Draggable>` component. Draggable takes two required props, `draggableId` which we will pass in our `task.id`, and  an `index`. 

```jsx
export default class Task extends React.Component {
  render() {
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      return <Container>{this.props.task.content}</Container>
    </Draggable>
  }
}
```

</TimeStamp>

<TimeStamp start="5:32" end="6:08">

We are currently not passing an index to our task component, so we go back to our column component to do that. Our Column component is currently mapping over the tasks prop and returning a Task component. The second argument to a map function is the index of the item in the array. We can simply pass this index on to our Task component.

```jsx
<TaskList
  innerRef={provided.innerRef}
  {...provided.droppableProps}
>
  {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
  {provided.placeholder}
</TaskList>
```

</TimeStamp>

<TimeStamp start="6:09" end="6:32">

When we go back to `task.jsx` we still have a problem, a `Draggable` expects its child to be a function. The first argument to this function is a provided object.

```jsx
<Draggable draggableId={this.props.task.id} index={this.props.index}>
  {provided => <Container>{this.props.task.content}</Container>}
</Draggable>
```

</TimeStamp>

<TimeStamp start="6:34" end="7:17">

The `provided`  has two properties, First,  `draggableProps`; these props need to be applied to the component that we want to move around in response to a user input. Secondly, `dragHandleProps`; these are the props that need to be applied to the part of the component that we want to use to be able to control the entire component.

You can use this to drag a large item by just a small part of it. For our application, we want the whole task to be draggable. We're going to apply these props to the same element. As with our droppable, we also need to provide a ref for our draggable.

```jsx
export default class Task extends React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.draggableProps}
          innerRef={provided.innerRef}
        >{this.props.task.content}</Container>
      )}
    </Draggable>
    )
  }
}
```

</TimeStamp>

<TimeStamp start="7:18" end="7:29">

We can now drag items around with our mouse and with our keyboard. However, when we are dragging an item, we can see through that item. Which doesn't look very great. Let's fix that!

</TimeStamp>

<TimeStamp start="7:30" end="7:56">

We go back to `task.jsx`, and just add some background color. This will fix the see through problem. 

```jsx
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;
```

</TimeStamp>


## :warning: innerRef Deprecation :warning:

When using `innerRef` you may run into deprecation. You are not going to be able to drop like the instructor was able to.  To fix this issue, simply change `innerRef` inside of `column.jsx` and `task.jsx` to just ref and it'll work perfectly. Some documentation to use `innerRef` to your use, [Drag n’Drop with react-beautiful-dnd](https://medium.com/@reireynoso/drag-ndrop-with-react-beautiful-dnd-73014e5937f2), and [Here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md)