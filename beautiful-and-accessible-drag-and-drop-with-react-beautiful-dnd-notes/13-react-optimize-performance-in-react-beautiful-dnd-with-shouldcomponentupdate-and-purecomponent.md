## :movie_camera: [Lesson 13](https://egghead.io/lessons/react-optimize-performance-in-react-beautiful-dnd-with-shouldcomponentupdate-and-purecomponent)

For this lesson, we are going to be spending a good bit of time on the browser using dev tools and their Highlight Updates feature. As it so happens, in an update for dev tools last year, this feature was taken out. A comparable application is the `Profiler` tab in dev tools. Hit record and then do your thing. It will record the actions taken on the browser as well as all of the different interactions between components and what happens behind the scenes. Using this will get you basically the same output. 


We start by making the background of our columns to lightgrey for this lesson. 

```js
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;
```

We are going to streamline things a bit. Whenever you drag a task over a droppable, it highlights that droppable and will rerender all of the tasks. We don't want this as it can slow down our application. 

Let's fix this by replacing our map function in our column with a new component called `InnerList`. 

```js
<TaskList
  ref={provided.innerRef}
  {...provided.droppableProps}
  isDraggingOver={snapshot.isDraggingOver}
>
  <InnerList tasks={this.props.tasks} />
  {provided.placeholder}
</TaskList>
```

Now let's create that class. 

```js
class InnerList extends React.Component {
  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}
```

We then add a `shouldComponentUpdate` life cycle method. In here, we are going to skip a render if the new tasks array shares referential equality with the existing tasks array. 

```js
class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}
```

Now we have the tasks in a single column not being rendered when one is moved until it is dropped, we need to fix them all rendering when a column is moved. 

We want to stop the rendering of the children of the droppable, the container, during a drag. Instead of returning a Column, we are going to return an `InnerList` component that'll render a column. 

```js
{this.state.columnOrder.map((columnId, index) => {
  const column = this.state.columns[columnId];
  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
  return <InnerList 
    key={column.id} 
    column={column} 
    taskMap={tasks} 
    index={index}
  />;
})}
```

Now lets create that InnerList component. 

```js
class InnerList extends React.Component {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}
```

This currently does the exact same as before. Now we add in a `shouldComponentUpdate` and add in the logic to check to see if there is a render necessary. 

```js
class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.column === this.props.column &&
      nextPropsProps.taskMap === this.props.taskMap &&
      nextProps.index === this.props.index
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}
```

None of these should change when a column is dragged so a render shouldn't happen. To shorten this up, we change `React.Component` to `React.PureComponent` and it'll do everything inside of that `shouldComponentUpdate` for us. 

```js
class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}
```