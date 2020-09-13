Utility class prefixes are *expensive*.

If Tailwind supports 100 styles (it supports more), and offers each of those styles in 3 breakpoints (it has more), and each of those variants gets `hover:`, `focus:`, and `group-hover:` prefixes (for which there are **many** more), the number of individual classes that generates is astonishing

Tailwind's default palette has 10 colors each with 9 shades (100 to 900) plus black and white, totalling 92 colors.

You can set the background color with classes ranging from `.bg-gray-100` to `.bg-pink-900`.

If Tailwind supports 92 colors (it can support more) and also offers each color class in 3 breakpoints (it does support more), and each of those variants gets unprefixed plus `hover:`, `focus:`, and `group-hover:` prefixes (for which there are **many** more), the number of individual classes that generates is astonishing

* `.bg-green-500`
* `.sm:bg-green-500`
* `.md:bg-green-500`
* `.lg:bg-green-500`
* `.xl:bg-green-500`
* `.hover:bg-green-500`
* `.sm:hover:bg-green-500`
* `.md:hover:bg-green-500`
* `.lg:hover:bg-green-500`
* `.xl:hover:bg-green-500`
* `.focus:bg-green-500`
* `.sm:focus:bg-green-500`
* `.md:focus:bg-green-500`
* `.lg:focus:bg-green-500`
* `.xl:focus:bg-green-500`
* `.group-hover:bg-green-500`
* `.sm:group-hover:bg-green-500`
* `.md:group-hover:bg-green-500`
* `.lg:group-hover:bg-green-500`
* `.xl:group-hover:bg-green-500`

To do some quick math, 92 * 4 * 4 is 1472 classes *just for setting the background color*. 

To combat this, prefixes are only generated for specific classes specified in the Tailwind config.

> Changelog: The video shows these as being under the `modules` heading in the options. This has changed in a Tailwind update.

```js
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundImage: ['responsive'],
    gradientColorStops: ['responsive', 'hover', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    …
```

To stop Tailwind from generating the prefixes for each breakpoint, remove the `responsive` variant from that item.

```diff
-   backgroundColor: ['responsive', 'hover', 'focus'],
+   backgroundColor: ['hover', 'focus'],
```

> Tip: Remember to recompile Tailwind by running the command `gulp` after editing the config
