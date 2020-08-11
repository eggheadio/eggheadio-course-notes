# Handle HTTP Request State with Xstate

- [Video link](https://egghead.io/lessons/react-handle-http-request-state-with-xstate)
- [Code](https://github.com/isaacplmann/sturdy-uis/tree/lesson1-end)

### Notes

In order to make the network call we will use three pieces of state.

- `isLoading`
- `results`
- `errorMessage`

```jsx
export interface Person {
    name: string;
    homeworld: string;
}

const [isLoading, setIsLoading] = useState(false);
const [results, setResults] = useState<Person[]>([]);
const [errorMessage, setErrorMessage] = useState('');
```

_Knowing and tracking what a piece of state is at a given time is extremely important and we need to be very careful to set these variables to specific values in order to display the correct UI for our app_

1. We need to set `isLoading` to `true` when we initate the fetch request

2. We set the `results` that we get back to state and once that is done, we need to set `isLoading` back to `false`

**We need to make sure to set `isLoading` to false in a error state and set the `errorMessage` with the `result`**

This is what our component should look like.

- Hint: There are a few 🐛 in our code which we will address

```jsx
function App() {

function fetchData() {
    setIsLoading(true);
    fetchPeople()
        .then(r => r.results)
        .then (
            res => {
                setResults(res);
                setIsLoading(false);
            },
            message => {
                setErrorMessage(message);
                setIsLoading(false);
            }
        );
}

return (
	<div className="App">
		<button onClick={() => fetchData()}>Fetch</button>
		{ isLoading ? <p>Loading</p> : null }
		{ !isLoading && !errorMessage ? (
			<ul>
				{ results &&
					results.map((person, index) => (
						<li key={index}>{person.name}</li>
					))}
			</ul>
		) : null }
		{ !isLoading && errorMessage ? (<p>{errorMessage}</p>) : null }
	);
}
```

- First bug: the `errorMessage` was not set during the succesful response

```js
.then (
    res => {
        setResults(res);
        setIsLoading(false);
        setErrorMessate('') 👈// needs to be set to empty string
    },
    message => {
        setErrorMessage(message);
        setIsLoading(false);
    }
);
```

### Create folder for our machines and add first machine

1. `mkdir src/machines`
2. `touch src/machines/fetch.ts`

In `src/fetch.ts`, let's export `fetchMachine`

```js
import { Machine } from "xstate";

export const fetchMachine = Machine({
  id: "fetch",
  initial: "idle",
  states: {
      idle: {}, 👈 // when no network call has been made yet
      pending: {}, 👈 // when network call is in progress
      failed: {}, 👈 // when there is an error that has been returned
      successful: {} 👈 // when a valid response has come back
  },
});
```

🔮 We need to think about the events can trigger a transition from one state to another
  - For example: when we are in the `idle` state and a `fetch` event happens, we want to transition to the `pending` state, etc.

We can define our events as such:

```js
idle: {
    on: {
        FETCH: 'pending' 👈// from idle we transition to idle
    }
},
pending: {
    on: {
        RESOLVE: 'successful',  👈 // from pending it can either transition
        REJECT: 'failed'           // to successful or to failed state
    }
},
failed: {
    on: {
        FETCH: 'pending' 👈 // retrying the fetch will set us back to
    }                       // square 1. We skip the idle state
},
successful: {
    on: {
        FETCH: 'pending'
    }
}
```

![Visualizer](https://res.cloudinary.com/dzeqyvxo2/image/upload/v1596053465/Screen_Shot_2020-07-29_at_4.07.13_PM_hsmjou.png)

- In `idle` nothing is happening, then we trigger a fetch request
- `fetchData` is triggered and we transition to `pending` state
- In `pending` we have two paths, either it `resolves` or it is `rejected`
  - `resolve` results in `successful` state
  - `reject` results in `failed` state and can lead to a `fetch` retry and start from square one

### Add actions to our machine

"_[Actions](https://xstate.js.org/docs/guides/actions.html) are fire-and-forget "side effects". For a machine to be useful in a real-world application, side effects need to occur to make things happen in the real world, such as rendering to a screen_"

**Example of an action:**

- We use the built-in `assign` in this case
- Value is a callback that returns an `object`
- We assign `event.results` to the `results` to be able to access it through context
- We add the `ctx` argument to have access to the previous context

```js
actions: {
  setResults: assign((ctx, event: any) => ({
    results: event.results,
  }));
}
```

👆We pass this a second arugment to our `fetchMachine` function

We add our action to the `pending` state so that when we reach the `RESOLVE` state we fire this action

```js
pending: {
    on: {
        RESOLVE: {target: 'successful', action: ['setResults']},
        REJECT: {target: 'failed', action: ['setMessage']} 👆// setResults
        👆// add action to handle errors *important*
    }
}
```

In order to fetch data we need to tell the machine what method to use

```js
pending: {
    entry: ['fethData'] 👈 // this will map to the function we use later
    on: {
        RESOLVE: {target: 'successful', action: ['setResults']},
        REJECT: {target: 'failed', action: ['setMessage']}
    }
}
```

We import the machine into the `App.tsx` component and use the builtin
`xState` hook `useMachine` to provide `fetchMachine` with the actions to execute

```js
import { fetchMachine } from './machines/fetch';
import { useMachine } from '@xstate/react';

function App() {
	const [fetchState, sendToFetchMachine] = useMachine(fetchMachine, {
		actions: { 👇 // the action we defined in entry will map
			fetchData: (ctx, event) => {        // to this method
		fetchPeople()
			.then(r => r.results)
			.then (
				res => {
					sendToFetchMachine({type: 'RESOLVE', results: res})
				},                      👆 // adds results to context
				message => {
					sendToFetchMachine({type: 'REJECT', message})
				}                       👆 // adds error message
			);
			}
		}
	});
	...
}
```
