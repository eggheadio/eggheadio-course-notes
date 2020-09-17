# Use Pipe to Clean Up Functions Wrapping Functions

**[📹 Video](https://egghead.io/lessons/egghead-use-pipe-to-clean-up-functions-wrapping-functions)**

In our previous lesson we had this piece of code that apply all of our operators to get a typewriting experience in lowercase and without `,` symbol.

```javascript
let typeGreeting = map(toLower, modify(filter(x => x != ",", map(x => x[1], zip(
  createInterval(100),
  forOf("Hello, John")
)))))

```

But it's clearly that this is hard to read and to maintain, miss a parenthesis is quite easy so we need to find out a solution that can avoid this kind of mistakes and problems but keep the same logic that we have here.

The solution for this mess is another pattern known as **compose** an idea that comes from the function programming world, that basically defines how to apply multiple function in chain.

We can use an utility from `lodash/fp` call [`compose`](https://lodash.com/docs/#flowRight) that is an alias of  another function called [`flowRight`](https://lodash.com/docs/#flowRight). We can import `compose` from `lodash/fp`.

`compose` returns a function from a collection of operators

```javascript
let operators = compose(
  map(toLower),
  modify,
  filter(x => x != ","),
  map(x => x[1]),
)
```



`operators` is a new `operator` that we can use to wrap our `zip` broadcaster 

```javascript
let typeGreeting = operators(zip(
  createInterval(100),
  forOf("Hello, John")
))
```

This is the same behavior as before, the main purpose of using compose here is to avoid the messy code that we had before by simplify the way the behavior is written.



> 🔑 the only reason that this works is if you look at our operators, they each take a broadcaster. That means when we compose these, the result is a function called operators that takes a broadcaster

* `compose` works by reading the functions from bottom to top, the first step is take a letter from the array, then filter the commas, append the letters and then lower case the resulting string.

Another function that is commonly use for this same purpose is `pipe`. This utility works in the same way as `compose` but let us write the functions in the way that it reads from top to bottom. 

```javascript
let operators = pipe(
  map(x => x[1]),
  filter(x => x != ","),
  modify,
  map(toLower),
)
```



> 🚨 the difference between pipe and compose is the order you pass these functions

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/compose-pipe/src/index.js)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-prevent-certain-values-with-a-filter-operator)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-start-with-the-api-you-want-then-implement)


