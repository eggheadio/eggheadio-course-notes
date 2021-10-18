# Sort an Array with a Nested for Loop using Insertion Sort in JavaScript

**[📹 Video](https://egghead.io/lessons/javascript-sort-an-array-with-a-nested-for-loop-using-insertion-sort-in-javascript)**

💻[Github repo](https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/insertionSort/index.js)

## Summary

![Insertion sort gif](https://thumbs.gfycat.com/CornyThickGordonsetter-size_restricted.gif)

Insertion sort is usually more efficient than bubble sort, as it needs to do less passes over the array to sort it. Insertion sort uses two nested loops and compares items to determine whether their position needs to be swapped.

Insertion sort can be quite inefficient due to the number of potential loops to sort an array, but is almost as easy to implement and reason about as bubble sort.

👍There are more efficient sorting algorithms that can be used for complex datasets, but when dealing with small collections, Insertion sort is a great option!

## Use case

- a simple algorithm for sorting items in an array
- a sorting algorithm that you can easily reason about

## Implementation

**insertionSort/index.js**

```js
function insertionSort(array) {
  let i
  let j

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1) // removes item
        array.splice(j, 0, item) // inserts item before j
      }
    }
  }

  return array
}
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/javascript-sort-an-array-with-a-javascript-do-while-loop-using-bubble-sort)
📹 [Go to Next Lesson](https://egghead.io/lessons/javascript-divide-and-recurse-over-an-array-with-merge-sort-in-javascript)
