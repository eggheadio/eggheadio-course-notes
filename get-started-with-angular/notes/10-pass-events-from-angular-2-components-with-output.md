# Pass Events from Angular 2 Components with @Output

**[📹 Video](https://egghead.io/lessons/angular-pass-events-from-angular-2-components-with-@output)**

## Outputting Events From Input to Message ⚡
In **src/app/simple-forms/simple-forms.component.ts**, we add an `@Output` decorator to our component called `update`. This `@Output` will be an `EventEmitter`, so we'll need to import both `Output` and `EventEmitter`.

### simple-forms.component.ts
```js
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `<div>
  {{ message }}
  <input #myInput type="text" [(ngModel)]="message"/>
  <button (click)="onClick($event, myInput.value)">Click me!</button>
  </div>`,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {

  @Input() message

  @Output() update = new EventEmitter();

  onClick(event, value) {
    console.log(event)
    console.log(value)
  }
  constructor() {
    setInterval(()=> this.message = Math.random().toString(), 1000);
  }

  ngOnInit(): void {
  }

}
```
Above, we also change `(mouseover)` to `(click)` if that hasn't already been done.

We can now change the `onClick()` call on our `(click)` event to `update.emit({text:message})`, and delete our `onClick` method entirely. Furthermore, now is a good time to remove the random message creator in the `constructor` from last lesson, as well as the `{{ message }}` in our template.

### simple-forms.component.ts
```js
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `<div>
  <input #myInput type="text" [(ngModel)]="message"/>
  <button (click)="update.emit({text:message})">Click me!</button>
  </div>`,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {

  @Input() message

  @Output() update = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}
```

Now head back over to **src/app/app.component.ts** and make the following changes to the template there:
### app.component.ts
```js
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div>
    <ul>
      <li *ngFor="let message of mail.messages">{{ message }}</li>
    </ul>
      <app-simple-form 
      *ngFor="let message of mail.messages"
      [message]="message"
      >

      </app-simple-form>
  </div>`,
})
export class AppComponent {
  constructor(
    @Inject('mail') public mail,
  ){}
}
```
What we want is for the value in the input field to dictate the message printed in the corresponding `<li>` above.

What we did in **simple-form.component.ts** was describe a new event called `update`, and we can now use that event within our `<app-simple-form>` element to call a new `onUpdate()` method.

### app.component.ts
```js
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div>
    <ul>
      <li *ngFor="let message of mail.messages">{{ message }}</li>
    </ul>
      <app-simple-form 
      *ngFor="let message of mail.messages"
      [message]="message"
      (update)="onUpdate($event)"
      >

      </app-simple-form>
  </div>`,
})
export class AppComponent {

  onUpdate(event){
    console.log(event)
  }

  constructor(
    @Inject('mail') public mail,
  ){}
}
```
When we start our development server
```bash
ng serve
```
And navigate to localhost:4200 in the browser, we should see that the text within the input field is logged as an object in the console when the corresponding button is pressed.

![Update Event Console](./images/13.png)

Now we navigate to **src/app/mail.service.ts**. To give us a way of looking up each message in our `MailService`, we're going to make each message an object with an `id` property.

### mail.service.ts
```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  messages = [
    {id: 0, text:`You're now friends with John`},
    {id: 1, text:`John liked your tweet`},
    {id: 2, text:`You'll never believe what John said...`}
  ];
  constructor() { }
}
```

To display each `message` properly now, we need to make sure they're called in as `message.text`. Furthermore, we can pass `message.id` and `$event.text` into `onUpdate()`, and refactor `onUpdate()`  to tell the `MailService` to update the corresponding messages.

### app.component.ts
```js
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div>
    <ul>
      <li *ngFor="let message of mail.messages">{{ message.text }}</li>
    </ul>
      <app-simple-form 
      *ngFor="let message of mail.messages"
      [message]="message.text"
      (update)="onUpdate(message.id, $event.text)"
      >

      </app-simple-form>
  </div>`,
})
export class AppComponent {

  onUpdate(id, text){
    this.mail.update(id, text)
  }

  constructor(
    @Inject('mail') public mail,
  ){}
}
```
We called `update()` on our `MailService`, so now we need to define that method within `MailService`.

**Note:** The `update()` method below is different than the `update()` method in the lesson due to changes in `map`.

### mail.service.ts
```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  messages = [
    {id: 0, text:`You're now friends with John`},
    {id: 1, text:`John liked your tweet`},
    {id: 2, text:`You'll never believe what John said...`}
  ];

  update(id, text){
    this.messages.map(m => {
      m.id === id ? m.text = text : m
    })
  }

  constructor() { }
}
```

Now at localhost:4200, we should see that our messages update when our inputs change and corresponding buttons are pressed.

## Resources 📖
- [Angular - Output Decorator](https://angular.io/api/core/Output)