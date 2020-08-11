# Control Transitions Order with Parallel State

[Video Link](https://egghead.io/lessons/react-control-transitions-order-with-parallel-states)
[Code Link](https://github.com/isaacplmann/sturdy-uis/tree/lesson4-end)

### Parallel & Final States

_[Parallel states](https://xstate.js.org/docs/guides/parallel.html#parallel-state-nodes) node represents multiple orthogonal child state nodes; that is, a parallel state is in all of its child states at the same time_

- A `parallel state` node's state value is represented as an object.
- Additional [reading](https://dev.to/jacobmparis/modelling-parallel-states-in-xstate-3pe0) on modeling parallel states in Xstate.


🏁 _[Final state](https://xstate.js.org/docs/guides/final.html#final-states) indicates the completion of a part of the statechart, or the entire statechart. Specifically, it inidicates that its parent compound state node is "done"._

```js
export const matchingMachine = Machine({ 
	id: 'matching',
	initial: 'answering', 
	context: {
		topSelectedItem: undefined, 👈 // with these pieces of state we track top &
		bottomSelectedItem: undefined  // bottom lists
	},
	states: {
		answering: {
			type: 'parallel',
			states: {
				topList: { 👈// parallel state
					initial: 'unselected',
					states: {
						unselected: {
							on: {
								SELECT_TOP: { target: 'selected', actions: 'setTopSelectedItem' }
							}
						},
						selected: {
							type: 'final' 👈 // here is where we set out final state
						}
					}
				},
				bottomList: { 👈// parallel states
					initial: 'unselected',
					states: {
						unselected: {
							on: {
								SELECT_BOTTOM: { target: 'selected', actions: 'setBottomSelectedItem' }
							}
						},
						selected: {
							type: 'final' 
						}
					}
				}
			}
		},
...
```

- In this machine example, both `bottomList` and `topList` states can have the same value at the same time, which is what is referred to as `parallel` states. However, within any of the lists, a state cannot be `selected` and `unselected` at the same time because they are mutually exclusive.

### Example of parallel states when putting the machine through the visualizer:

![Parallel States Visual](https://res.cloudinary.com/dzeqyvxo2/image/upload/v1596502942/Screen_Shot_2020-08-03_at_9.01.37_PM_eezeos.png)