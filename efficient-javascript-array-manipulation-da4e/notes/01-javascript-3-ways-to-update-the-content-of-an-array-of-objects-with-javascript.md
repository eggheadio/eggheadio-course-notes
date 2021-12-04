# [3 Ways to Update the Content of an Array of Objects with Javascript](https://egghead.io/lessons/javascript-3-ways-to-update-the-content-of-an-array-of-objects-with-javascript)

<TimeStamp start="0:01" end="0:08">

```jsx
///This function creates random user objects

import faker from "faker";

const userCreator = () => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    id: faker.random.number(5)
});
```

</TimeStamp>

<TimeStamp start="0:10" end="0:20">
 
One way to update the array objects is accessing the elements by the array index, however this is a mutable method. 

```jsx
const array = [...new Array(5)]
    .map(() => userCreator())
array[0] = {
    ...array[0],
    name: 'Actualizado'
}
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:24" end="0:40">

There are inmutable wayt to achieve this goal, for example the `.map function`

```jsx
const newArray = array.map(item => {
    if(item.id === 3) {
        return {...item, name: 'Actualizado'}
    } else {
        return item
    }
})
console.log(newArray)
```

Map iterates over the array and by using a callback function allow access to the items. Map creates a new array with the content return it by the cover function.

</TimeStamp>

<TimeStamp start="1:01" end="1:20">

Another way to update one oif the items of the array if we don't know the index, is by using `findIndex` function, using this method you avoid mutation of the original array using arrays slices functions as helpers. This will return the the index element that passed the test.

```jsx 
const index = array 
    .findIndex(item => item.id === 3)
const newItem = {
    ...array[index],
    name: 'Actualizado'

}
const newArray = [
    ...array.slice(0, index),
    newItem, 
    ...array.slice(index)
]
console.log(newArray)
```

</TimeStamp>

