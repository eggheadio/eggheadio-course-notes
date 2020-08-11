<h1 align="center"><a href="https://egghead.io/courses/construct-sturdy-uis-with-xstate">Construct Sturdy UIs with XState</a></h1>

<p align="center"><img src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/402/full/State_Machine.png" width="200"></p>

### About 🔮
This repor contains notes from Ian Mann's Egghead course [Construct Sturdy UIs with XState](https://egghead.io/courses/construct-sturdy-uis-with-xstate)

These notes contain the same structure as the transcriptions, along with additional rewrites, links to resources, and personal takes on the lesson. Feel free to submit additions to these notes, but please don't remove anything (unless we messed up or misunderstood something).

### Course Description 🔎
Our applications have lots of states that they can be in.

We usually remember “Loading” and “Successful”. If we’re having a particularly good day, we’ll get “Error” handled as well.

But what about other states that our application can be in?

Things like “Haven’t requested yet” or “The request was successful but there isn’t any data for us to show”.

It’s frustrating to think you’re “done” and then an edge case shows up (and this cycle repeats at least one more time).

Fed up with forgetting to handle the edge cases that appear when developing UIs, Isaac Mann started looking for a solution.

The answer? State machines.

In this course, Isaac will teach you how to plan and visualize your application’s states and the transitions between them through the creation of a React & XState powered Star Wars quiz app.

### Table of Contents 📜
- [01. Introducing Construct Sturdy UIs with XState](notes/01-introducing-construct-strudy-uis-with-xstate.md)
- [02. Handle HTTP Request State with Xstate.md](notes/02-handle-http-request-state-with-xstate)
- [03. Invoke An Xstate Service Whe Entering a State](notes/03-invoke-an-xstate-service-when-entering-a-state)
- [04. Block a State Transition Order with Parallel States](notes/04-block-a-state-transition-with-a-guard.md)
- [05. Control Transition Order with Parallel States](notes/05-control-transition-order-with-parallel-states.md)
- [06. Communicate Between State Machines in Different Components](notes/06-communicate-between-state-machines-in-different-components.md)
- [07. Save Previous State with History State](notes/07-save-previous-state-with-history-state.md)
- [08. Execute Code When Entering and Exiting States Using Activities](notes/08-execute-code-when-entering-and-exiting-states-using-activities.md)