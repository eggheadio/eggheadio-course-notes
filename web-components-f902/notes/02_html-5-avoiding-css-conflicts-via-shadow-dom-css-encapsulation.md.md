# Avoiding CSS Conflicts via Shadow DOM CSS encapsulation

[Video link](https://egghead.io/lessons/html-5-avoiding-css-conflicts-via-shadow-dom-css-encapsulation)

<TimeStamp start="0:05" end="0:13">

Read more about the shadow DOM and other use cases [on this page](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

</TimeStamp>

<TimeStamp start="0:38" end="0:45">

If we use the `attachShadow()` with a `"closed"` parameter, we wouldn't be able to access our shadow DOM from the outside.

</TimeStamp>

<TimeStamp start="0:49" end="0:56">

We continue defining our custom element as we have previously:

```jsx
window.customElements.define('custom-element', CustomElement);
```

</TimeStamp>

<TimeStamp start="1:18" end="1:27">

Our added `<div>` has no styling compared to the slotted paragraph due to shadow DOM encapsulation. Being outside the shadow implies it won't maintain the same style.

</TimeStamp>
