📹[Abstract Utility Classes to BEM Components in Tailwind](https://egghead.io/lessons/tailwind-abstract-utility-classes-to-bem-components-in-tailwind)

One of the major problems with utility classes is that of repetition; or rather, of how you manage to avoid repetition.

Consider a button like this: 
```html
<button class="bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded mr-1 mb-2">
  Button
</button>
```

Now, consider three buttons like that, with different colors:
```html
<button class="bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded mr-1 mb-2">
  Button
</button>

<button class="bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded mr-1 mb-2">
  Button 2
</button>

<button class="bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded mr-1 mb-2">
  Button 3
</button>
```

It's easy enough to see how this much repetition can become a problem. If you decide that bold buttons are bad then your mission, should you choose to accept it, becomes to hunt down every button in your application and remove the `.font-bold` class.

Fortunately, solutions for this problem are numerous. If you're working within a modern component based framework, then you can create a `CustomButton` component once with all its classes defined in one place, and then use your CustomButton across the codebase.

If that doesn't work for you, Tailwind has another solution in the form of the `@apply` directive. You can copy paste the entire class string directly into @apply. In this case, we'll leave out the background color classes for now.

> Changelog: In the video, every class after @apply has a leading dot like `@apply .bg-purple .text-white`. This has been removed in Tailwind v1.7

> Changelog: In the video, the `:hover` styles are removed from the main `.button` class and applied separately in the `.button:hover` class. Separating these is no longer necessary as of Tailwind v1.7

```diff
  @tailwind preflight;

+ .button {
+   @apply bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded;
+ }

  @tailwind utilities;
```

> Tip: Leave margins out of your components and applied classes to avoid restricting the locations they can be used.

```diff
- <button class="bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded mr-1 mb-2">
+ <button class="button mr-1 mb-2">
    Button
  </button>

- <button class="bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded mr-1 mb-2">
+ <button class="button mr-1 mb-2">
    Button 2
  </button>

- <button class="bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded mr-1 mb-2">
+ <button class="button mr-1 mb-2">
    Button 3
  </button>
```

To change the background color, one option is to add the utility classes for color directly again.

```diff
  <button class="button mr-1 mb-2">
    Button
  </button>

- <button class="button mr-1 mb-2">
+ <button class="button mr-1 mb-2 bg-pink hover:bg-pink-dark">
    Button 2
  </button>

- <button class="button mr-1 mb-2">
+ <button class="button mr-1 mb-2 bg-teal hover:bg-teal-dark">
    Button 3
  </button>
```

We can, of course, extract those classes into their own modifier class using `@apply` the same way we did for `.button`. While the modifier class can be named anything we want, a popular standard for naming is the [Block Element Modifier](http://getbem.com/) convention.

```diff
  @tailwind preflight;

  .button {
    @apply bg-purple hover:bg-purple-dark text-white font-bold px-4 py-2 rounded;
  }

+ .button--pink {
+   @apply bg-pink hover:bg-pink-dark
+ }

+ .button--teal {
+   @apply bg-teal hover:bg-teal-dark
+ }

  @tailwind utilities;
```
```diff
  <button class="button mr-1 mb-2">
    Button
  </button>

- <button class="button mr-1 mb-2 bg-pink hover:bg-pink-dark">
+ <button class="button mr-1 mb-2 button--pink">
    Button 2
  </button>

- <button class="button mr-1 mb-2 bg-teal hover:bg-teal-dark">
+ <button class="button mr-1 mb-2 button--teal">
    Button 3
  </button>
```

Adding custom classes for pill and square shaped buttons follows the exact same pattern

```css
 .button--pill {
   @apply rounded-full
 }

 .button--square {
   @apply rounded-none
 }
```
```html
  <button class="button mr-1 mb-2 button--pink button--pill">
    Pill
  </button>

  <button class="button mr-1 mb-2 button--teal button--square">
    Square
  </button>
```

Next lesson: [Create a Responsive Card Component by Composing Tailwind's Utility Classes](https://egghead.io/lessons/tailwind-create-a-responsive-card-component-by-composing-tailwind-s-utility-classes)

Previous: [Extending Tailwind with Responsive Custom Utility Classes](https://egghead.io/lessons/tailwind-extending-tailwind-with-responsive-custom-utility-classes)