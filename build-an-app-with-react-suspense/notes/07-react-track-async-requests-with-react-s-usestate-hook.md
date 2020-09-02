# Track Async Requests with React's useState Hook

**[📹 Video](https://egghead.io/lessons/react-track-async-requests-with-react-s-usestate-hook)**

At this point, the component is able to dynamically fetch a pokemon based on some ID and also to communicate the fetch status to the Suspense and Error Boundaries, the next step is to enable it to fetch the next Pokemon.

This is where the `useState` hook enters to the game.



> 📝 The useState Hook is the best way to track state in React. It's capabilities aren't limited to known values either. State can be set with asynchronously resolved values as well — like the result of a fetch request. Wrapped promises can be given to useState to communicate promise status for state transitions.

The hook `useState` accepts argument an initialState that in this case is being called `initialPokemon` and returns a tuple with the state value and a function used ot update the state.

📄 You can see more information in the [oficial documentation of useState](https://en.reactjs.org/docs/hooks-state.html)



👍 Sometimes is good to do some cosmetic changes that improve readability and maintenance of the code like in this example, rename the state value to `pokemonResource` and then use an auxiliar variable called `pokemon` to store the data returned by `pokemonResource.read()` . With this the following code is cleaner since is not required to call `read()` every time a value need to be accessed.



The updater function returned by `useState`,  called  `setPokemonResource` in this example, is used to update the state value and can be called from some event handler as the `onClick` event in a button.

In this example, to fetch the next pokemon, the updater function will call the  same function as the `initialPokemon` but with a different `id` and to make that id dynamic we can use the previous state value that comes from the `pokemon` variable.



---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-separate-api-utility-functions-from-react-components)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-enable-suspense-features-with-experimental-concurrent-mode-using-reactdom-createroot)
