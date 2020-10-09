# Priority Queue JavaScript Data Structure

**[📹 Video](https://egghead.io/lessons/javascript-priority-queue-javascript-data-structure)**

💻[Github repo](https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/priorityQueue/priorityQueue.js)

## Summary

![High priority queue dequeued first](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602262874/transcript-images/03-javascript-priority-queue-javascript-data-structure-Priority-Queue.gif)

A priority queue is similar to a queue, but with the ability to add high priority items that are processed before the lower priority items.

## Use case

A list of items or steps that need to be processed in order, with the ability to add items that will be processed immediately.

- a daily todo list
- support ticket system
- ecommerce site with priority shipping

## Analogy

Think of a priority queue as an airport with separate lines for first class and economy patrons. The first class line will be seated before the economy line. If a first class patron turns up after the economy line has started to move, they will be seated immediately, rather than joining the end of the economy line.

## Implementation

**priorityQueue.js**

Can be implemented as two queues - low and high priority. We can implement a similar API to the queue - with the `enqueue` method accepting an optional `isHighPriority` parameter.

```js
function createQueue() {
  const lowPriorityQueue = createQueue()
  const highPriorityQueue = createQueue()

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item)
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }

      return lowPriorityQueue.dequeue()
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peak()
      }

      return lowPriorityQueue.peak()
    },
    length() {
      return highPriorityQueue.length() + lowPriorityQueue.length()
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() + lowPriorityQueue.isEmpty()
    }
  }
}
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/javascript-queue-data-structure-in-javascript)
📹 [Go to Next Lesson](https://egghead.io/lessons/javascript-stack-data-structure-in-javascript)
