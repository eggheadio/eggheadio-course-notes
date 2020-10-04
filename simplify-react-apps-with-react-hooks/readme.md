<h1 align="center"><a href="https://egghead.io/courses/simplify-react-apps-with-react-hooks"></a>Simplify React Apps with React Hooks</h1>

<p align="center"><img src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/263/full/EGH_SimplifyHooks_Final.png" width="200"></p>

These notes are intended to be used and studied in tandem with Kent C. Dodds' [Simplify React Apps with React Hooks](https://egghead.io/courses/simplify-react-apps-with-react-hooks) egghead course.

This course talks about how to refactor your existing application using React hooks and Suspense. In this course, [Kent](https://egghead.io/instructors/kent-c-dodds) takes an already existing [codebase](https://github.com/kentcdodds/react-github-profile) (with class based components) and tries to refactor and simplify it to functional components.

Right below is the intended outcomes of the course, these are the skills and knowledge you will learn that you can take to any application to use.

## What you'll learn

- How to convert React class components into function components
- Usage of different React hooks like `useState`, `useRef`, `useReducer`, `useEffect`
- How to create your own custom hook
- Usage of `React.lazy` and `Suspense` to load your React components lazily
- How to __preload__ your React component when needed

## What you won't learn

- The course is not intended to sell you on the "WHY" of React hooks. It talks more about the "HOW". To know why, you can read [this](https://reactjs.org/hooks). I highly recommend you watch [this](https://www.youtube.com/watch?v=dpw9EHDh2bM) video from ReactConf 2018
- It doesn't teach you the basics of React hooks from the basics. This can be a good resource to learn [React hooks](https://egghead.io/courses/reusable-state-and-effects-with-react-hooks).

- This course is not going to teach you `React.lazy` and `Suspense` from scratch. If you want a primer on hooks and suspense, watch [Kent's React Hooks and Suspense Playlist](https://egghead.io/playlists/react-hooks-and-suspense-650307f2)

>Every lesson in the course has a link to GitHub. The lessons are sequential and the code follows that sequence in branches on the GitHub repo. So if you look at the code in the previous lesson, that's the code before the next lesson.

## Prerequisites

- Understanding of Javascript ES6 syntax, special features like: destructing, arrow functions, etc
- Prior knowledge of React. [This course](https://egghead.io/lessons/react-introduction-to-the-beginner-s-guide-to-reactjs) can be a good primer.
- Basic familiarity with React hooks. This can be [a good resource](https://egghead.io/playlists/react-hooks-and-suspense-650307f2) to start with.

## [Overview](https://egghead.io/courses/simplify-react-apps-with-react-hooks)

The code for this course can be found [here in Kent's repository](https://github.com/kentcdodds/react-github-profile).

---

In this course, Kent C. Dodds introduces us to the world of React hooks and Suspense. He takes an already existing application and refactors it using different hooks and enable function components to do way more than they were ever capable of doing before. Throughout the course, we will bump into some interesting edge cases and some interesting use cases that our components were already enabled to do, but we don't really know how to do those things with hooks.
We also take a look at the `useRef`, `useContext`, `useState`, `useReducer`, `useEffect` -- all these different hooks that are built into React that are really, really useful for making our function components more capable than they were before.
We will also see how we can use that to lazy load our code, to code split our code and load our components as they are needed, and so we don't ship as much to our user using `React.lazy` and `Suspense`

# Table of Contents

- [Refactor a class component to a function component using React Hooks](notes/02-react-class-component-to-function-component.md)
- [Handle Deep Object Comparison in React's useEffect hook with the useRef Hook](notes/03-deep-comparison-with-useref.md)
- [Safely setState on a Mounted React Component through the useEffect Hook](notes/04-safe-setstate-on-mounted-component.md)
- [Extract Generic React Hook Code into Custom React Hooks](notes/05-06-generic-code-to-custom-hook.md)
- [Track Values Over the Course of Renders with React useRef in a Custom usePrevious Hook](notes/05-06-generic-code-to-custom-hook.md)
- [Refactor a React Class Component with useContext and useState Hooks](notes/07-refactor-class-component-using-useContext.md)
- [Refactor a render Prop Component to a Custom React Hook](notes/08-refactor-renderprop-using-custom-hook.md)
- [Handle componentDidMount and componentWillUnmount in React Component Refactor to Hooks](notes/09-componentdidmount-componentwillunmount-refactor.md)
- [Dynamically Import React Components with React.lazy and Suspense](notes/10-dynamic-import-using-lazy-suspense.md)
- [Pre-load React Components with the useEffect Hook](notes/11-preload-components-using-useeffect.md)

## Contribute

These are community notes that I hope everyone who studies benefits from. If you notice areas that could be improved please feel free to open a PR!

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://github.com/rajatjain-21"><img src="https://avatars2.githubusercontent.com/u/16884032?s=460&u=ef7ea5af479d7014b0a4fd6f378d1ee9bddd473b&v=4" width="100px;" alt=""/><br /><sub><b>Rajat Jain</b></sub></a><br /><a href="#content-helmutgranda" title="Content">🖋</a></td>
  </tr>
</table>