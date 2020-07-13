# Loop Through Angular 2 Components with ngFor

**[📹 Video](https://egghead.io/lessons/angular-loop-through-angular-2-components-with-ngfor)**

## Angular Looping Through Data ⚡
In **src/app/mail.service.ts**, we create a new `messages` array:

### mail.service.ts:
```js
...
export class MailService {
  messages = [
    `You're now friends with John`,
    'John liked your tweet',
    `You'll never believe what John said...`
  ]
  constructor() { }
}
```

We then can navigate to **src/app/app.component.ts** and clean up everything including our template.

### app.component.ts
```js
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div>
  </div>`,
})
export class AppComponent {
  constructor(
    @Inject('mail') public mail,
  ){}
}
```

We'll now create a `<ul>` element within our component template. Within our `<ul>` element, we want to create a `<li>` element for each message in our `MailService` `messages` array. To do this, we add `*ngFor="let message of mail.messages"` to our `<li>` element:
### app.component.ts
```js
...
@Component({
  selector: 'app-root',
  template: 
  `<div>
    <ul>
      <li *ngFor="let message of mail.messages"></li>
    </ul>
  </div>`,
})

...
```
`mail.messages` refers to our `MailService` `messages` array, and this new `message` variable references the value of each message in the `messages` array.

We can use the `message` variable to display each item in our `messages` array in an `<li>` element.
```js
...
@Component({
  selector: 'app-root',
  template: 
  `<div>
    <ul>
      <li *ngFor="let message of mail.messages">
        {{message}}
      </li>
    </ul>
  </div>`,
})

...
```

We can now save our changes and start our development server
```bash
ng serve
```
Navigating to localhost:4200 should allow us to see a list containing each `message` in `messages`.

![List of Messages Displayed](./images/8.png)

The asterisk in `*ngFor` tells Angular that the element is a template that can be regenerated or reused by whatever *structural directive* is passed in. In this case, the structural directive is "ngFor", and it's using the `<li>` element as a template to be reproduced for each `message` in `messages`.

## Resources 📖
- [Angular - Looping through Data](https://angular.io/guide/displaying-data#add-logic-to-loop-through-data)