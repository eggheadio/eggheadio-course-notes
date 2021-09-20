# Web Components explicit API's using class methods

[Video link](https://egghead.io/lessons/javascript-web-components-explicit-api-s-using-class-methods)

<TimeStamp start="0:18" end="0:28">

```jsx
<my-custom></my-custom>
<script>
  class MyWebComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `<h1>Hello World</h1>`
    }
  }

  customElements.define('my-custom', MyWebComponent);
</script>
```

</TimeStamp>

<TimeStamp start="0:42" end="0:50">

```jsx
changeTextColor(color) {
  this.header.style.color = color;
}
```

</TimeStamp>

<TimeStamp start="0:52" end="0:60">

```jsx
changeText(text) {
  this.header.innerText = text;
}
```

</TimeStamp>
