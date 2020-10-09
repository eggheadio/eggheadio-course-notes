# Recursively Sort an Array in JavaScript with Quick Sort

**[📹 Video](https://egghead.io/lessons/javascript-recursively-sort-an-array-in-javascript-with-quick-sort)**

💻[Github repo](https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/quickSort/index.js)

## Summary

![Quick sort gif](https://www.tutorialspoint.com/data_structures_algorithms/images/quick_sort_partition_animation.gif)

Quick sort is another recursive sorting algorithm - similar to merge sort - but rather than splitting the array in half, a `pivot` point is picked for comparison. The pivot can be any index, but its value is used to determine whether values are split into the left array (less than) or the right array (greater than).

Quicksort is an efficient sorting algorithm, when compared to Bubble or Insertion sort. It is considered to be [more efficient than merge sort at most things, with the exception for very large datasets](https://www.geeksforgeeks.org/quicksort-better-mergesort/).

## Best sorting algorithm

👍When picking a sorting algorithm it is about weighing up the complexity of implementation vs the required efficiency of the algorithm itself. If you just need to sort a small array of items, any of these sorting algorithms will work perfectly. As the size and complexity of these collections grow, you may want to consider Merge or Quick sort.


## Implementation

**quickSort/index.js**

```js
function quickSort(array) {
  if (array.length < 2>) {
    return array
  }

  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i]
    currentItem < pivot
      ? left.push(currentItem)
      : right.push(currentItem)
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/javascript-divide-and-recurse-over-an-array-with-merge-sort-in-javascript)
