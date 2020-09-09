# Sort an Array with a JavaScript do while Loop using Bubble Sort

**[📹 Video](https://egghead.io/lessons/javascript-sort-an-array-with-a-javascript-do-while-loop-using-bubble-sort)**

💻[Github repo](https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/bubbleSort/index.js)

## Summary

![Bubble sort gif](https://java2blog.com/wp-content/uploads/2017/12/BubbleSort_Avg_case.gif)

Bubble sort is a sorting algorithm we can use to sort an array of items. It continues to loop over each index in an array, swapping it with the next item if it is greater. It will continue looping over the array and performing this action until it does a full pass with no swapping.

As the Bubble sort algorithm needs to do so many passes across the array to swap items and confirm the array is sorted, it is not very efficient for sorting complex collections of data.

👍For large or complex sets of data, Bubble sort is not very efficient, but for small collections of items it is great!. It is also very simple to implement, and reason about.

## Use case

- a simple algorithm for sorting items in an array
- a sorting algorithm that you can easily reason about

## Implementation

```js
function bubbleSort(array) {
  let swapped = false

  do {
    swapped = false
    array.forEach((item, index) {
      if (item > array[index + 1]) {
        const temporary = item

        array[index] = array[index + 1]
        array[index + 1] = temporary
        swapped = true
      }
    })
  } while (swapped)

  return array
}
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/javascript-build-a-binary-tree-in-javascript-and-several-traversal-algorithms)
📹 [Go to Next Lesson](https://egghead.io/lessons/javascript-sort-an-array-with-a-nested-for-loop-using-insertion-sort-in-javascript)
