# Create a Custom useListener Hook around useCallback

*[📹 Video](https://egghead.io/lessons/egghead-create-a-custom-uselistener-hook-around-usecallbackk)*

## Creating a customer listener hook

We can get the code from the previous lesson and turn it into a customer listener hook, allowing us to use it in the future.

```javascript
let useListener = () => {
    let listener

    let callbackListener = value => {
        if (typeof value === "function") {
            listener = value
            return
        }
        listener(value)
    }

    return useCallback(callbackListener, deps)
}

```

We need to add the dependencies array on the `return useCallback(callbackListener)` because like the `useEffect` hook, if we don't, the `useCallback` reset our code `listener = value`


---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-pass-a-listener-to-a-usecallback-hook)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-explaining-the-uselistener-code)