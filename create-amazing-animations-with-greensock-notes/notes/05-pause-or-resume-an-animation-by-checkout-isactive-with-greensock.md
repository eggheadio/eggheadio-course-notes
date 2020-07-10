# Pause or Resume an Animation by Checkout isActive with Greensock

📹 [Video](https://egghead.io/lessons/greensock-pause-or-resume-an-animation-by-checking-isactive-with-greensock)

### To repeat timeline animation

- Use the greensock TimelineMax's 🤔[repeat property](https://greensock.com/docs/v2/TimelineMax/repeat()).
- A positive number will be the number of times an animation repeats, but a -1 will cause it to repeat indefinitely. Use -1 in this instance

```js
const timeline = new TimelineMax({ repeat: -1 })
```

### Pause and Resume by checking isActive() property

- If an animation is currently running, its 'isActive()' property will be true.
- If paused the 'isActive()' property will be false.
- Therefore a conditional is all that is needed to toggle an animation on and off.

```js
document.getElementById("box").addEventListener('click', () => {
    if(timeline.isActive()){
        timeline.pause()
    }else{
        timeline.resume()
    } 
})
```

Check it out . . . You can now pause and resume your animation by clicking on the box.

📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-create-animation-steps-with-greensock-s-timeline)
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-manually-control-the-animation-with-progress-in-greensock)
