# [Working with Static Properties on a Class](https://egghead.io/lessons/javascript-working-with-static-properties-on-a-class)

Static keyword sets properties to classes themselves and do not go deep into the .prototype object so you cannot easily access these static properties.

In the example below we do not have access to `callRectangle` and we only get an error.

```js
class Retangle{
  static callRectangle(){
    return 'hello world'
  }
}

const myShape = new Rectangle()
console.log(myShape.callRectangle) //error
```

The great thing about static properties is that we can call them with the supper keyword and subclassed components.

In the example below we our `Square` extends `Rectangle` and it contains a static property of `whoAmI` as a function that returns "Hello, all " in addition to super.callRectangle().

```js
class Square extends Rectangle {
  static whoAmI(){
    return "Hello, all " + super.callRectangle() 
  }
} 

console.log(Square.whoAmI())
```

Above the output of `console.log` would be "Hello all. Hello world." We are concatenating our return string from the static method `whoAmI` on `theSsquare` class with `Rectangle`'s `callRectangle()` method.

Below we recreate the `static` keyword using a regular function, that is done by converting the class to a function and provide the function a property called `callRectangle` and assigning it a function. Finally `console.log` will give us the same result. 

```js
function Rectangle(){
}

Rectangle.callRectangle = function(){
  return 'hello world'
}
class Square extends Rectangle {
  static whoAmI(){
    return "Hello, all " + super.callRectangle()
  }
}

console.log(Square.whoAmI()) //Hello, all hello world
```

This can be explained because we are using a regular function and providing a property of `callRectangle` that lives directly on the function similar to what the static keyword in a class.
