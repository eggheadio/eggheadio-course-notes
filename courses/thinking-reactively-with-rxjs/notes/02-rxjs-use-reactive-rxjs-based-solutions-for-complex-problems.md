# 02. Use reactive, RxJS based solutions for complex problems

#### [📹 Video](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-02/src/lesson-code/TaskProgressService.js)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-01/src/lesson-code/TaskProgressService.js)

## Summary

- There are certain scenarios that really **lend themselves to a reactive solution** - and they mainly **involve the passage of time and the coordination of multiple asynchronous events**.
- In this lesson we'll look at some examples and introduce our first problem: how do we **show a spinner** on the screen when there are tasks happening in the background?

## Transcript

- [00:00](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=0) Whenever I have to build a new feature, or I get a requirement specification, the decision of whether to use RxJS depends on two things for me. Do I need to worry about timing? An example can be as simple as, does it involve async operations? Or even as straightforward as, we need to wait three seconds before making an HTTP request.

- [00:20](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=20) The second question I ask myself is, do we need to coordinate a lot of events that might be of different types like clicks or HTTP requests or even _setTimeouts_? Again, an example can be wait for the user to click login then make a pull request. Then when that's done, we direct to the account page.

- [00:40](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=40) To even more complex examples like building a typeahead component where we need to coordinate the user hitting the keyboard with how much time has passed since the last keystroke with making a request to the server to search.

- [00:53](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=53) This is the app we'll be working with. When we click these buttons, we trigger some tasks in the background. Imagine slow HTTP request if you want.

### App Overview

![App Overview](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168479/transcript-images/egghead-use-reactive-rxjs-based-solutions-for-complex-problems-app-overview.jpg)

- [01:02](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=62) Our first requirement that we need to build straightaway is to show a loading spinner at the bottom of the app anytime there are any tasks happening in the background. We have a counter here that shows us how many of these tasks are happening at any point in time.

- [01:18](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=78) When we start some tasks, we notice it goes up and then it goes back down again as they start to finish. This indicator is only for explanation purposes here, so you get an idea of what is happening in the background, but we're going to solve the problem as if this doesn't exist at all.

- [01:34](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=94) This requirement is time-based. We don't know how long the loader is going to be on the screen, but it will be there for some time, that's for sure. It does involve coordinating different events. We need to coordinate all events happening in the background. I'd say it's a perfect fit for an RxJS reactive-based solution.

### Problem Requirements

![Problem Requirements](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168491/transcript-images/egghead-use-reactive-rxjs-based-solutions-for-complex-problems-problem-requirements.jpg)

- [01:53](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=113) As with everything in software development, if you build something simple, the case for using RxJS isn't that big, but the decisions you make early will have a compound effect the more your app grows.

### Time Diagram

![Time Diagram](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168481/transcript-images/egghead-use-reactive-rxjs-based-solutions-for-complex-problems-time-diagram.jpg)

- [02:03](https://egghead.io/lessons/rxjs-use-reactive-rxjs-based-solutions-for-complex-problems#t=123) The moment you introduce the concept of time in an app, however simple it may be initially, there's a chance that future requirements will build on that concept. You'll have ever more complex scenarios where you have to consider time, as we shall see.

### Personal Take

Decision to use RxJS:

- Is there async or wait time? (timing is involved)
- Do we need to coordinate lots of even types? (clicks, keyboard events, http requests)

Requirements for app:

- Show a loading spinner when anything is happening in the background
  - definitely time based!
  - involves coordinating all events happening in background
  - perfect for RxJS solution!
