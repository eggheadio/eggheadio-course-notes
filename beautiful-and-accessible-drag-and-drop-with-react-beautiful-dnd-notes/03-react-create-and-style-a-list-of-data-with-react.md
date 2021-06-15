## :movie_camera: [Lesson 3](https://egghead.io/lessons/react-create-and-style-a-list-of-data-with-react)

Created a file inside of `src` called `initial-data.js` where we are going to hold all of our static data, sort and name each task, separate them into columns, and export them. 

```JS
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

Then we import that file into our `index.js` and have it return our data. 

```js
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

Now instead of just returning the `column.title`, we are going to return a column with all of the tasks in that column. 

```js
return <Column key={column.id} column={column} tasks={tasks} />;
```

We don't currently have this created yet, so let's do that. 

We create `column.js` inside of our `src` folder and just have it render out the title again to make sure it's working. 

```js
import React from 'react';

export default class column extends React.Component {
  render() {
    return this.props.column.title;
  }
}
```

Now is where we have to start styling the application. We are going to install a package called `styled-components`.

Also going to install a css reset, `yarn add @atlaskit/css-reset`, for improving the visual consistency between browsers. Let's import that into our index.js file. If you import that, you'll see a slight difference to your web output. 

Now we add a little styling to this to make it look nicer. Just a margin and padding to our container, title, and tasklist. 

```js
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

Now we make our task list return a list of tasks.
```js
<Container>
  <Title>{this.props.column.title}</Title>
  <TaskList>
    {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
  </TaskList>
</Container>
```

But we need to create our `Task`. 

We create our task file in the `src` folder. and have it just print out the contents of our tasks. 

```js
import React from 'react';

export default class Task extends React.Component {
  render() {
    return this.props.task.content
  }
}
```

I ran into an error here. for some reason it didn't like that `column.jsx` and `task.jsx` were both `jsx`. If I removed the `jsx` on column, the app works just fine.

We then add in some styling to separate out all of the different tasks. 

```js
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
