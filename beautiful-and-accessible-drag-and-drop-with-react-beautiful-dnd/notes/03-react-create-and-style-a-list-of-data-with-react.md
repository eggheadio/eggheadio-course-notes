## :movie_camera: [Lesson 3](https://egghead.io/lessons/react-create-and-style-a-list-of-data-with-react)

<TimeStamp start="0:02" end="0:06">

Create a file inside of `src` call `initial-data.js` where we are going to hold all of our static data

</TimeStamp>

<TimeStamp start="0:13" end="0:16">

For our purposes we are going to have a very simple data structure. 

</TimeStamp>

<TimeStamp start="0:18" end="0:36">

Firstly we are going to have a property call `tasks`, task object contains the task on our system, it uses the task id as the key for the lookup of the task object. Task object contains and id and content for the task. 

```jsx
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
```

</TimeStamp>

<TimeStamp start="0:37" end="0:51">

We are also going to have a columns object, which we'll use to store the columns in our system. We also use the column id as the key for looking up the column. The code should look like this: 

```jsx
columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
```

</TimeStamp>

<TimeStamp start="0:52" end="1:09">

Each column has a task ids array and it serves two purposes. First, indicates ownership and, secondly it helps to maintain the order of the tasks.  

</TimeStamp>

<TimeStamp start="1:13" end="1:23">

We are also going to add another property to the object called `columnOrder`. This property will be used to record the order of the columns. 

The resulting code should look like this: 

```jsx
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
  },
  // Facilitate reordering of the columns
  columnOrder: [ 'column-1'],
};
```

</TimeStamp>

<TimeStamp start="1:30" end="1:34">

We need to export `initialData`, and return to `index.js` file.

```jsx
export default initialData;
```

</TimeStamp>

<TimeStamp start="1:35" end="1:39">

Inside of our `index,js` file, we can now import our initialData.

```jsx
import initialData from './initial-data';
```

</TimeStamp>

<TimeStamp start="1:47" end="2:31">

We're going to set the initial state of our application to be that initialData, with the responsibility of rendering our columns. `columnOrder` stores the order we want to render our columns, so we are going to map over that in order to render out our columns, we pull out the `column` out of the state, and we also get the `task` associated with that column. Finally, to check if everything was done correctly we return the title of the column. 

The resulting code should look like this: 

```jsx
import initialData from './initial-data';

class App extends React.Component {
  state = initialData
  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      
      return column.title;
    })
  }
}
```

</TimeStamp>

<TimeStamp start="2:37" end="3:08">

Now instead of just returning the `column.title`, we are going to return a column component with its id and tasks.

```jsx
return <Column key={column.id} column={column} tasks={tasks} />;
```

</TimeStamp>

<TimeStamp start="3:09" end="3:37">

We don't currently have this created yet, so let's do that. 

We create `column.jsx` inside of our `src` folder and just have it render out the title again to make sure it's working. 

```jsx
import React from 'react';

export default class column extends React.Component {
  render() {
    return this.props.column.title;
  }
}
```

</TimeStamp>

<TimeStamp start="3:43" end="3:56">

Now is where we have to start styling the application. Run `yarn add styled-components` in the `task-app` folder.

</TimeStamp>

<TimeStamp start="4:17" end="4:38">

In order to improve the visual consistency between browsers, we are going to use a css reset. To add this this reset to our project we need to run '`yarn add @atlaskit/css-reset`. Now, let's import that into our `index.js` file: 

```jsx
import '@atlaskit/css-reset';
```

After importing that, you'll see a slight difference to your web output. 

</TimeStamp>

<TimeStamp start="4:39" end="4:44">

We go back to `column.jsx` and import the style-components 

```jsx
import styled from 'styled-components';
```

</TimeStamp>

<TimeStamp start="4:45" end="5:12">

After importing the style components we are able to create elements with styles. We'll need a `Container` to wrap our column, a `Tittle`, and a `TaskList` component

``` jsx
const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;
```

</TimeStamp> 

<TimeStamp start="5:21" end="5:27">

Now rendering out our column with no additional styles other than the CSS reset that we've added.

```jsx
render () {
  return (
        <Container>
          <Title>{this.props.column.title}</Title>
              <TaskList>Tasks go here</TaskList>
        </Container>
      );
}
```

</TimeStamp>

<TimeStamp start="5:29" end="5:51">

Now we add a little styling to this to make it look nicer. Just a margin and padding to our container, title, and tasklist.

```jsx
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;
```

</TimeStamp>

<TimeStamp start="6:13" end="6:19">

We are going to make our `TaskList` return a list of tasks 

```jsx
render () {
  return (
    <Container>
      <Title>{this.props.column.title}</Title>
      <TaskList>
        {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
      </TaskList>
    </Container> 
  );    
}
```

</TimeStamp>

<TimeStamp start="6:20" end="6:44">

We're now rendering out a list of task components, but we haven't created it yet. Let's go ahead and import Task from task. We haven't created this file, so let's go ahead and create `task.jsx` under `src` folder, and have it just print out the contents of our tasks.

```jsx
import React from 'react';

export default class Task extends React.Component {
  render() {
    return this.props.task.content
  }
}
```

</TimeStamp>

<TimeStamp start="6:55" end="7:37">

To improve the style of this we create a `Container` component to wrap inside of that our task content and we add some borders and padding to make it look nicer and similar to the column. 


```jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default class Task extends React.Component {
  render() {
    return <Container>{this.props.task.content}</Container>
  }
}
```

</TimeStamp>


The extension of the files might give you some errors while running the application, one possible solution will be to use the extension to `.js` instead of `.jsx` in the `column` file.


