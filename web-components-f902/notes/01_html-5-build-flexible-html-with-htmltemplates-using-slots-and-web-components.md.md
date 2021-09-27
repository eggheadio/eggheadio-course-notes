# Build Flexible HTML with HTMLTemplates using Slots and Web Components

[Video link](https://egghead.io/lessons/html-5-build-flexible-html-with-htmltemplates-using-slots-and-web-components)

<TimeStamp start="0:29 end="0:36">

Nothing renders on the screen until we create a script that adds the template to the div.

</TimeStamp>

<TimeStamp start="0:39" end="0:51">

We append the template's content clone node inside the div.

Using `true` as the parameter to the `cloneNode()` method ensures a **deep** clone of the template's content where its subtree is also copied. If we had used `false`, only the template's content would be cloned.

</TimeStamp>

<TimeStamp start="0:53" end="1:00">

It's worth noting **deep** clones have no effect on empty elements (such as <input> and <img> elements).

</TimeStamp>

<TimeStamp start="1:18" end="1:26">

Read more about the `<slot>` element [on this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).

</TimeStamp>

<TimeStamp start="1:44" end="1:55">

Our `<script>` element is set up with our custom element as such:

```jsx
<script>
  const template = document.querySelector('#template');
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
      this.shadowRoot
        .appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('custom-element', CustomElement);
</script>
<custom-element></custom-element>
```

</TimeStamp>

<TimeStamp start="1:56" end="2:07">

Finally, we add our `<slot>` tags inside our template as follows:

```jsx
<template id="template">
  <div>
    <slot name="slot1"></slot>
  </div>
  <form>
    <input/>
  </form>
  <slot name="slot2"></slot>
</template>

```

</TimeStamp>

<TimeStamp start="2:26" end"2:36">

After reusing our custom element, we're able to observe how powerful `<slot>` can be.

```jsx
<iframe slot="slot1" width="560" height="315" src="https://www.youtube.com/embed/Bv_5Zv5c-Ts" ...></iframe>
```

</TimeStamp>

<TimeStamp start="2:43" end="2:48">

Templates can also be used dynamically in conjunction with dynamic content.

</TimeStamp>

<TimeStamp start="2:50" end="3:02">

We can accomplish this by copying the template's content into a string (`templateString`), changing the template definition to `const template = document.createElement('template');`, and setting `template.innerHTML = templateString;`.

</TimeStamp>
