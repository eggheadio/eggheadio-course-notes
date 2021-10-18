# 00. Develop Accessible Web Apps with React

**[📹 Video](https://egghead.io/courses/develop-accessible-web-apps-with-react)**

**[💻 Course Repo](https://github.com/erin-doyle/egghead-react-a11y/tree/labels)**


## Notes on Notes 🤓

The word accessibility is often abbreviated to **a11y** with the number eleven in the middle (this refers to the number of letters that the word contains between the first and last letter - a numeronym). It's [pronounced as](https://a11yproject.com/posts/a11y-and-other-numeronyms/) “A-one-one-Y”, “A-eleven-Y”, and liberally as “ally”.

### What Is Web Accessibility?

Web accessibility covers the following topics (and more):
- keyboard navigation
- focus
- semantic HTML
- color contrast
- ARIA
- alt attribute
- error messages
- captioning
- instructions
- readability
- consistency

### Important Acronyms

- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/): Web Content Accessibility Guidelines
- [WAI](https://www.w3.org/WAI/): Web Accessibility Initiative
- [ARIA](https://www.w3.org/TR/wai-aria/): Accessible Rich Internet Applications

### A11y Tools Reference Guide

The course mentions a couple of different tools that will help you with your a11y testing and fixing accessibility issues (this list is not exhaustive).
- [aXe browser plugin](https://www.deque.com/axe/) developed by [Deque](https://www.deque.com/)(an authority on a11y). The tool is available for both Chrome and Firefox. Once installed, you can locate it in your browser's developer tools. It's a fast and easy way for testing and debugging.
- [tota11y Plugin](https://khan.github.io/tota11y/) was developed by [Khan Academy](https://www.khanacademy.org/). It is very similar to aXe, but instead of your developer tools, you can toggle in your extension (add-ons) menu. Available for both Firefox and Chrome. Unlike with aXe you'll have to go through the 6 different accessibility tests separately (which is quite handy if you're a newcomer to all things a11y). You can choose from: Headings, Contrast, Link text, Labels, Image alt-text and Landmarks.
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) can be added on top of your `eslint` linter in your React project. This is a quick and handy way for making a11y testing a part of your developer workflow (and potentially every commit).

### Emoji Legend

| emoji| explanation              |
| -----|:------------------------:|
| 📹   | links to the course video|
| 💻   | course repository        |
| ⌨️    | keyboard shortcut        |
| 🤔   | additional resources     |
| 👍   | good practice            |
