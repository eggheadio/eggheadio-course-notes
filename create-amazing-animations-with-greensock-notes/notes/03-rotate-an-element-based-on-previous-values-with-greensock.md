# Rotate an Element Based on Previous Values with Greensock

📹 [Video](https://egghead.io/lessons/greensock-rotate-an-element-based-on-previous-values-with-greensock)

Create a box in index.html.
- div with id="box"

Use gsap to style box.
- use TweenMax.set() - syntax
```js
TweenMax.set("selectedElement", {properties})
```
- Take a look at 🤔[Common CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) to see how CSS properties are defined in javascript.

### To rotate the box
1. Use TweenMax.to() inside the eventListener callback function.
```js
document.addEventListener('click', event => {
    TweenMax.to("#box", 0.5, {
        rotation: 30
    })
})
```
- Expected behavior will be that a 'click' anywhere on the document will set off an animation on the div with id="box" ("#box") to change it's 'rotation' to 30 degrees.
- Additional clicks will appear to have no effect since the rotation is already at 30 degrees.
2. To rotate on additional clicks change,
```
rotation: 30
```
to 
```
rotation: "+=30"
```

- This will add 30 degrees to the current rotation value and animate the change to that new rotation value.
- Now additional clicks will continue to rotate the #box.


📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-animate-and-center-an-element-to-a-click-event-with-greensock)
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-create-animation-steps-with-greensock-s-timeline)
