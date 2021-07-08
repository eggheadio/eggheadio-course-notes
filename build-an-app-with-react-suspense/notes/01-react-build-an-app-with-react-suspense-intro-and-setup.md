# Build an App with React Suspense: Intro and Setup

**[📹 Video](https://egghead.io/lessons/react-build-an-app-with-react-suspense-intro-and-setup)**

## Intro and Welcome

**[📹 Video](https://egghead.io/lessons/react-build-an-app-with-react-suspense-intro-and-setup)**

**[💻 Code](https://github.com/chantastic/react-suspense-course)**

**[📄 Concurrent Docs](https://reactjs.org/docs/concurrent-mode-intro.html)**

> <p style="color: red">Concurrent Mode (React Suspense) is an Experimental API (yet)</p>

Hi and welcome! This document contains some of the things that I had to lookup while I was going through this course. I hope you find them useful too!

All of the course material is available in this📄 [repository](https://github.com/chantastic/react-suspense-course) and each video corresponds with one folder inside the `src/lessons` directory. This first video correspond with the [101](https://github.com/chantastic/react-suspense-course/tree/master/src/lessons/101) folder

### Clone the repository

To follow along you need to clone the repository

```
git clone https://github.com/chantastic/react-suspense-course/tree/master/src/lessons/101
```
And install the dependencies
```
yarn install
```

Start the project to be able to see in the browser

```
yarn start
```

The project use [create-react-app](https://create-react-app.dev)

### Change through lessons

To be able to render the code for each lessons you need to do some updates to the code to do that open in your code editor of choice the file `src/index.js` that looks like this.

```javascript
import React from "react";
import ReactDOM from "react-dom";

// ↓↓↓ 👋 Update this line to change the lesson number ↓↓↓
import Lesson from "./lessons/complete/app";

function App() {
  return <Lesson />;
}

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement); // Blocking Mode
ReactDOM.createRoot(rootElement).render(<App />); // Concurrent Mode
```

In this place you can change from normal mode to concurrent mode.

And also the place to change between lessons. To do it just change the third import from `"./lessons/complete/app";` to `"./lessons/101/app"` to make it looks like

```javascript
import React from "react";
import ReactDOM from "react-dom";

// ↓↓↓ 👋 Update this line to change the lesson number ↓↓↓
import Lesson from "./lessons/101/app";

function App() {
  return <Lesson />;
}

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement); // Blocking Mode
ReactDOM.createRoot(rootElement).render(<App />); // Concurrent Mode
```

### React Channels
🔑 Is important to note that this application is not using the public version of React, instead of that is using a build from a channel or prerelease. You can read more about prereleases in  [📄 this post in the React blog](https://reactjs.org/blog/2019/10/22/react-release-channels.html)

Scroll to the bottom to see how to install the experimental channel 
```
yarn upgrade react@experimental react-dom@experimental
```

> You don't require to install this version in this project since is already configured to use it.

---

📹 [Go to Next Lesson](https://egghead.io/lessons/react-import-components-lazily-with-suspense-react-lazy)
