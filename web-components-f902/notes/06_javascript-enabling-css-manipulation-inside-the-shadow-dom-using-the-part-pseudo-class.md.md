# Enabling CSS manipulation inside the shadow DOM using the part pseudo class

[Video link](https://egghead.io/lessons/javascript-enabling-css-manipulation-inside-the-shadow-dom-using-the-part-pseudo-class)

<TimeStamp start="0:09" end="0:16">

To read about `part` and its documentation, [visit this page](https://developer.mozilla.org/en-US/docs/Web/CSS/::part).

</TimeStamp>

<TimeStamp start="1:27" end="1:36">

```css
employees-custom-element::part(card) {
  background: rgba(0, 0, 50, .5);
}
```

</TimeStamp>

<TimeStamp start="2:20" end="2:32">

`toggleSelected()` is used to:
1. Accept a card index
2. Find the right card
3. Get the attribute value
4. Append the `selected` to the `part` value if there is no `selected` **or** remove `selected` from the `part` value if there is `selected`.

</TimeStamp>

<TimeStamp start="2:46" end="2:56">

We achieve `selected` state by using `part` to style designated elements inside a Shadow DOM.

```css
employees-custom-element::part(card) {
  background: rgba(0, 0, 50, .5);
}

employees-custom-element::part(selected) {
  background: rgba(255, 0, 50, .5);
}
```

</TimeStamp>
