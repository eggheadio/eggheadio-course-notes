# 19. Tween a value and dynamically update the DOM with Svelte 3

[Video Link](https://egghead.io/lessons/svelte-tween-a-value-and-dynamically-update-the-dom-with-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- Tween is a svelte function that dynamically updates values of variables from an initial value to a new value.
- `import {tweened} from "svelte/motion"`
- `tweened` is uesd like this:

  ```
    const progress = tweened(0, {
      duration: 2000,
      easing: bounceInOut
    })
  ```

- The first value (in this case 0) is the initial value to set the variable to, the second value is an object with some parameters for the animation - namely the `duration` in milliseconds it will take to reach the final value, and an `easing` function if you want the variable to update non-linearly.
- If you want to learn more, here is the [Svelte Tutorial on tweened](https://svelte.dev/tutorial/tweened).
