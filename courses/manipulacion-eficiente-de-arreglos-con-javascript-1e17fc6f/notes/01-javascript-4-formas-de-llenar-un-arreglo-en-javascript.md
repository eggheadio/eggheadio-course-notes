# [4 formas de llenar un arreglo en Javascript](https://egghead.io/lessons/javascript-4-formas-de-llenar-un-arreglo-en-javascript)

<TimeStamp start="0:01" end="0:11">

Es posible crear una matriz (array) de un tamaño definido y un objeto declarado usando `Array().fill`, por ejemplo:
 
```jsx
const array = new Array(5).fill(3)
console.log(array)
```
 
En el anterior fragmento de código creamos una matriz de 5 items con el número 3

</TimeStamp>

<TimeStamp start="0:12" end="0:18">

Con la ayuda de `faker` vamos a crear una matriz con 5 personas al azar:

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

<TimeStamp start="0:19" end="0:24">

Ahora, con el siguiente código crearemos una nueva matriz:

```jsx
const array = new Array(5).fill(userCreator())
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:25" end="0:35">

Como podemos ver en la consola, los elementos de esta matriz son exactamente iguales, esto se debe a que `fill` simplemente copia una referencia del objeto original y completa la matriz

</TimeStamp>

<TimeStamp start="0:36" end="0:44">

Para solucionar lo anteriormente mencionado usamos `.map`

```jsx
const array = new Array(5)
    .fill(null)
    .map(userCreator())
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:45" end="0:54">

También es posible utilizar un `for loop`, este es un método mutable ya que modificamos la matriz original

```jsx 
let array = new Array(5)
for(let i = 0; i<5; i++){
    array[i] = userCreator()
}
console.log(array)
```

</TimeStamp>

<TimeStamp start="0:55" end="1:04">

También podemos utilizar el método `Array.from` 

```jsx
const array = Array.from({length: 5},
    () => userCreator())
console.log(array)
```

</TimeStamp>

<TimeStamp start="1:06" end="1:16">

Finalmente, también podemos expandir la matriz: 

```jsx
const array = [...new Array(5)]
    .map(() => userCreator())

console.log(array)
```

</TimeStamp>

