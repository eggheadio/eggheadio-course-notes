# Flexbox Fundamentals

## Demystifying alignment in flexbox children

**[📹 Video](https://egghead.io/lessons/flexbox-demystifying-alignment-in-flexbox-children)**

Because flexbox layout is so * *ahem* * flexible, it can be difficult to remember which properties do what and what values to use when you need an element to be positioned just right in the browser.

In this lesson, the following properties are detailed:

- `justify-content`
- `align-items`
- `align-self`

The values for each of these properties will be detailed, as well.

---

### Before we jump in, let's get a quick refresher on `flex-direction` 👍:

`flex-direction` defaults to row which is displayed horizontally.

Following the transcript, we can note that this flexbox property's value can be changed to:

- `row` – This is the default position for the `flex-direction` property.
- `row-reverse` – The children will flow from left to right.
- `column`– The column will display vertically.
- `column-reverse` - The children to flow from bottom to top.

---

## Alignment via flexbox children properties

### `justify-content` affects way the children are aligned along the direction the content is flowing.

In other words, depending on where your element starts, the justify-content will affect how the extra space along the flex directioin is used.

Think about it: Is your flex-direction set to `row` (that's horizontally)? Then, `justify-content` will affect the extra space at the top, or start, of your element... but, *why?*

It's because `justify-content` defaults to `flex-start` meaning that the child will crop up the its starting point. In the case of Garth's example, the children are all starting at the top.

#### `justify-content` values include:
-   `flex-start`    - the child will start at the container's top
-   `flex-end`  - the child will start at the container's bottom
-   `center`    - the child will start at the center, or in the middle, of the container
-   `space-around`  - 
-   `space-between` - if there are multiple child elements, this value will stick one child to the start of the flow and the last child to the end, with the children in between spaced out evenly. 

🤔 Learn more about justify-content values, including `initial` and `inherit` here: [MDN web docs – justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

---

### `align-items` declares how to use the space perpendicular to the `flex-direction`
---

### `align-self` is the same as `align-item` but is applied to specific, individual children