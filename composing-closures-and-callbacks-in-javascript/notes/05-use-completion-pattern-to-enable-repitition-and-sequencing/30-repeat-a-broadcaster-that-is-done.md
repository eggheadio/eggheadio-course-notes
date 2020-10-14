# Repeat a Broadcaster that Is Done

[📹 Video](https://egghead.io/lessons/egghead-repeat-a-broadcaster-that-is-done)

- I found it useful to go back and check the previous implementations or our operators and broadcasters, because we just saw how we can refactor them thinking of new use cases.
- Checking the `done` value is a good example of how by calling our listeners with the `done` value we can add additional behavior to them.
- Making sure to return a reference to our broadcasters is needed if we want the user of our functions to cancel them at any time.

## Resources and References

- [createTimeout](https://egghead.io/lessons/egghead-create-a-function-to-configure-settimeout)
