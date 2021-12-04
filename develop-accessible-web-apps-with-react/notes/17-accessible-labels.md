 # 17. Add Accessible Labels to Elements Whose Labels are Not Clear Enough

**[📹 Video](https://egghead.io/lessons/react-add-accessible-labels-to-elements-whose-labels-are-not-clear-enough)**


* 👍 Make sure your HTML elements (especially those that require action to be undertaken by the user - buttons!) have a clear and descriptive text. 

* For example, a button with the text `< back` will be read as 'less button', whereas you meant to convey something like 'Go Back'.

* In such cases, you should add an `aria-label` attribute, which will be read by the screen reader.

```HTML
<button aria-label="Go back"> < Back </button>
```
