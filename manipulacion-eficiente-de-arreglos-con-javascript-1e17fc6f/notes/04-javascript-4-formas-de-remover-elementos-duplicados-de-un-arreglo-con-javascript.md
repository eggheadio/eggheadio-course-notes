# [4 formas de remover elementos duplicados de un arreglo con Javascript](https://egghead.io/lessons/javascript-4-formas-de-remover-elementos-duplicados-de-un-arreglo-con-javascript)


<TimeStamp start="0:01" end="0:20">

Usando `Array.filter` junto con `Array.indexOf` para crear un nuevo arreglo sin elementos duplicados. `Array.filter` crea un nuevo arreglo con los elementos que compran la condición dada. Es decir, si el elemento pasa a la condición se retorna true, indicando que este será agregado al nuevo arreglo.

```jsx 
const data = [1,5,6,1,3,5,90,123,512,6]
const result = data.filter((item, index) => {
    return data.indexOf(item) === index
})
console.log(data)
console.log(result)
```

</TimeStamp>

<TimeStamp start="0:39" end="0:49">

`Set` es una estructura de datos que almacena valores únicos. Para esto simplemente creamos una offset basada en nuestro arreglo original y después compartimos dicho Set a un arreglo nuevamente utilizando la sintaxis spread

```jsx 
const data = [1,5,6,1,3,5,90,123,512,6]
const result = new Set(data)
console.log(data)
console.log([...result])
```

</TimeStamp> 

<TimeStamp start="0:55" end="1:15">

El método `Array.reduce` también puede ser utilizado con el mismo propósito. Array.reduce ejecuta una función sobre cada elemento y retorna un valor como método del resultado. Array.reduce recibe dos parámetros, una función llamada reductora que tiene al menos dos argumentos, el acumulador y el ítem actual de la iteración, y como segundo parámetro el valor inicial, en este caso un arreglo vacío.

```jsx
const data = [1,5,6,1,3,5,90,123,512,6]

const result = data.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
console.log(data)
console.log(result); 
```

</TimeStamp>

<TimeStamp start="1:30" end="1:50">

`Array.forEach` es otra forma de iterar sobre el arreglo, y como tal también permite remover duplicados, pero de una forma más imperativa. Aquí utilizamos un arreglo auxiliar para almacenar los elementos no duplicados. Y al iterar sobre el arreglo se utiliza un bloque condicional que verifica que el ítem no exista ya en el elemento de valores únicos utilizando Array.includes.


```jsx
const data = [1,5,6,1,3,5,90,123,512,6]
let result = []
data.forEach(item => {
  //pushes only unique element
  if (!result.includes(item)) {
    result.push(item);
  }
});
console.log(data)
console.log(result);
```
</TimeStamp>

