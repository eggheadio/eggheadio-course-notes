📹[Change Styles on Multiple Elements with Tailwinds group-hover](https://egghead.io/lessons/tailwind-change-styles-on-multiple-elements-with-tailwinds-group-hover)

If you want to update styles for muliple children elements while hovering over a parent, Tailwind offers the `.group` class and the `group-hover:` prefix

```html
<div class="p-4 inline-block bg-grey-light hover:bg-purple-dark">
  <h2 class="mb-1 text-grey-darkest">
    Headline text
  </h2>

  <p class="text-grey-darker">
    This is the paragraph copy
  </p>
</div>
```

Adding `.hover:text-white` to the heading and the paragraph will only change their color when each bit of text is hovered. To highlight the text in sync with the card background changing (because of the `.hover:bg-purple-dark` class), add `.group` to the card and `.group-hover:text-white` to the text

```diff
- <div class="p-4 inline-block bg-grey-light hover:bg-purple-dark">
+ <div class="p-4 inline-block bg-grey-light hover:bg-purple-dark group">
-   <h2 class="mb-1 text-grey-darkest">
+   <h2 class="mb-1 text-grey-darkest group-hover:text-white">
      Headline text
    </h2>

-   <p class="text-grey-darker">
+   <p class="text-grey-darker group-hover:text-white">
      This is the paragraph copy
    </p>
  </div>
```

Next lesson: [Control What Variations are Generated for Each Utility Class Module in Tailwind](https://egghead.io/lessons/tailwind-control-what-variations-are-generated-for-each-utility-class-module-in-tailwind)

Previous: [Style Elements on hover and focus with Tailwind’s State Variants](https://egghead.io/lessons/tailwind-style-elements-on-hover-and-focus-with-tailwind-s-state-variants)