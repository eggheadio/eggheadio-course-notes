# [Encadenamiento Opcional en JavaScript](https://egghead.io/lessons/javascript-encadenamiento-opcional-en-javascript)

<TimeStamp start="0:01" end="0:09">

Al querer acceder a la propiedad de un objeto que no estamos seguros que existe,obtendremos un error. 

Por ejemplo:

```jsx
let user = {}
console.log(user.address.street)
```

</TimeStamp>

<TimeStamp start="0:10" end="0:18">

O al intentar acceder a una propiedad `innerHTL` de un elemento HTML inexistente tambien tendremos un error. Por ejemplo: 

```jsx
let html = document.querySelector('.some-element').innerHTL
console.log(html)
```

</TimeStamp>

<TimeStamp start="0:19" end="0:30">

La mejor manera de evitar esto es usando condicionales y el operador `&&`

```jsx
let user = {
    contact: null 
}
console.log(user && user.contact && user.contact.address)
```

Gracias a los operadores la consola nos devuelve `null`

</TimeStamp>

<TimeStamp start="0:34" end="0:39"> 

Usar el operador `&&` puede solucionar el problema, pero esto tambien se puede volver complejo 

</TimeStamp>

<TimeStamp start="0:42" end="0:48"> 

El encadenamiento opcional detiene la evaluacion y retorna `null` si la parte izquierda es `null` o `undefined` 

</TimeStamp>

<TimeStamp start="0:49" end="0:55"> 

No hay que abusar del uso del encadenamiento ya que puede invisibilizar errores 

</TimeStamp>

<TimeStamp start="1:13" end="0:18"> 

Una de las condiciones para usar el encadenamiento es:

- La variable inicial debe existir 
  
</TimeStamp>


<TimeStamp start="1:21" end="1:30"> 

Tambien puedes usar el operador para acceder a funciones opcionales, si la funcion no esta definida el operador evitara el error y mostrara `undefined` en caso contrario lo ejecutara, como por ejemplo:

```jsx
let user = {
    isAdmin() {
        return 'Soy el admin'
    }
}
let user2 = {}
console.log(user.isAdmin?.())
console.log(user2.isAdmin?.())
```

</TimeStamp>

<TimeStamp start="1:33" end="1:40"> 

Tambien funciona para acceder a propiedades utilizando brackets, en caso que la propiedad no exista en el objeto, la consola nos devolvera `undefined`

  
</TimeStamp>

<TimeStamp start="1:45" end="0:50"> 

Ahora podemos usar el encadenamiento de forma nativa en el navegador.
  
</TimeStamp>