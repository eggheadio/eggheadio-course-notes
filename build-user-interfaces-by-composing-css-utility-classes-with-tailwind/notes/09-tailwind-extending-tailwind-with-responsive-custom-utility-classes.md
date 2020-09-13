Since the `style.css` is a regular css file, you can add as many custom rules as you wish.

```css
@tailwind preflight;
@tailwind utilities;

.bg-gradient-blue {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
}

.bg-gradient-orange {
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ff2525 0%, #ffe53b 74%);
}
```

Tailwind does NOT generate responsive prefixed utilities for these classes, since they exist entirely outside of Tailwind.

Fortunately, the `@variants` directive is here to solve this. 

```diff
+ @variants hover {
    .bg-gradient-blue {
      background-color: #21d4fd;
      background-image: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
    }

    .bg-gradient-orange {
      background-color: #ffe53b;
      background-image: linear-gradient(147deg, #ff2525 0%, #ffe53b 74%);
    }
+ }
```

In a similar fashion, the @responsive directive can create all the responsive prefixes.

> Changelog: The video shows `@variants hover, responsive` as a single directive. While this still works, the @responsive directive was added to enforce that responsive utilities take precedence over the unresponsive ones.

```diff
+ @responsive {
    @variants hover {
      .bg-gradient-blue {
        background-color: #21d4fd;
        background-image: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
      }

      .bg-gradient-orange {
        background-color: #ffe53b;
        background-image: linear-gradient(147deg, #ff2525 0%, #ffe53b 74%);
      }
    }
+ }
```

> Tip: Remember to recompile Tailwind by running the command `gulp` after adding directives

Given the above directives, Tailwind will generate a prefixed collection of utility classes that looks like this:

* .bg-gradient-blue
* .hover:bg-gradient-blue
* .sm:bg-gradient-blue
* .md:bg-gradient-blue
* .lg:bg-gradient-blue
* .xl:bg-gradient-blue
* .sm:hover:bg-gradient-blue
* .md:hover:bg-gradient-blue
* .lg:hover:bg-gradient-blue
* .xl:hover:bg-gradient-blue
* .bg-gradient-orange
* .hover:bg-gradient-orange
* and so on

The same pattern can be extended to the other variants, such as `focus` and `group-hover`

```diff
  @responsive {
-   @variants hover {
+   @variants hover, focus, group-hover {
      .bg-gradient-blue {
```