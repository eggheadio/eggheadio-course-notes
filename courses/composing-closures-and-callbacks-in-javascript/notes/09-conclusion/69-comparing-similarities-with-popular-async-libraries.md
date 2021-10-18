# Comparing Similarities with Popular Async Libraries

[📹 Video](https://egghead.io/lessons/egghead-comparing-similarities-with-popular-async-libraries)

On this lesson, John shows different libraries that use the patterns learned in the course.

## [RxJS](https://rxjs.dev/)

- Anywhere you see `next` in RxJs you can think of a listener.
- Anywhere you see a `complete` you can think of a done being passed down
- Adding `subscription` is like adding a listener to an array

RxJS uses the same name for the functions that act as operators


You can learn more about RxJs on the course [Thinking Reactively with RxJS](https://egghead.io/courses/thinking-reactively-with-rxjs)

## [Callbag](https://github.com/callbag/callbag)

- `start` is like calling a broadcaster
- `data` is like invoking the listener
- `end` is like cancelling

Callbag uses the term `callbag` for the functions that we used as operators

## [Most.js](https://github.com/mostjs/core)

- `next` is a listener
- `end` is like cancelling

Most.JS uses the term `transforming streams` for the functions that we used as operators