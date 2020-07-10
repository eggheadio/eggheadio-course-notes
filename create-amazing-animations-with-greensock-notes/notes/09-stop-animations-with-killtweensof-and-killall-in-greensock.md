# Stop Animations with killTweensOf and killAll in Greensock

📹 [Video](https://egghead.io/lessons/greensock-stop-animations-with-killtweensof-and-killall-in-greensock)

### Stop animations by clicking on target

1. Use the random boxes from previous video but place the animation outside of the eventListener and set them to animate to a fixed point.
```js
TweenMax.to(divs, 10 { x: 100, y: 100})
```
2. Inside the click even function use 🤔[TweenMax.killTweensof()](https://greensock.com/docs/v2/TweenMax/static.killTweensOf()) and use event.target to select the box clicked on.
```js
TweenMax.killTweensOf(event.target)
```

### Stop all animations
1. Use 🤔[TweenMax.killAll()](https://greensock.com/docs/v2/TweenMax/static.killAll()) instead to stop all animations.
```js
TweenMax.killAll()
```
2. Optionally you can pass an argument of true into killAll() to cause all animations to complete.
```js
TweenMax.killAll(true)
```

📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-control-an-array-of-elements-with-the-same-animation-in-greensock)
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-animate-between-css-classes-with-greensock)
