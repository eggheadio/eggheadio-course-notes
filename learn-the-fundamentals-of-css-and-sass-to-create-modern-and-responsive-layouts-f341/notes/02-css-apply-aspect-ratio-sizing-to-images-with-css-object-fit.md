[Video Link](https://egghead.io/lessons/css-apply-aspect-ratio-sizing-to-images-with-css-object-fit)


<TimeStamp start="0:19" end="0:30">

For our card images, we need the following code:

```css
.card img {
    object-fit: cover;
    width: 100%;
    height: 25vh;
}
```

</TimeStamp>


<TimeStamp start="1:09" end="1:20">

For the desired to scale unevenly sized images, we need the following code:

```css
.card ima {
    object-fit: scale-down;
      width: 100%;
    height: 25vh;
}
```

</TimeStamp>

<TimeStamp start="2:19" end="2:42">

`object-fit` results in an image acting as its own container where the value cover mimics the behavior you would expect from a background image and instructs the image contents to expand or fill the dimensions. `scale-down` results in the image contents retaining their aspect ratio but scaling within the dimensions set on the image. If oyu want to know more about this we invite to read their [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

</TimeStamp>