# Provide and Share Values with Angular 2 Dependency Injection

**[📹 Video](https://egghead.io/lessons/angular-provide-and-share-values-with-angular-2-dependency-injection)**

## Object Providers ⚡
In our **app.module.ts** we provided the `MailService`, and we injected the `Mailservice` into our **app.component.ts** constructor by the *type* (the `MailService` in `providers` matches `mail:MailService` in the  `AppComponent` constructor). 

We can accomplish the same thing by navigating to **src/app/app.module.ts** and passing in an object to our `providers` with properties `provide` and `useClass`.

### app.module.ts
```js
...
@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule
  ],
  // Object provider:
  providers: [{provide: "mail", useClass: MailService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

We can then navigate to **src/app/app.component.ts** and, instead of injecting `MailService` by type into the constructor, use the `@Inject` decorator. Be sure to import `Inject` first.
### app.component.ts
```js
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><app-simple-form></app-simple-form>{{mail.message}}</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started`;

  constructor(@Inject('mail') public mail){

  }
}
```
By passing in the string `'mail'` to our `@Inject` decorator, Angular knows to use the `MailService` class because `'mail'` corresponds to the `provide` property defined in our `providers`. 

For the above reason, and because we no longer reference `MailService` in **app.component.ts**, we were able to delete the import of `MailService`.

**Note:** My application would not compile with `mail` as a private variable, so it has been changed to public in the above code.

Providing with these objects is also useful when providing APIs. For example, in **src/app/app.module.ts**, we add an object with `provide` and `useValue` properties.
### app.module.ts
```js
...
@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: "mail", useClass: MailService},
    {provide: "api", useValue: 'http://localhost:3000'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

We can now inject `'api'` into our **app.component.ts** constructor and access the value on `useValue`.

### app.component.ts
```js
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div>
    <app-simple-form></app-simple-form>
    {{mail.message}}
    <hr>
    {{api}}
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started`;

  constructor(
    @Inject('mail') public mail,
    @Inject('api') public api,
  ){

  }
}
```
Starting our development server,
```bash
ng serve
```
And navigating to localhost:4200 should allow us to see displayed the value associated with `'api'`.

![API Injection Display](./images/angular-provide-and-share-values-with-angular-2-dependency-injection-api-injection-display.png)

## Resources 📖
- [Angular - Dependency Injection](https://angular.io/guide/dependency-injection)