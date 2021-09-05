# [4 Ways to populate an Array in Javacript](https://egghead.io/lessons/javascript-4-ways-to-populate-an-array-in-javacript)


<TimeStamp start="0:01" end="0:10">

To create an array with a definite size and definite content, with the following code we will build an array with 5 items with the number 3

```jsx
const array = new Array(5).fill(3)
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:16" end="0:20">

With the help of `faker` we are going to create an array with 5 random people: 

```jsx
import faker from "faker";

const userCreator = () => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    id: faker.random.number(5)
});
```

</TimeStamp>

<TimeStamp start="0:21" end="0:30">

Now, with the following code we'll create a new array

```jsx
const array = new Array(5).fill(userCreator())
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:31" end="0:36">

`fill` just copy a reference  of the original object and completes the array

</TimeStamp>

<TimeStamp start="0:43" end="0:50">

We can modify `fill` behavior as shown below:

```jsx
const array = new Array(5)
    .fill(null)s
    .map(userCreator())
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:51" end="0:58">

Another way is using a for loop, but you modify the original array: 

```jsx 
let array = new Array(5)
for(let i = 0; i<5; i++){
    array[i] = userCreator()
}
console.log(array)
```

</TimeStamp>

<TimeStamp start="1:01" end="1:12">

You can populate data in the following form: 

```jsx
const array = Array.from({length: 5},
    () => userCreator())
console.log(array)
```

</TimeStamp>

<TimeStamp start="1:16" end="1:25">

Finally, you can also populate by expanding the array:

```jsx
const array = [...new Array(5)]
    .map(() => userCreator())

console.log(array)
```

</TimeStamp>
