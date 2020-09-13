In a similar fashion to the responsive prefixes, Tailwind offers prefixes for pseudo-selectors such as `hover` and `focus`.

This is another point where Tailwind shines compared to raw inline CSS. Styling on hover or focus is impossible with inline styles directly.

To change the text color on hover, add the class `.hover:text-orange`. To change the background color on focus, add the class `.focus:bg-yellow`

If you want to combine responsive prefixes with pseudo-selector prefixes, the responsive prefix comes first, as in `.md:hover:bg-black`