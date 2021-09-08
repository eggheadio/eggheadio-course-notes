# [3 formas de actualizar un arreglo de objetos en JavaScript](https://egghead.io/lessons/javascript-3-formas-de-actualizar-un-arreglo-de-objetos-en-javascript)

<TimeStamp start="0:01" end="0:08">

Con la ayuda de esta función crearemos objetos al azar: 

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

<TimeStamp start="0:11" end="0:20">

Una forma de actualizar los objetos de la matriz es acceder a los elementos mediante el índice de la matriz, sin embargo, este es un método mutable.

```jsx
const array = [...new Array(5)]
    .map(() => userCreator())
array[0] = {
    ...array[0],g
    name: 'Actualizado'
}
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:21" end="0:38">

Hay formas inmutables de lograr este objetivo, por ejemplo, la función `.map`

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

`.map` itera sobre la matriz y, mediante el uso de una función callback, permite el acceso a los elementos. `.map `crea una nueva matriz con el contenido devuelto por la función de portada.

</TimeStamp>

<TimeStamp start="0:53" end="1:25">

Otra forma de actualizar uno de los elementos de la matriz si no conocemos el índice, es usando la función `findIndex`, usando este método evitas la mutación de la matriz original usando funciones de rodajas de matrices como ayudantes. Esto devolverá el elemento de índice que pasó la prueba.

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
