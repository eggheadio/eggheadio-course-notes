# 13. Maintain self-resetting state in your observable streams using the scan operator

#### [📹 Video](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator)

#### [💻 Code](https://github.com/rarmatei/egghead-thinking-reactively/blob/lesson-13/src/lesson-code/TaskProgressService.js)

## Summary

- Our manager, unaware of how much our functional reactive approach has kept us delivering these features on time and bug-free, decides they **want a small new feature added to the spinner before the next release:** **a percentage indicator**, showing how many tasks have finished out of the total started since the spinner was last shown.
- So in this lesson we will be looking at **combining the existing observables that gives the up to date count of tasks**, together with a more advanced use of the scan operator, to create a stream that tells us the total count of tasks that have been launched since the spinner was last shown, and how many of them have completed.
- We’ll also take advantage of scan’s disposal behavior to reset its state when the spinner hides.

## Transcript

- [0:00]() Our virtual manager congratulates us on the quick turnaround of the last two feature requests, but then suggests another improvement we can make.

- [00:07](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=7) Users want to see a percentage progress indicator of how many tasks are left to display in the background. We can imagine that in our head. We see a spinner here, and as tasks are going down, a percentage will slowly increase up to 100 percent, at which point the spinner will hide.

### Original App Interface

![Original App Interface](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168479/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-original-app-interface.jpg)

- [00:27](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=27) As we've seen with previous requirements, it helps to understand the problem before diving into writing code. Imagine an empty array. Then suddenly, a task starts, so the spinner shows. There's no point in showing zero percent when nothing has loaded. It doesn't help or offer any important info.

### Empty Array Spinner

![Empty Array Spinner](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168472/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-empty-array-spinner.jpg)

- [00:46](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=46) Then a few more tasks start as well. We now have four loading tasks, zero percent of them have finished. Then one of them finishes. 25 percent of them have finished. Then another finishes, 50 percent are complete now. Then another, 75 percent complete.

### Empty Loading Tasks

![Empty Loading Tasks](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168472/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-empty-loading-tasks.jpg)

### 75% Loading Tasks

![75 Loading Tasks](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168474/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-75-loading-tasks.jpg)

- [01:03](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=63) Just before the last one has a chance to complete as well, a new one starts. That brings our total loaded count back a bit, to 60 percent, out of a total five. Another one starts. Now only 50 percent out of the total have completed. Now they start completing again, and again. Now we have five completed out of a total of six, which is 83 percent.

### 60% Loading Tasks

![60 Loading Tasks](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168476/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-60-loading-tasks.jpg)

### 50% Loading Tasks

![50 Loading Tasks](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168474/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-50-loading-tasks.jpg)

### 83% Loading Tasks

![83 Loading Tasks](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168475/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-83-loading-tasks.jpg)

- [01:26](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=86) How do we show this percentage number on the screen? It turns out that our `initLoadingSpinner` function takes two parameters -- a `total` and a `completed`. Let's mock them up here. As in our visualization, the `total` will be `6` and the `completed` will be `5`.

### TaskProgressService.js

```js
const total = 6;
const completed = 5;
const showSpinner = new Observable(() => {
  const loadingSpinnerPromise = initLoadingSpinner(total, completed);

  loadingSpinnerPromise.then(spinner => {
    spinner.show();
  });

  return () => {
    loadingSpinnerPromise.then(spinner => {
      spinner.hide();
    });
  };
});
```

- [01:45](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=105) Our library, based on these two, will calculate the percentage completed out of the total and display it on the screen. If we go back to the app and launch a task, we can see it displaying 83 percent. This is static. We need to make this number dynamic, based on how many tasks are actively loading and have completed since we started showing it.

- [02:11](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=131) To make it easier and allow us to pass in these two numbers, I'll wrap this `Observable()` in a _function_ that accepts them as arguments. Where can we get these two numbers (`total`, `completed`) from?

```js
const showSpinner = (total, completed) =>
  new Observable(() => {
    const loadingSpinnerPromise = initLoadingSpinner(total, completed);

    loadingSpinnerPromise.then(spinner => {
      spinner.show();
    });

    return () => {
      loadingSpinnerPromise.then(spinner => {
        spinner.hide();
      });
    };
  });
```

- [02:23](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=143) If we go back to visualizing this, if our `total` is the length of the array, then it can be calculated from how many have completed and how many are still yet to load. To solve our problem, really, we just need to know how many have completed and how many are still loading.

### Total Visualization

![Total Visualization](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168477/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-total-visualization.jpg)

- [02:41](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=161) To get how many are loading, we already have an _Observable_ we've built earlier, the `currentLoadCount`. That's why it's good to keep abstractions that make sense on their own. You don't know when you'll need them later.

- [02:54](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=174) Now, let's look at what happens when our `currentLoadCount` _Observable_ emits. When the number of loading tasks goes up, our total goes up as well. When the `currentLoadCount` goes down, that's a sign that a task has completed, so we increase completed by one.

### Current Load Count Visualization

![Current Load Count Visualization](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168483/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-current-load-count-visualization.jpg)

- [03:12]() When it goes down again from three to two, and then to one, we keep increasing completed. When it starts going up again, we leave completed alone. If you watch total, it's always going to reflect the sum of these two. When number of loading tasks goes down again, completed goes up.

### Current Load Count Visualization (Update)

![Current Load Count Visualization Update](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168482/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-current-load-count-visualization-update.jpg)

- [03:31](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=192) Let me define a `loadStats` _Observable_ that will take the `currentLoadCount`, and because we need to keep track of state, I'll `pipe()` it to a `scan()` which will accept the _function_. I'll refer to the previous state as `loadStats` and the new loading count will be `loadingUpdate`.

```js
const currentLoadCount = loadVariations.pipe(
  startWith(0),
  scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  }),
  distinctUntilChanged(),
  shareReplay({ bufferSize: 1, refCount: true })
);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

const loadStats = currentLoadCount.pipe(scan((loadStats, loadingUpdate) => {}));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //
```

- [03:52](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=211) Now, what kind of state will this return? We need to know `total` and `completed` to pass to our spinners. I'll initialize them with `0` for now. To calculate `completed`, we need to know whether the loading count has gone up or down. For that, we need to keep track of the `previousLoading` count as well.

```js
const loadStats = currentLoadCount.pipe(
  scan((loadStats, loadingUpdate) => {
    return {
      total: 0,
      completed: 0,
      previousLoading: 0
    };
  })
);
```

- [04:12](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=232) The loads went down if the new `loadingUpdate` is smaller than the `previousLoading`. The current value of completed tasks if loads went down, will be the previous value plus one, otherwise it stays the same.

```js
const loadStats = currentLoadCount.pipe(
  scan((loadStats, loadingUpdate) => {
    const loadsWentDown = loadingUpdate < loadStats.previousLoading;
    const currentCompleted = loadsWentDown
      ? loadStats.completed + 1
      : loadStats.completed;
    return {
      total: 0,
      completed: 0,
      previousLoading: 0
    };
  })
);
```

- [04:31](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=252) `completed` will be `currentCompleted`, `previousLoading` will become the new `loadingUpdate`, and `total` will be completed (`currentCompleted`) plus the `loadingUpdate`. I'll also define the initial state and they will all start from `0`.

```js
const loadStats = currentLoadCount.pipe(
  scan(
    (loadStats, loadingUpdate) => {
      const loadsWentDown = loadingUpdate < loadStats.previousLoading;
      const currentCompleted = loadsWentDown
        ? loadStats.completed + 1
        : loadStats.completed;
      return {
        total: currentCompleted + loadingUpdate,
        completed: currentCompleted,
        previousLoading: loadingUpdate
      };
    },
    { total: 0, completed: 0, previousLoading: 0 }
  )
);
```

- [04:44](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=271) What happens all tasks complete and we're at 100 percent again? We want to reset the `total` and `completed` back to `0` again as well, so they are ready for the next time we need to show the spinner and start calculating the percentage.

- [04:59](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=284) One solution will be to add a special condition in our _scan_, so that whenever `loadingUpdate` is `0`, we also reset `completed` and `total` back to `0`. It turns out, we don't even have to think about resetting the state.

- [05:13](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=299) I'll show you what I mean by creating an _Observable_ called `spinnerWithStats`, which will listen to the `loadStats` and switch to showing a spinner with the correct percentage any time our stats change. Now, instead of showing the simple spinner, we'll show a spinner with stats.

```js
const loadStats = currentLoadCount.pipe(
  scan(
    (loadStats, loadingUpdate) => {
      const loadsWentDown = loadingUpdate < loadStats.previousLoading;
      const currentCompleted = loadsWentDown
        ? loadStats.completed + 1
        : loadStats.completed;
      return {
        total: currentCompleted + loadingUpdate,
        completed: currentCompleted,
        previousLoading: loadingUpdate
      };
    },
    { total: 0, completed: 0, previousLoading: 0 }
  )
);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

const spinnerWithStats = loadStats.pipe(
  switchMap(stats => showSpinner(stats.total, stats.completed))
);
```

- [05:36](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=313) Remember, that _scan()_ keeps track of its state only while it has subscribers. Whenever the spinner needs to be shown, we'll switch to this _Observable_, which internally will initialize the new state for _scan()_ and will start tracking the percentage. Whenever we need to dispose of it, it will delete and reset any state for the percentage that we were keeping track of.

- [05:59](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=336) Because we tied the life cycle of our spinner (`showSpinner`) and `loadStats` _Observables_ together, they'll get created and disposed off together, which will handle resetting the scanned state for us. This is a case where we want the state for the _scan()_ to be local. We want to take advantage of the fact that it maintains state only while the _Observable_ it's a part of is active.

- [06:22](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=359) Let's test it. I'll create a few slow tasks, then a few quick ones, and then a few slow ones again. You'll notice that when I create new tasks, the percentage goes down, and then it starts going up again, all the way up to 100 percent, at which point it hides. Important, if I start it up again, it starts again from zero, so we can see that the resetting has worked.

### Spinner with Stats

![Spinner with Stats](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1585168485/transcript-images/egghead-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator-spinner-with-stats.jpg)

- [06:46](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=382) Takeaways from this, so if you have state and that state needs to be reset, say, when this goes back down to zero, consider the life cycle of the _Observable_ _scan()_ belongs to rather than manually resetting it. This is powerful, because we can focus on what this _Observable_ does, which is tracking the loading stats, and not have to worry about when to clean up and do the resets.

- [07:09](https://egghead.io/lessons/rxjs-maintain-self-resetting-state-in-your-observable-streams-using-the-scan-operator#t=429) In this case, we found another _Observable_ that it had to share some life cycle with, and we just combined them into this other stream. It's at this upper level where we decide its life cycle, and with it, the clean-up of the state.

## Personal Take

### Percentage Progress Indicator...

- First we need to really understand the problem...

  - Imagine an array of running tasks...
    - as tasks in the array complete, the percentage completed goes up
    - if we add more tasks to the array while other tasks are still loading, the _total percentage completed_ goes back down
    - then as more tasks complete the percentage goes back up until all tasks have completed

  **How do we show this on screen??**

- our `initLoadingSpinner` (from our spinner library) takes two arguments: `total` and `completed`
- if we assign `6` to `total` and `5` to `completed`, we see a display of 83% when the spinner appears...

**How do we make these numbers dynamic?**

- First, wrap this observable in a function that accepts these two variables as arguments
- If our tasks are an array, we can use the `.length` of the array as the total, and then calculated based on how many have completed, and how many have yet to load...
- We can use `currentLoadCount` to find this out...
  - when this count goes up, we have more loading
  - when this count goes down, it indicates that a task has completed
- Define a `loadStats` observable to track changes in loading tasks, with initial values set to 0

```js
const loadStats = currentLoadCount.pipe(
  scan(
    (loadStats, loadingUpdate) => {
      const loadsWentDown = loadingUpdate < loadStats.previousLoading;
      const currentCompleted = loadsWentDown
        ? loadStats.completed + 1
        : loadStats.completed;
      return {
        total: currentCompleted + loadingUpdate,
        completed: currentCompleted,
        previousLoadingCount: loadingUpdate
      };
    },
    { total: 0, completed: 0, previousLoadingCount: 0 }
  )
);
```

**Now what happens when all tasks complete?**

- We need to reset `total` and `completed` back to `0`
- It turns out we don't have to think about resetting our stats...
- We can tie the lifecycle of our `spinner` and `loadStats` together, so that both will be created and disposed of together

```js
const spinnerWithStats = loadStats.pipe(
  switchMap(stats => showSpinner(stats.total, stats.completed))
);
```

- This ensures that the `loadStats` state is local to the instance of spinner that it is tied to
