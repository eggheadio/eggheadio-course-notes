## :movie_camera: [Lesson 4](https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd)

We start by downloading and adding `react-beautiful-dnd` to our `package.json` and wrap our column in `index.js` with a `Container`.
On Container, we only want one thing, `onDragEnd` which we are going to leave blank for now. 

```js
class App extends React.Component {
  state = initialData

  onDragEnd = result => {
    
  }

  render() {
    return (
      <DragDropContext

      >
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    )
  }
}
```

Now we head over to `column.js` to work in that file. We first `import {Droppable} from 'react-beautiful-dnd'` and then wrap our `TaskList` with the Droppable. Droppable only takes one required prop, a `droppableId`. This need to have a unique ID which we are going to use each column's id. 

```js
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

Now when wrapping our TaskList with a Droppable, we get an error: `children is not a function`. The Droppable utilizes the Render Props pattern and expects its child to be a function that returns a react component. To fix this, we have to put our TaskList inside of a function. 

```js
<Droppable droppableId={this.props.column.id}>
  {() => 
    <TaskList>
      {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
    </TaskList>
  }
</Droppable>
```

`provided` is our first prop in our function. This will give us things like `droppableProps` which we will use to designate which component we want as our droppable.  

```js
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

The `placeholder` needs to be added as a child of the component that you designate as the droppable. This concludes the droppable. 

```js
<TaskList
  innerRef={provided.innerRef}
  {...provided.droppableProps}
>
  {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
  {provided.placeholder}
</TaskList>
```

Now we head over to `task.jsx` to make our tasks draggable. We `import { Draggable } from 'react-beautiful-dnd';` and wrap our return with `<Draggable>` component. Draggable takes two props, `draggableId` which we will pass in our `task.id`, and index. 

```js
export default class Task extends React.Component {
  render() {
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      return <Container>{this.props.task.content}</Container>
    </Draggable>
  }
}
```

We are currently not passing an index to our task component so we will head over to our column component to do that. 

```js
<TaskList
  innerRef={provided.innerRef}
  {...provided.droppableProps}
>
  {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
  {provided.placeholder}
</TaskList>
```

Now we head back over into `task.jsx` and put our child component into a function. 

```jsx
export default class Task extends React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {(provided) => (
        <Container>{this.props.task.content}</Container>
      )}
    </Draggable>
    )
  }
}
```

We handle this basically like we did in the column. 

```js
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

:warning: `innerRef` Deprecation :warning: 

Here we run into a deprecation. I wasn't able to drag and drop like the instructor was able to. To fix this issue, simply change `innerRef` inside of `column.js` and `task.jsx` to just `ref` and it'll work perfectly. I noticed this looking at this :thinking: [article](https://medium.com/@reireynoso/drag-ndrop-with-react-beautiful-dnd-73014e5937f2) and seeing the subtle difference. :thinking: [Here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md) some more documentation on how to use innerRef. 


Here is my complete column.js and task.jsx files at this point. 
#### column.js
```js
import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => 
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
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

#### task.jsx
```jsx
import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: green;
`;

export default class Task extends React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {this.props.task.content}
        </Container>
      )}
    </Draggable>
    );
  }
}
```
