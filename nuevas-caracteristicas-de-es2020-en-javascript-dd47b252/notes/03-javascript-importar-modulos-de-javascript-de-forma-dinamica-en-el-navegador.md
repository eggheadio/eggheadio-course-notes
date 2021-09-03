# [Importar módulos de JavaScript de forma dinámica en el navegador](https://egghead.io/lessons/javascript-importar-modulos-de-javascript-de-forma-dinamica-en-el-navegador)

<TimeStamp start="0:01" end="0:06">

La sintaxis `import('module.js')` permite importar módulos de forma dinámica  directamente en el navegador

</TimeStamp>

<TimeStamp start="0:09" end="0:20">

Para acceder al módulo utilizamos el método `.then()` y error en `.catch()`:

```jsx
import('module.js').then(module => {
    const add = module.default(7,4)
    console.log({add})
}).catch(error => {
    console.error(error)
})
```

</TimeStamp>

<TimeStamp start="0:50" end="1:00">

```jsx 
const loadModules = () => {
    const moduleA = import('./moduleA.js')
    const moduleB = import('./moduleB.js')
    return Promise.all([moduleA, moduleB])
}
loadModules().then(([moduleA, moduleB]) => {
    const add = moduleA.default(7,4)
    const substract = moduleB.default(7,4)
    console.log({
        add,
        substract
    })
})
```

</TimeStamp>

<TimeStamp start="1:14" end="1:30">

Esta sintaxis también puede ser usada en métodos como importar en base a una condición, por ejemplo:

```jsx
document.getElementById('button').addEventListener('click', async () => {
    const {add} =  await import('./moduleC.js')
    console.log({add: add(7,4)})
})
```

</TimeStamp>

<TimeStamp start="2:15" end="2:235">

JavaScript nos ofrece importaciones dinámicas de la misma forma que webpack ya lo hacía utilizando la sintaxis import función que retorna una promesa que nos permite utilizar todos los métodos de la API promesa como async y await para así importar de forma programática cualquier módulo que necesitemos de forma nativa directamente en el navegador.

</TimeStamp>
