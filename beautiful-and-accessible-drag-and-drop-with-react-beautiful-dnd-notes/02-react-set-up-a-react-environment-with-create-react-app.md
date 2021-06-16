## :movie_camera: [Lesson 2](https://egghead.io/lessons/react-set-up-a-react-environment-with-create-react-app)

<TimeStamp start="0:13" end="0:30">

Run `npx create-react-app task-app` to create a simple react application and named our folder `task-app`. 

</TimeStamp>

<TimeStamp start="0:30" end="0:35">

Run `yarn start` to start the development server.

</TimeStamp>

<TimeStamp start="0:42" end="0:45">

Open the application in your code editor. To open in VS Code, type `code .` in the `task-app` folder.

</TimeStamp>

<TimeStamp start="0:46" end="0:47">

Open `index.js`.

</TimeStamp>

<TimeStamp start="0:52" end="0:56">

We're going to remove some of the things in the `index.js` file that we're not interested in. 

</TimeStamp>

<TimeStamp start="0:57" end="1:07">

The resulting code inside `index.js` should look like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => 'Hello World'

ReactDOM.render(<App />, document.getElementById('root'));
```

</TimeStamp>

<TimeStamp start="1:08" end="1:15">

We also delete every other file in the `src` folder except for our `index.js` file. 

</TimeStamp>

<TimeStamp start="1:17" end="1:20">

We now have an empty React development environment we can build upon.

</TimeStamp>
