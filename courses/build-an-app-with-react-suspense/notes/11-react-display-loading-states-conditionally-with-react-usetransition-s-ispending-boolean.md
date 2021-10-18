# Display Loading States Conditionally with React.useTransition's isPending Boolean

**[📹 Video](https://egghead.io/lessons/react-display-loading-states-conditionally-with-react-usetransition-s-ispending-boolean)**


> 🔑It's a good practice to give users immediate feedback while asynchronous work is being completed.

Be able to show some change in the UI that represents that something is happening after the user action is an important aspect of any UI application.
In this example by using `useTransition` along with the optional `timeoutMs` option we ensure that if we're on a slow connection the UI hold on the previous pokemon data rendered as we wait for the next Pokemon to resolve.
But how can we add feedback to the user action? **React gives us a way to indicate that the button was clicked even while we're waiting for more data to arrive.**

`useTransition` hook returns a tuple, the second element of this tuple is a boolean known as `isPending`. We can use this boolean to conditionally render 
certain UI component
```javascript
let [startTransition, isPending] = React.useTransition({ timeoutMs: 1000});
```

We can use this `isPending` boolean to identify when the fetching is happening and change the state of our UI accordingly, for example., to dispable the button to avoid user to press again while fetching or even to show something like an spinner.
```jsx
<button
  type="button"
  disabled={isPending}
  onClick={() =>
    startTransition(() => 
      setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
    )
  }
>
  Next {isPending && "..."} 
</button>

```
```jsx
return(
<div>
  {pokemon.name} {isPending && <DelaySpinner />}
</div>
)

```
`<DelaySpinner>` is a simple component,  just an emoji spinner, wrapped in a span with some ARIA attributes, so that can be read by a screen reader and a class with some inline CSS to make it rotate
```jsx
const DelaySpinner = () => {
    return (
        <span role="img" aria-label="spinner" className="DelaySpinner">
            <style>{`
                .DelaySpinner {
                    animation: rotation 1.5s infinite linear;
                    display: inline-block;
                    font-ize: .7rem;
                }
                @keyframes rotation {
                    from { transform: rotate(0deg)}
                    to { transform: rotate(360deg)}
                }
            `}</style>
            🌀
        </span>
    )
}

```

🔮This deliver a nice experience for **slow connections**, note that the lesson is shown using the Chrome Devtools to throttle the network requests simulating a **3G** connection
---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-bypass-receded-views-with-react-usetransition-s-timeoutms-option)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-delay-the-appearance-of-a-loading-spinner-with-css-in-react)
