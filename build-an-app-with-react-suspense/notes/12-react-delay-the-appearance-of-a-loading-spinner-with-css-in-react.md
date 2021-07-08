# Delay the Appearance of a Loading Spinner with CSS in React

**[📹 Video](https://egghead.io/lessons/react-delay-the-appearance-of-a-loading-spinner-with-css-in-react)**

Our current UI that shows a spinner as feedback to the user that something is happen after clicking the button work nice for slow connections, but in faster connections, this experience is not good since the network request is fast enough that the `isPending` boolean change too quickly from `true` to `false` showing the spinner just for a split second.

The current state of the Suspense implementation doesn't have a direct way to handle this, is likely that the same `useTransition` hook will take care of delaying the `isPending` value but for now the documented path is to code a workaround with CSS for the loading spinner.

To delay the display of the spinner we can use a css animation that takes 0 secons to perform but wait for 0.5 seconds to start. The animation will transiation from an invisible element to make it visible.

```jsx
function DelaySpinner() {
  return (
    <span role="img" aria-label="spinner" className="DelaySpinner">
      <style>{`
        .DelaySpinner {
          animation: 0s linear 0.5s forwards makeVisible, rotation 1.5s infinite linear;
          display: inline-block;
          font-size: .7rem
        }
        @keyframes makeVisible {
           to {
          visibility: visible;
          }
        }
        @keyframes rotation {
          from { transform: rotate(0deg) }
          to { transform: rotate(359deg) }
        }
      `}</style>
      🌀
    </span>
  );
}
```

Now in a fast connection the spinner is not shown, since is not required but in a slow connection the spinner is rendered after 0.5 seconds. This type of interactions helps to make the UI faster by using this intermeiate states.
---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-display-loading-states-conditionally-with-react-usetransition-s-ispending-boolean)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-get-previous-resource-values-with-react-s-usedeferredstate-hook)
