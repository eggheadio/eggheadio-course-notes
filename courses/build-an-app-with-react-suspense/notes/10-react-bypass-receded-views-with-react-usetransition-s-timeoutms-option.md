# Bypass Receded Views with React useTransition's timeoutMs Option

**[📹 Video](https://egghead.io/lessons/react-bypass-receded-views-with-react-usetransition-s-timeoutms-option)**

One of the jobs of the Suspense component is to show a fallback component when promises are pending, but this can be a problem since in certain situations means that the entire UI will be replaced by the fallback even tho, that we have a UI and state in place that can be used.

In this case, if the request is slow enough we can see the fallback UI, to do this, go to the Chrome Devtools -> Network tab and at the right side look for the `Online` dropdown,there you can choose a slower connection like 3G.

Why this situation happen?. Because of the way that the request of the data happens. On every fetch request the component is saying that is loaing again, so the entire component state is set as pending and the Suspense bounary takes over an show the fallback. 

> 📝 this situation of seeing the loading state when we have a previous state is known as [**receded state**](https://reactjs.org/docs/concurrent-mode-patterns.html#default-receded-skeleton-complete)
> 🔑 the **receded state** is the default state for React. 

the [useTransition](https://reactjs.org/docs/concurrent-mode-patterns.html#transitions) hook that we use in the [last lesson](09-react-de-prioritize-nonuser-blocking-updates-with-react-usetransition-s-starttransition-function.md) offers a way to avoid this state by configuring how long the application will wait on the previous rendering before switching to the receded state.

`useTransition` accepts an argument, a configuration objet that have an attribute call **timeoutMs**. This attribute is a number that represent a time in milliseconds.

In the example the app will use `1000` milliseconds, 1 second of "waiting time" before switching to the loading state. In an slower connection that takes longer than 1 second to retrieve the data we will see the loading state anyway but only after 1 second.

> 🔮 `timeoutMS` option for **useTransition** hook allow us to control how long the application will wait showing the current data before transitioning to the loading state (or next vieww)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-de-prioritize-nonuser-blocking-updates-with-react-usetransition-s-starttransition-function)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-display-loading-states-conditionally-with-react-usetransition-s-ispending-boolean)
