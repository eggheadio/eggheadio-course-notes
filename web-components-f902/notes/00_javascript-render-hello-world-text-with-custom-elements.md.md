# Render Hello World Text with Custom Elements

[Video link](https://egghead.io/lessons/javascript-render-hello-world-text-with-custom-elements)

<TimeStamp start="0:09" end="0:17">


We first define a class, `MyCustomElement()` which extends `HTMLElement` inside the script tags before creating our custom element.

</TimeStamp>


<TimeStamp start="0:29" end="0:37">

We define a `connectedCallback` after defining our click event set up with a callback. A `connectedCallback` is invoked each time the custom element is appended into a document-connected element.

</TimeStamp>


<TimeStamp start="0:45" end="0:54">

To define our custom element to use inside the DOM:

```jsx
window.customElements.define('my-custom-element', MyCustomElement);
```

</TimeStamp>


<TimeStamp start="0:56" end="1:06">

To read more about using custom elements, see [this documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

</TimeStamp>
