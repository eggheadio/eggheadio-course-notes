# Flexbox Fundamentals

## Turning a Flexbox into a Grid Using flex-wrap and align-content

[📹 Video](https://egghead.io/lessons/flexbox-turning-a-flexbox-into-a-grid-using-flex-wrap-and-align-content)

Ahhhh... The moment we've been waiting for: Turning `flexbox` into a grid. Following Garth's instrustional notes: Adding flex-wrap to a flexbox container allows the items to form a grid. The content can then be aligned and distributed along the grid using justify-content and align-content.

---

## How to Make a Flexbox Grid

Starting with the code example, update your `display` to flex. Be sure to nix the `width` property as you won't need to set it thanks to `display: flex;` which gives your browser your container's width sizing information. And keep your `flex-grow` value at zero–this will stabilize the container's display behavior in the browser.

```
body {
    display: flex;
}
```

Now, you'll want to determine how you'd like your content to be displayed. Garth recommends keeping all your items on the page (in the example, the images are running over the page parameters). In his example, the `flex-wrap` is set.

Although `flex-wrap` defaults to `nowrap`, it has several values such as `wrap` and `wrap-reverse` which causes the line breaks to flow up instead of down (might vary with your code).

```
body {
    display: flex;
    flex-wrap: wrap;
}

```

Now, if you're interested in spacing the containers' contents, use the `justify-content` property which has a host of values for you to choose from. Learn more about the values [here](https://www.w3schools.com/csSref/css3_pr_justify-content.asp).

In Garth's example, we're going to us `space-around` which will give us space along the flex direction axis.

````
body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
````

Next, we want to **consider how the content is aligned**. In the example, we're concerned with the *vertical alignment* of our content.

Alignment values vary, but include ones we've been working with throught the Flexbox Fundamentals instructions:

- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-around`
- `stretch`

Keep in mind that it is *only the content* that is being aligned, not the container itself.

Final example from Garth's instructions:

````
body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
}
````