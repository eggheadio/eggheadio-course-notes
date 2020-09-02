# Flexbox Fundamentals

## Defining Dimensions on Flexbox Children Using Flex-Basis

**[📹 Video](https://egghead.io/lessons/flexbox-defining-dimensions-on-flexbox-children-using-flex-basis)**

Depending on your needs, Flexbox can be coded to do many clever things. Starting with sizing, we'll learn about the following in this lesson:

-   The `flex-basis` property and its values
-   The importance of cascading hierarchy
-   What the `flex-direction` axis is
-   Why width and height aren't always the best sizing properties to use for Flexbox

---

### 3 Properties That Size Flexbox Children:

Following the transcription notes, the following three properties handle the resizing of flexbox children (not the flex-container) along the `flex-direction`:

- `flex-grow`
- `flex-shrink`
- `flex-basis` 

---

## `flex-basis`

`flex-basis` is used to define the optimal size of the child element, along the `flex-direction`.

**NOTE**: The parent container in this example is the `body` tag. When Garth gives the parent a display property value of `flex`, the children follow the rule.
So instead of defaulting to their box container sizing (that's 100%), the children take on the size of the content within their respective containers. Why? Because these *well-behaved children* follow the values of their parent.

### The importance of Cascading Heirarchy

The children are taking on the width of the parent element in the example. But what if the children want to take on their own sizes? The best way to do this for flexbox children is to ditch the standard `width` and `height` properties and assign them `flex-basis` properties and values.

`flex-basis` defaults to `auto`, making the child follow the dimention set by the `flex-direction` (e.g., a row, a column, etc.).

**NOTE**: Flex-basis is the ideal size for the element along the flex-direction if it has enough room. - Garth B.