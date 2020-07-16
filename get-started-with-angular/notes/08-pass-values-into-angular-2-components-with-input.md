# Pass Values into Angular 2 Components with @Input

**[📹 Video](https://egghead.io/lessons/angular-pass-values-into-angular-2-components-with-@input)**

## Using Angular's @Input Decorator ⚡

We can replace the `<li>` elements in **src/app/app.component.ts** from last lesson with `<app-simple-form>` elements from the components we created earlier.

### app.component.ts
```js
...
@Component({
  selector: 'app-root',
  template: 
  `<div>
    <ul>
      <app-simple-form *ngFor="let message of mail.messages">

      </app-simple-form>
    </ul>
  </div>`,
})

...
```
After starting up our development server
```
ng serve
```
We can navigate to localhost:4200 in our browser and see our simple form displayed for each `message` in `messages`

![Simple Form Loop](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594927986/transcript-images/angular-pass-values-into-angular-2-components-with-input-simple-form-loop.jpg)

We'll now head over to **src/app/simple-form/simple-form.component.ts**, import `Input`, and add an `@Input()` called `message`

### simple-form.component.ts
```js
import { Component, OnInit, Input} from '@angular/core';

...

export class SimpleFormComponent implements OnInit {

  @Input() message

  onClick(event, value) {
    console.log(event)
    console.log(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

```

We can now return to **app.component.ts** and use our `Input` with a `[message]` attribute within our `<app-simple-form>` element.

### app.component.ts
```js
...
@Component({
  selector: 'app-root',
  template: 
  `<div>
    <ul>
      <app-simple-form 
      *ngFor="let message of mail.messages"
      [message]="message"
      >

      </app-simple-form>
    </ul>
  </div>`,
})

...
```

By assigning `message` to `[message]`, we are inserting the value of each `message` in `mail.messages` into our `simple-form` component so that it can be displayed.

To display each message, navigate to **simple-form.componennt.ts** and add the `message` to the template.

### simple-form.component.ts
```js
...
@Component({
  selector: 'app-simple-form',
  template: `<div>
  {{ message }}
  <input #myInput type="text" />
  <button (mouseover)="onClick($event, myInput.value)">Click me!</button>
  </div>`,
  styles: [
  ]
})

...
```
After running our development server,
```bash
ng serve
```
We can see that each message is printed by a corresponding input field.

![Message Display](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594927986/transcript-images/angular-pass-values-into-angular-2-components-with-input-message-display.jpg)

The square brackets on `[message]` in **app.component.ts** tells Angular to evaluate `"message"` as the value of the `message` variable and not the `"message"` string. Both the input attribute `[message]` and the variable `message` do **not** need to be the same name as they are in this case.

## Resources 📖
- [Angular - Input Decorator](https://angular.io/api/core/Input)