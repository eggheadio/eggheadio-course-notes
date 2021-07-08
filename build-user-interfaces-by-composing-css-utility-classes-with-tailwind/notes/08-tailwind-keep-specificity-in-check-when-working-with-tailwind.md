📹[Keep Specificity in Check when Working with Tailwind](https://egghead.io/lessons/tailwind-keep-specificity-in-check-when-working-with-tailwind)

Tailwind utility classes are almost always written with a single class-selector [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

Any custom CSS rule that contains only a class selector `.hero-headline { }` will weigh the same as most Tailwind utility classes, and therefore whichever was declared *last* will take effect.

You can override Tailwind classes by declaring your custom ones after importing Tailwind in `style.css`

```css
.will-be-overridden {
  color: tomato;
}

@tailwind preflight;
@tailwind utilities;

.will-override {
  font-weight: 900;
}
```

If you must declare your classes last (for example, when using another library on top of Tailwind) but want Tailwind utilities to take over, each rule can be generated with the `!important;` marker.

To do this, set the option `important: true` in the Tailwind config.

```diff
  options: {
    prefix: "",
-   important: false,
+   important: true,
    separator: ":"
  }
```

> Tip: Remember to recompile Tailwind by running the command `gulp` after editing the config

Next lesson: [Extending Tailwind with Responsive Custom Utility Classes](https://egghead.io/lessons/tailwind-extending-tailwind-with-responsive-custom-utility-classes)

Previous: [Control What Variations are Generated for Each Utility Class Module in Tailwind](https://egghead.io/lessons/tailwind-control-what-variations-are-generated-for-each-utility-class-module-in-tailwind)