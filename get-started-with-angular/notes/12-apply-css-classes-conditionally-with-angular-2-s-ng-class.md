# Apply CSS Classes Conditionally with Angular 2’s ngClass

**[📹 Video](https://egghead.io/lessons/angular-apply-css-classes-conditionally-with-angular-2’s-ngclass)**

## Handling Complex Styling with ngClass ⚡
With `[ngClass]`, we can conditionally apply CSS classes to our component elements. We'll explore this in **src/app/simple-form/simple-form.component.ts**.

We can add `[ngClass]` to our input element here. Remember that the square brackets tell Angular to evaluate whatever is passed in on the righthand side of the equals sign instead of treat it like a string.

Into `[ngClass]`, we're going to pass the object `{mousedown:}`. `mousedown` refers to the name of the CSS class, so we can now reference that in our `styles` as `.mousedown`, and the value of `mousedown` in the object is a boolean value that determines whether or not we want the styles to apply.

### simple-form.component.ts

```js
...
@Component({
  selector: 'app-simple-form',
  template: `
  <input 
    #myInput 
    type="text" 
    [(ngModel)]="message"
    [ngClass]="{mousedown: }"
  >
  <button (click)="update.emit({text:message})">Click me!</button>
  `,
  styles: [`
  :host{
    display: flex;
    flex-direction: column;
  }
  
  .mousedown{
    border: 2px solid greeen;
  }

  input:focus{
    font-weight: bold;
    outline: none;
  }
  
  button{
    border:none;
  }
  `]
})

...
```

We need to now define the condition under which the styles apply. We'll add a `isMousedown` property to our component class, and pass it in to the `mousedown` property on our `[ngClass]` object.

To allow our `isMousedown` property to be effective, we can add a `(mousedown)` event to our `input` that sets `isMouseDown` to `true`, as well as `(mouseup)` and `(mouseleave)` events that set `isMousedown` to `false`.

### simple-form.component.ts
```js
...
@Component({
  selector: 'app-simple-form',
  template: `
  <input 
    #myInput 
    type="text" 
    [(ngModel)]="message"
    [ngClass]="{mousedown:isMousedown}"
    (mousedown)="isMousedown = true"
    (mouseup)="isMousedown = false"
    (mouseleave)="isMousedown  = false"
  >
  <button (click)="update.emit({text:message})">Click me!</button>
  `,
  styles: [`
    :host{
      display: flex;
      flex-direction: column;
    }
    .mousedown{
      border: 2px solid green;
    }
    input:focus{
      font-weight: bold;
      outline: none;
    }
    button{
      border: none;
    }
    `]
})
export class SimpleFormComponent implements OnInit {
  
  isMousedown;

  @Input() message

  @Output() update = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}
```
Once we save our changes and open up our development server,
```bash
ng serve
```
We can navigate to localhost:4200 and see that our `input` element `border` style changes on `mousedown`.

![Green Border on Mousedown](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594929158/transcript-images/angular-apply-css-classes-conditionally-with-angular-2-s-ngclass-green-border-on-mousedown.gif)

We can use `ngClass` to conditionally apply styles to elements by passing in some boolean value.

## Resources 📖
- [Angular - ngClass Directive](https://angular.io/api/common/NgClass)