# [ES6 Class Constructors and the Super Keyword](https://egghead.io/lessons/javascript-es6-class-constructors-and-the-super-keyword)

When the `new` keyword is used against a function the entire function body is invoked. However, with classes only the constructor body is executed.

Important to note `constructor` keyword is specific to classes only and receives any params passed to it.

```js
class Person {
  constuctor(name) {
    this.firstName = name
  }
}

const me = new Person('tyler')

console.log(me)
```

0:19 There can only be constructor per class. If you're working with a class that is extending another class, in order to use a constructor at all, as well as use the this keyword from within that constructor, you have to first call the super keyword.

0:33 The super keyword is used to access and call functions on a class's parent. Super tends to be used mainly to call the constructor function found on the parent class we're extending.

```js
class Person extends Object {
  constuctor(name) {
    super()
    this.firstName = name
  }
}

const me = new Person('tyler')

console.log(me)
```

Below we cover two classes, `Rectangle` with `constructor` that takes in a `height` and `width`. Within the constructor we are assigning values to name, height, and width to the instance of `Rectangle`. Next, in the `Square` class which extends `Rectangle` we call super passing through length. Squre super call will invoke `Rectangle` constructor which creates these properties.

```js
class Rectangle {
  constuctor(height, width) {
    this.name = 'Rectangle'
    this.height = height
    this.width = width
  }
}

class Square extends Rectangle {
  constructor(length) {
  super(length, length)
  this.name = 'Square'
  }
}

const myShape = new Square(1)

console.log(myShape) //Square {name: 'Square', height: 1, width: 1}
```

In the example above, when we use the `new` keyword for `myShape` we create a new object. In this case first we invoke the constructore of 'Square', `super` then calls `Rectangle`'s constructor which assigns the properties to this new object. Finally we mutate the name property, originally `Rectangle` and console.log displays the final object.

It is important to note that `super` is required when working with subclasses that have constructores and the `this` keyword is used in the constructor.
