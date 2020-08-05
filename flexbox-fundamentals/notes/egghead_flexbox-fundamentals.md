# Flexbox Fundamentals

## Using flex-direction to layout content horizontally and vertically

**[📹 Video](https://egghead.io/courses/flexbox-fundamentals)**

Flexbox is a layout mode in CSS. This layout type makes it easy for developers to display content in various ways.

Since browsers display content vertically – *from top to bottom* – by default, the Flexbox layot mode gives devs more "flexibility" with how their content is displayed on the front-end.

### Well, we know what CSS is, *but, what's a "layout mode?"* Here's a refresher:

Layout modes – *or simply "layouts"* – are sets of instructions that tell the browser the position and size of boxes based on the code's hierarchy. 

While there are several types of layouts, this lesson focuses solely on *Flexbox* – a layout mode that makes building responsive sites easy and looks cool!

🤔 Learn more about layouts **[here](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_mode)**.

## Defining a Flexbox container

In the code example, instructor Garth Braithwaite is defining a Flexbox container by turning an ordered list into a navigation bar.

First, he removes the bullets from the `ol` by setting `list-style:;` to `none`.

Then he sets the `display:;` to  `flex`. Whatever code is written after this will be treated as "children" and styled accordingly.

### Note: Flexbox containers have a property called `flex-direction`.

`flex-direction` defaults to row which is displayed horizontally. This flexbox property's value can be changed to `row`, `row-reverse`, `column`, and `column-reverse`.

The resulting code snippet for a horizontal navigation bar in Braithwaite's example is:

```
.main-nav ul {
    list-style: none;
    display: flex;
    flex-direction: row-reverse;
}
```