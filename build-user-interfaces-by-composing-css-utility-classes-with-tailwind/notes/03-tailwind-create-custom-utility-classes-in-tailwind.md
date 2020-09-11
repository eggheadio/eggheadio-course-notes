We'll start with a purple paragraph and its heading, and using Tailwind we generate utility classes that will adjust its padding to one of any custom value.

```js
  <section class="bg-purple-lightest">
    <div class="container mx-auto px-6">
      <h2 class="text-purple-darker mt-0 mb-3 leading-tight">
        Paragraph title
      </h2>

      <p class="text-purple-darker">
        Lorem ipsum dolor sit amet…
      </p>
    </div>
  </section>
```

Bootstrap popularized a particular pattern for padding utilities that Tailwind has adopted also. The class `.py-8` will add a generous amount of padding to both the top and bottom of the section.

```diff
- <section class="bg-purple-lightest">
+ <section class="bg-purple-lightest py-8">
```

The general rule goes like this:
```
.p{side?}-{size}
```

The first letter is either `p` for padding or `m` for margin.

It is optionally followed with a **side** modifier, which is also a single letter.

* pt: padding-top
* pb: padding-bottom
* py: padding-top AND padding-bottom
* pl: padding-left
* pr: padding-right
* px: padding-left AND padding-right
* p: top, left, bottom, AND right

The final modifier (after the hyphen) is required and controls the **size** of the padding. 

The default configuration maps a size of `8` to a value of `2rem`, therefore, the class `.py-8` will apply a `2rem` padding to the top and bottom of the section.

```css
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.mx-0 {
  margin-left: 0;
  margin-right: 0;
}
```

The exact size for each value is configured in the `tailwind.js` file. This offers a fantastic degree of customization, such that any size can become a new utility class perfectly tuned to our design.

For example, if `.py-8` isn't quite enough padding, we might choose to create a new rule that's twice its size: `.py-16`

```diff
padding: {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "6": "1.5rem",
  "8": "2rem",
+ "16": "4rem",
}
```

The numerical scale is a common pattern that scales up and down exceptionally well. If there were ever a need for `3rem` padding its class would naturally fit into the scale at `p-12`, but there are no hard rules here.

Let's add a new size called `crazy` that's even bigger than the biggest size so far

```diff
  "6": "1.5rem",
  "8": "2rem",
  "16": "4rem",
+ "crazy": "8rem"
}
```

Run the gulp task again: Tailwind recompiles, classes are generated, and new paddings are available. 

```sh
gulp
```
```diff
- <section class="bg-purple-lightest py-8">
+ <section class="bg-purple-lightest py-16">
```

A simple change from `.py-8` to `.py-16` doubles the vertical padding, and from `.py-16` to `.py-crazy` doubles it yet again.

```diff
- <section class="bg-purple-lightest py-16">
+ <section class="bg-purple-lightest py-crazy">
```
