# De-prioritize NonUser-Blocking Updates with React useTransition's startTransition Function

**[📹 Video](https://egghead.io/lessons/react-de-prioritize-nonuser-blocking-updates-with-react-usetransition-s-starttransition-function)**

After enabling concurrent mode there is still a couple of this to change like the way the application is triggering blocking events.
The error shown when clicking in the button

 ```Warning. Pokémon Detail triggered a user-blocking update that suspended. The fix is to split the update into multiple parts, a user-blocking update to provide immediate feedback and another update that triggers the bulk of the change. Refer to the documentation for useTransition to learn how to implement this pattern.
```

🔑 This error means that the application is performing a tasks that can potentially block the user interface. In this case is not notorious since the fetch call is fairly quick, but if the tasks is longer will block the user to do something else.
To avoid this, the experimental build of React offers a new hook `useStransition` that returns a function `startTransition` that will help us to avoid this error.

We use [useTransition](https://reactjs.org/docs/concurrent-mode-patterns.html#transitions) to communicate that we're OK with running this update slightly deprioritized if it'll keep the UI nice and snappy for the customer.
```javascript
let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
let [startTransition] = React.useTransition()
let pokemon = pokemonResource.read();

return (
 <div>
  {pokemon.name}{" "}
    <button
      type="button"
      onClick={() =>
      startTransition(() =>
        setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
        )
      }
    >
      Next 
    </button>
  </div>
);
```

We've now successfully deferred this state update by using startTransition from the useTransition hook.
---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-enable-suspense-features-with-experimental-concurrent-mode-using-reactdom-createroot)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-bypass-receded-views-with-react-usetransition-s-timeoutms-option)
