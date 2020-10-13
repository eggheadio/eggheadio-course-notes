# Fetch a New Data Based on Conditions

[📹 Video](https://egghead.io/lessons/egghead-fetch-a-new-data-based-on-condition)

Remember that the guess is the string containing either a letter that we have guessed and exist in the word that we have to guess, or it will contain an asterisk.

This is why we are doing a `doneIf` if guess exists and doesn't contain any `*` because if the word doesn't have any asterisks then we have guessed the word correctly.


**Removing duplicated cancels()**

As John showed, the `doneIf` shouldn't cancel because we are cancelling in the `repeat` function, so we can just pass the `done Symbol` and let another operator - in this case `repeat` trigger the cancellation. 

## Reloading the word once it's guessed


```javascript
export let share = () => {
  let cancel
  let listeners = []
  return broadcaster => {
      if (!cancel) {
        console.log(`setup broadcaster`)
        cancel = broadcaster(value => {
          listeners.forEach(listener => listener(value))
        })
      }
    return listener => {
      listeners.push(listener)
      return () => {
        cancel()
        cancel = null
      }
    }
  }
}

```

Since we are running repeat last, we need to update the share operator to put the logic inside the broadcaster, otherwise, it will just cancel and repeat will never be called.

Another thing we need to do is to set `cancel` to null, which will allow the broadcaster code to run.


```javascript
export let share = () => {
  let cancel
  let listeners = []
  return broadcaster => {
    return listener => {
      // Repeat will be called because this logic is inside our broadcaster
      if (!cancel) {
        console.log(`setup broadcaster`)
        // Broadcaster code
        cancel = broadcaster(value => {
          listeners.forEach(listener => listener(value))
        })
      }
      listeners.push(listener)

      return () => {
        cancel()

        // allows broadcaster code to run on the next run
        cancel = null
      }
    }
  }
}

```