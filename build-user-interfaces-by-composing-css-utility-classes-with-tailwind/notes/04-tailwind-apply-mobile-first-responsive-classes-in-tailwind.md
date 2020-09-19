📹[Apply mobile-first Responsive Classes in Tailwind](https://egghead.io/lessons/tailwind-apply-mobile-first-responsive-classes-in-tailwind)

The Tailwind configuration defines its breakpoints in the `screens` object.

```js
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  }
```

For each of these breakpoints, Tailwind generates a suite of prefixed utility classes that target each media query. Here is an example:

To apply a white text color on the smallest breakpoint, apply the class `.sm:text-white`. A blue color on the next breakpoint would be `.md:text-blue`.

This is a big deal. One of the most common complaints about utility classes is how similar it is to inline CSS. Why use a library that gives you `class="text-center"` when you could just use `style="text-align: center;"`? Inline styles do not support media queries, so this is a major advantage of Tailwind.

```html
<section class="
  bg-purple-lighter
  sm:bg-pink-light
  md:bg-green
  lg:bg-blue
">
```

Classes for large breakpoints will override classes for small breakpoints

The smallest screens will have the `purple-lighter` background. Between 576px wide and 768px wide, the `pink-light` background will apply. Larger screens will be green up until they cross 992px, above which they will be overridden by blue.

If you find that this overriding is overkill, and that you would rather have one class that turns itself on when the browser width is inside the range and turns itself off when the browser width is outside the range, you can instead set the breakpoint to an object containing `min` and `max` values.

```diff
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
+   range: { min: "500px", max: "700px" },
  }
```

> Tip: Remember to recompile Tailwind by running the command `gulp` after editing the config

This `range` breakpoint does exactly what you expect it to, and can be used with the utility classes in much the same way the others are.

```diff
<section class="
  bg-purple-lighter
  sm:bg-pink-light
  md:bg-green
  lg:bg-blue
+ range:border-black
+ range:border-b-8
">
```

Between the pixels of 500 and 700 wide, this section will be decorated with a black bottom border. 

If that's not enough power, try passing an array of objects instead.

```diff
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    range: { min: "500px", max: "700px" },
+   skip: [
+     { min: "500px", max: "700px" },
+     { min: "900px" }
+   ] 
]
  }
```

> Tip: Remember to recompile Tailwind by running the command `gulp` after editing the config

After recompiling Tailwind, add the `skip:uppercase` class to your heading and it will display in all caps for as long as the browser width is either between 500px and 700px or wider than 900px

Next lesson: [Style Elements on hover and focus with Tailwind’s State Variants](https://egghead.io/lessons/tailwind-style-elements-on-hover-and-focus-with-tailwind-s-state-variants)

Previous: [Create Custom Utility Classes in Tailwind](https://egghead.io/lessons/tailwind-create-custom-utility-classes-in-tailwind)