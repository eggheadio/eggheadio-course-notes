# [¿Cómo eliminar elementos dentro de un arreglo?](https://egghead.io/lessons/javascript-como-eliminar-elementos-dentro-de-un-arreglo)

<TimeStamp start="0:09" end="0:16">

Una de las maneras de eliminar elementos de un matriz es usando `array.pop` la cual elimina elementos desde el final de la matriz, por ejemplo: 

```jsx
const arr = [1,2,3,4,5,6,7,8]
console.log(arr.pop())
console.log(arr)
```

</TimeStamp>
<TimeStamp start="0:17" end="0:22">


Para eliminar desde el principio de la matriz usamos `arr.shift`

```jsx
const arr = [1,2,3,4,5,6,7,8]
console.log(arr.shift())
console.log(arr)
```

</TimeStamp>

<TimeStamp start="0:23" end="0:28">

Los dos métodos anteriormente mencionados son mutables, ya que modifican la matriz original 

</TimeStamp>

<TimeStamp start="0:30" end="0:44">


También puedes usar `array.splice`, splice recibe como primer argumento la posición donde comenzar a modificar elementos y el segundo argumento indica el número de elementos a remover.

```jsx
const arr = [1,2,3,4,5,6,7,8]
const removed = arr.splice(2,2)
console.log(arr)
console.log(removed)
```

</TimeStamp>

<TimeStamp start="0:47" end="1:00">

Podemos remover un elemento de índice desconocido utilizando findIndex() como método auxiliar. FindIndex retorna el índice del elemento que cumple con la condición de la función utilizada como argumento. 


```jsx
arr = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Whatever" }
];
const index = arr.findIndex(item => item.id === 2);
removed = arr.splice(index, 1);
console.log(arr);
console.log(removed);
```

</TimeStamp>

<TimeStamp start="1:11" end="1:29">

Otro método que podemos utilizar es `Array.slice` que también es un método inmutable. Slice crea un nuevo arreglo con los elementos indicados por los parámetros. El primer parámetro indica el índice inicial y el segundo la posición final desde donde cortar el arreglo.

```jsx
arr = [1, 2, 3, 4, 5, 6];
const newArr = [...arr.slice(0, 3), ...arr.slice(4, arr.length)];
console.log(arr); //No se modifica
console.log(newArr); // [1,2,3,5,6]
```

</TimeStamp>


<TimeStamp start="1:48" end="0:09">

Finalmente, otra forma inmutable de eliminar elementos de un arreglo es utilizar `Array.filter`. Filter crea un array que contiene todos los elementos que pasaron la función de filtro utilizadas como argumento para filtrar. 

```jsx
arr = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Whatever" },
  { id: 4, name: "Another Whatever" }
];
const filtered = arr.filter(item => item.name.includes("Whatever"));
console.log(arr);
console.log(filtered);
```

</TimeStamp>

