 # 19. Add an Accessible Label to an Element from the Text of Other Elements

**[📹 Video](https://egghead.io/lessons/react-add-an-accessible-label-to-an-element-from-the-text-of-other-elements)**


But what is the difference between `aria-label` and `aria-labelledby`?

* `aria-label` allows us to specify a string to be used as the accessible label (overriding the `label` attribute).

* `aria-labelledby` allows us to specify the ID of another element in the DOM as an element's label and can be used on any element, not just labeable elements (like buttons).

* also `aria-labelledby` can group several elements together via a list of IDs (delimited by a space). In practical terms, by grouping things together, you'll be able to control which things are read together, providing for a better screen reader experience.

* 🤔 Further explanation on [ARIA Labels and Relationships](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships).
