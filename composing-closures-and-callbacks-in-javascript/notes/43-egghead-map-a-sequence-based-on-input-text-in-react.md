# Map a Sequence Based on Input Text in React

**[📹 Video](https://egghead.io/lessons/egghead-map-a-sequence-based-on-input-text-in-react)**

- as the title says, in this lesson you see how he takes the previous `broadcaster` function, wraps it with a new function that accepts the message, and the call it passing it the result of the text input function we had above.
- after the user press the Enter key, the value of the input becomes the imput of the new `messageSequence` function.
- he also uses the `pipe` function from `lodash` to makes it cleaner and more readable.
- another place where this technique of wrapping a functionality with a function to make it reusable is used with the new `filterByKey` operator. it wraps it with a function passing it a `key` parameter, which is used inside in the filter `predicate` function
- custom operators are just other operators based on `filter` and `map`

## Resources and References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/react-input-map-sequence/src/index.js)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-handling-an-enter-keypress-with-uselistener-and-react)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-creating-a-debounce-operator-to-limit-listener-calls)
