# [De-sugar an ES6 Class and the Extends Keyword](https://egghead.io/lessons/javascript-de-sugar-an-es6-class-and-the-extends-keyword)


When the `class` keyword came out with ES6 the general assumption was that JavaScript finally had classes in the language. But the fact is that it is just syntatic sugar over regular functions utilizing the prototype chain for inheritance.

```js
class Workshop{}

console.log(typeof Workshop) //function
```

If we use Babel you will see that Babel will convert `class Workshop{}` into something like this:

```js
var Workshop = function Workshop() {
  _classCallCheck(this, WorkShop)
  }
  
  console.log(typeof Workshop) //function
```

If you want to desugar a class you can create a function instead and get pretty close. There are some special rules that apply only to classes in different scenarios.

Below you can see a basic implementation of a class. Classes come with special keywords to make them more dynamic.

```js
class Workshop {}

console.log(typeof Workshop)  //function
```

At a small level, we could declare fields and add methods by simply writing out an assignments within the class body like the example below. 

```js
class Workshop {
 myName = 'tyler'
 
 getLastName(){
   return 'clark'
 }
}

console.log(typeof Workshop)
```

Using the extend keyword we can connect two classes together. When we run Object.getPrototypeOf we can see the realtionship between the square and rectangle class.

```js
class Rectangle {}

class Square extends Rectangle{}

console.log(Object.getPrototypeOf(Sqaure)) //[Rectangle]
```

To desguar the extends keyword we change our classes to functions and then using Object.setPrototypeOf method. As we can see in the extample below `console.log` provides the same result by getting rectangle as the prototype of square.

```js
function Rectangle(){}

function Square(){}

Object.setPrototypeOf(Square, Rectangle)

console.log(Object.getPrototypeOf(Square)) //[Rectangle]
```

Using the `new` keyword on the square function, getPrototyeOf confirms that She is the .prototype object of Square

```js
function Rectangle(){}

function Square(){}

Object.setPrototypeOf(Square, Rectangle)

const shape = new Square()

console.log(Object.getPrototypeOf(shape) === Square.prototype) //true
```

However, the next in line proto object after this square.prototype object is the native global object.prototype method, and not the .prototype object of rectangle, as you might assume.

```js
function Rectangle(){}

function Square(){}

Object.setPrototypeOf(Square, Rectangle)

const shape = new Square()

console.log(Object.getPrototypeOf(Object.getPrototypeOf(shape) === Object.prototype) //true
```

The main take from the example above is that two layers deep in our proto chain ins the global Object.prototype object, regardless of us connecting the two functions with setPrototypeOf.

If we change our functions back to classes we will notice that two levels deep we encounter the Rectangle.prototype and not the Object.prototype object

```js
class Rectangle {}

class Square extends Rectangle {}

const shape = new Square()

console.log(Object.getPrototypeOf(Object.getPrototypeOf(shape) === Rectangle.prototype) //true
```
