# Queue Data Structure in JavaScript

**[📹 Video](https://egghead.io/lessons/javascript-queue-data-structure-in-javascript)**

💻[Github repo](https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms/blob/master/queues/index.js)

## Summary

![Three items queued in sequential order](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602262873/transcript-images/02-javascript-queue-data-structure-in-javascript-Queue.png)

A queue is a FIFO (First In First Out) data structure - usually an array or list-like structure - with an enqueue and dequeue method for adding and removing items. `peek`, `length` and `isEmpty` are helper functions that allow us to ask questions about the state of the queue.

## Use case

A collection of of steps or items that need to be processed in a particular order.

- onboarding steps in an app
- sending out orders placed in an ecommerce system
- tasks in a prioritized todo list

## What is a queue?

A queue is a FIFO data structure. This means that when we add an item to the queue (enqueue) it will need to wait until each item before it has been removed (dequeued), before it has the spotlight 🔦

## Analogy

You can think of this as a regular queue at the grocery store. If you join the end of the queue with your basket of groceries, the checkout person is not going to serve you until each person ahead of you has been served.

For this implementation you can think of the items in the array forming a queue. New people joining the queue come in from the left and the checkout person is on the right.

[ 🧺, 🛒, 🛍 ] => 💳

## Enqueue

Add an item to the left side of the queue.

![Enqueue item from left](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602262873/transcript-images/02-javascript-queue-data-structure-in-javascript-Enqueue.gif)

`Array.unshift()` is used to add an item to the start (left) of an array.

## Dequeue

Remove an item from the right side of the queue.

![Dequeue item from right](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602262873/transcript-images/02-javascript-queue-data-structure-in-javascript-Dequeue.gif)

`Array.pop()` is used to remove the item at the end (right) of the array. This method returns the removed item.

## Peek

Access the item at the right side of the queue.

![Peek next item](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602262873/transcript-images/02-javascript-queue-data-structure-in-javascript-Peek.png)

`Array[length - 1]` is used to access the last item in the array - next to be dequeued.

## Length

Find out how many items are currently in the queue.

![Count items in queue](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602262873/transcript-images/02-javascript-queue-data-structure-in-javascript-Length.gif)

`Array.length` is used to determine how many items are in the array.

> ❗Note: The `get` property discussed in the video is not required to query the current length of the queue

## isEmpty

Return a Boolean value (`true` or `false`) as to whether the queue is empty or not.

![Check if queue is empty](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602262873/transcript-images/02-javascript-queue-data-structure-in-javascript-isEmpty.gif)

`Array.length === 0` is used to determine whether the array currently has zero items. If it does then this method returns `true`. If there are items in the array it will return `false`.

## Implementation

**queues/index.js**

```js
function createQueue() {
  const queue = []

  return {
    enqueue(item) {
      queue.unshift(item)
    },
    dequeue() {
      return queue.pop()
    },
    peek() {
      return queue[queue.length - 1]
    },
    length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    }
  }
}
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/javascript-course-introduction-data-structures-and-algorithms-in-javascript)
📹 [Go to Next Lesson](https://egghead.io/lessons/javascript-priority-queue-javascript-data-structure)
