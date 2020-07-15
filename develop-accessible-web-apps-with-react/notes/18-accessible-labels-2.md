 # 18. Add Accessible Labels to Provide Elements with More Context

**[📹 Video](https://egghead.io/lessons/react-add-accessible-labels-to-provide-elements-with-more-context)**


* If you have many duplicate buttons on your page - for example, various 'Add to Cart' buttons on your e-commerce page, make sure to provide a descriptive `aria-label`. This will enable users on assistive devices to differentiate between the different buttons with ease.

```HTML
<button aria-label={`${buttonText} ${productName}`}>{buttonText}</button>
```