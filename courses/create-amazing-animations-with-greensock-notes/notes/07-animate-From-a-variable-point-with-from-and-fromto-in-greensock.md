# Animate From a Variable Point with from and fromTo in GreenSock

📹 [Video](https://egghead.io/lessons/greensock-animate-from-a-variable-point-with-from-and-fromto-in-greensock)

### Use TweenMax.from
- 🤔[TweenMax.from docs](https://greensock.com/docs/v2/TweenMax/static.from())
- Very similar to the TweenMax.to() used before, except the properties will be where the animation starts, and its current position will be where it ends.
```js
document.addEventListener('click', event => {
    const { x, y } = event
    TweenMax.fromTo('#box', 1, { x, y })
})
```

### Use TweenMax.fromTo
- 🤔[TweenMax.fromTo docs](https://greensock.com/docs/v2/TweenMax/static.fromTo())
- Same as the .from() except a fourth argument sets where the animation will end.
```js
document.addEventListener('click', event => {
    const { x, y } = event
    TweenMax.fromTo('#box', 1, { x, y }, { x: 200, y: 200 })
})
```

📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-manually-control-the-animation-with-progress-in-greensock)
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-control-an-array-of-elements-with-the-same-animation-in-greensock)
