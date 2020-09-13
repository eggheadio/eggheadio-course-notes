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
