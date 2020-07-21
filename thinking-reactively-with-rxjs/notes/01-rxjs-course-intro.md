# 01. Course Intro

#### [📹 Video](https://egghead.io/lessons/rxjs-break-down-a-requirement-into-small-problems)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-01/src/lesson-code/TaskProgressService.js)

## Summary

**In this course we'll look at how to approach problems reactively** where we program according to what events can happen in our app. We'll put ourselves in a real world situation, where we have an app that can launch some tasks in the background, and a virtual manager, that will constantly expand the scope of our initial requirement.
**I will start by breaking down the requirements into very small bits, that we can tackle individually.** We'll then be very intentional about how we define our observables, naming them correctly and creating the right abstractions that very clear boundaries and are as predictable as possible to the consumers.
We'll look at **integrating third-party non-RxJS code into our reactive streams** and also at exposing our reactive library to the outside world, that might not be RxJS aware.
And we'll make sure to learn new operators and look at RxJS mechanics along the way.

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-course-intro#t=0) Hi, all. Radesh here. I'm very excited to be able to finally walk you through what I've been working on for the past few months.

- [00:07](https://egghead.io/lessons/rxjs-course-intro#t=7) There are certain scenarios which really lend themselves to a reactive solution where you program and think according to what events could happen in your app. They mainly involve the passage of time and the coordination of multiple types of events. The difficulties these scenarios pose have a way to compound as software evolves.

- [00:29](https://egghead.io/lessons/rxjs-course-intro#t=7) The moment you have to think about the passage of time to solve a seemingly small problem, there's a very big chance that any future changes to that requirement will also involve time and coordination of events, especially on the front end where you have the biggest source of random events, the user itself.

- [00:47](https://egghead.io/lessons/rxjs-course-intro#t=47) That's what we'll do in the course. We'll take a real-world example of this. You have an app that can launch some tasks in the background. They can be requests to a server, some image processing, or a database call.

- [00:59](https://egghead.io/lessons/rxjs-course-intro#t=59) Our first problem will be to show a spinner on the screen when there is anything loading in the background. We'll start from a very high level and vague English requirement and break it down more and more, get at the core of truly understanding what's being asked of us, until we have these very small problems that we can solve in isolation without any of the wider context pushing down on us.

- [01:2](https://egghead.io/lessons/rxjs-course-intro#t=84) From that point, we'll be very, very intentional about making the correct abstractions when building our observables, about how we name everything. By the end, because we're using RxJS, which allows us to build these declarative chains of events, we'll notice that the code we're writing looks pretty similar to our initial requirements, making it very easy to read and reason about by other developers or by our future selves looking back at the app.

- [01:52](https://egghead.io/lessons/rxjs-course-intro#t=112) Then we'll put our design to the test because our virtual manager will come in. We'll start getting all these requirements that could easily result in an explosion of complexity. For example, if we launch a task that is really short, we don't want to show the spinner, as it will look like a glitch.

- [02:10](https://egghead.io/lessons/rxjs-course-intro#t=130) We might want to keep showing the spinner on the screen while there are tasks going on, unless the user triggers, very quickly, a certain hidden combo on their keyboard. Think of those classic fighting games where you can launch all these punches and kicks by pressing a certain combination of buttons quickly enough -that's something we'll build in only a few lines of code with RxJS.

- [02:33](https://egghead.io/lessons/rxjs-course-intro#t=153) While we're going to be immersed in this story of thinking reactively and preparing our requirements for an RxJS-based solution, we'll dive deep technically as well. I'll show you my favorite RxJS patterns, gotchas, and common issues that you need to be aware of. I'll demo some more unusual use cases of the more popular operators, and I'll hopefully surprise you with some less-popular operators you've never used before.

- [03:00](https://egghead.io/lessons/rxjs-course-intro#t=180) Let's dive in.
