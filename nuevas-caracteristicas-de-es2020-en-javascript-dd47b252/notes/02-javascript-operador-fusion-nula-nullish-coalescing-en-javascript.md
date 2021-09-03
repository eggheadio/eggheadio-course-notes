# [Operador Fusión Nula/Nullish Coalescing en Javascript](https://egghead.io/lessons/javascript-operador-fusion-nula-nullish-coalescing-en-javascript)

<TimeStamp start="0:01" end="0:10">

El nuevo operador fusión nula `&&` permite seleccionar la primera variable no-null y no-undefined de una lista, este operador retorna el primer valor definido y no el primer valor verdadero.

</TimeStamp>

<TimeStamp start="0:15" end="0:20">

Por ejemplo:

```jsx 
let height= 0;
console.log(heigh || 100); //100
console.log(heigh ?? 100); //0
```

</TimeStamp>

<TimeStamp start="0:30" end="0:35">

Este nuevo operador `??` esta prohibido usar con los operadores `&&` (and), `||` (or)

</TimeStamp>

<TimeStamp start="0:37" end="0:44">

El operador de fusión nula provee una forma de elegir el primer valor definido y puede ser utilizado para asignar valores por defecto.

</TimeStamp>

