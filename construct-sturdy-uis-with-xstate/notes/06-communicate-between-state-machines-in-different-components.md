# Communicate between State Machines in Different Components

[Video Link](https://egghead.io/lessons/react-communicate-between-state-machines-in-different-components)
[Code Link](https://github.com/isaacplmann/sturdy-uis/tree/lesson5-end)

- Machines don't have to be on the same component in order to work together
  - Information can be passed between machines via `props` so machines don't actually need
  to know about each other.


🔑 In this spectrum [question](https://spectrum.chat/statecharts/general/split-up-components-that-represent-the-xstate-machine~518618c0-b807-45fd-bd76-f2cb8210c659?m=MTU2NjQxNDY4ODYyMA==), David K. Piano says: _"child components should be completely unaware that a parent state machine exists. Message passing via props like onChange, onSubmit, on<Something>, etc, is idiomatic and preferred"_.