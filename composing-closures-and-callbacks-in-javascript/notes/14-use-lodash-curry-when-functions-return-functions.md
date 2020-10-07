# Use lodas curry when functions return functions
**[📹 Video](https://egghead.io/lessons/egghead-use-lodash-curry-when-functions-return-functions)**

- `curry` from `lodash` helps us to simplify all the function chaining we have in our code, by changing its function signature to one that accepts multiple argumets, but still treat it as multiple functions that accept just une parameter (unary functions).
- There are multiple benefits of the _curried_ function signature
  - you don't have to have all the required parameters at the same time to start _capturing_ them
  - you can store intermediate functions to use them elsewhere or even break complex computation into smaller ones, by calling all this unary functions at different times
  - you can write function inline, so you don't need to name all the intermediate functions

## References

- [What is a JavaScript Function Currying? by John Lindquist](https://egghead.io/lessons/javascript-what-is-javascript-function-currying)
- [Currying and Partial Application in JavaScript (ES5 & ES6) by Kyle Shevlin](https://egghead.io/lessons/javascript-currying-and-partial-application-in-javascript-es5-es6)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-combine-multiple-async-behaviors-with-a-merge-function-9197a499)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-match-function-requirements-with-lodash-partial-and-flip)