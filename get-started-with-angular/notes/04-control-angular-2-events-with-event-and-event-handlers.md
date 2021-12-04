# Control Angular 2 Events with $event and Event Handlers

**[📹 Video](https://egghead.io/lessons/angular-control-angular-2-events-with-$event-and-event-handlers)**

## Angular Event Object References ⚡
To reference the actual mouse event on our button, we can use the `$event` syntax.

### simple-form.component.ts
```js
...
@Component({
  selector: 'app-simple-form',
  template: `<div>
  <input #myInput type="text" />
  <button (click)="onClick($event)">Click me!</button>
  </div>`,
  styles: [
  ]
})

...
```

Above, we pass in `$event` to `onClick()`. After saving our changes and starting our development server,
```bash
ng serve
```
We should be able to see the `MouseEvent` object being printed to our console when clicking the button.

We can also pass `myInput.value` into our `onClick` method, then refactor our `onClick` method to accept that value so that we can log it to our console.
### simple-form.component.ts
```js
...

@Component({
  selector: 'app-simple-form',
  template: `<div>
  <input #myInput type="text" />
  <button (click)="onClick($event, myInput.value)">Click me!</button>
  </div>`,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {
  onClick(event, value) {
    console.log(event)
    console.log(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
```
The `$event` reference works on any DOM event. For example, changing `(click)` to `(mouseover)` should cause both the `MouseEvent` object and input value to be logged to the console when we mouse over the button.

### simple-form.component.ts
```js
...
@Component({
  selector: 'app-simple-form',
  template: `<div>
  <input #myInput type="text" />
  <button (mouseover)="onClick($event, myInput.value)">Click me!</button>
  </div>`,
  styles: [
  ]
})

...
```

## Resources 📖
- [Angular - $event](https://angular.io/guide/user-input#get-user-input-from-the-event-object)