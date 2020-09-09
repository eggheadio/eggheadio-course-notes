# Divide and Recurse Over an Array with Merge Sort in JavaScript

**[📹 Video](https://egghead.io/lessons/javascript-divide-and-recurse-over-an-array-with-merge-sort-in-javascript)**

💻[Github repo](https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/mergeSort/index.js)

## Summary

![Merge sort gif](https://codepumpkin.com/wp-content/uploads/2017/10/MergeSort_Avg_case.gif)

Merge sort uses ![recursion](https://www.youtube.com/watch?v=YZcO_jRhvxs) to split an array into two halves, calling mergeSort on each half until we have a collection of sub arrays that have at most two items. It then merges each subarray into the final sorted array.

Merge sort is generally much more efficient than Bubble or Insertion sort, as it uses recursion to quickly split up the work into subarrays. This usually requires less passes over the array but could be quite memory intensive if you have a large or complex collection.

## Use case

- efficiently sorting an array
- sorting larger and more complex collections

```js
function mergeSort(array) {
  if (array.length < 2) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const sorted = []

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  const results = [...sorted, ...left, ...right]

  return results
}
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/javascript-sort-an-array-with-a-nested-for-loop-using-insertion-sort-in-javascript)
📹 [Go to Next Lesson](https://egghead.io/lessons/javascript-recursively-sort-an-array-in-javascript-with-quick-sort)
