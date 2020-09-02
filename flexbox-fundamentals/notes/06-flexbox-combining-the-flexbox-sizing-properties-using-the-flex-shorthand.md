# Flexbox Fundamentals

## Combining the Flexbox Sizing Properties Using the Flex Shorthand

[📹 Video](https://egghead.io/lessons/flexbox-combining-the-flexbox-sizing-properties-using-the-flex-shorthand)

Flex shorthand is super cool but might cause some weird things to happen in your browser. Garth Braithwaite explains in his tutorial that further expounds on the previous lesson titled *Using `flex-shrink` and `flex-grow` to Make Flexbox Children Resize Correctly*.

### NOTE: Flex shorthand makes flexbox sizing consistent, but watch out for the defaults!

---

## Flex Shorthand – What Is It Telling The Browser?

### The `flex` property is telling our browsers three distinct things: *How to size our container's three values of `flex-grow`, `flex-shrink`, and `flex-basis`*.

NOTE: When using flex shorthand **consider the defaults** of your values. Garth explains further in the lesson.

Although this is mentioned at the end of the tutorial, let's start thinking about the flex property with a value of one, or `flex: 1;`.

In the example, we're telling the browser to let Heading 1 display with a `flex-grow` of one, a `flex-shrink` of one, and a `flex-basis` of zero. As a result, you're going to see that the this element will have children that grow to use all the container space evenly.

See below and in minute [01:27](https://egghead.io/lessons/flexbox-combining-the-flexbox-sizing-properties-using-the-flex-shorthand#t=84) of the tutorial:

```
h1 {
    flex: 1;
}
```

Clean enough, but what this shorthand code (above) is actually saying to the browser is in the commented out code. Take a look:

```
h1 {
    flex: 1;
    /*  flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0px;
    */
}

```

Now, let's take a look at the shorthand examples Garth provides in the tutorial. The commented out code has been removed.

### Example 1
````
.title-1 {
    background: #dd5f40;
    flex: 1;
}
````
What is this code telling the browser:

The `flex` has a value of `flex-grow: 1;`, `flex-shrink: 1;`, and `flex-basis: 0;`. Normally, your flex-basis would default to `auto`.

### Example 2
````
.title-2 {
    background: #3d483a;
    flex: 20px;
}
````
What is this code telling the browser:

The `flex` has a value of `flex-grow: 1;`, `flex-shrink: 1;`, and `flex-basis: 20px;`. The pixel is a unit of measure, making it appropriate to pass into the flex-basis.

### Example 3
````
.title-3 {
    background: #468e5d;
    flex: 0 80px;
}
````
What is this code telling the browser:

The `flex` has a value of `flex-grow: 0;`, `flex-shrink: 1;`, and `flex-basis: 80px;`. Your flex-grow is a "unit-less" measurement of zero, and your flex-basis is a unit of measure at 80 px.