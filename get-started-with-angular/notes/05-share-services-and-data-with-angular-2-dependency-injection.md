# Share Services and Data with Angular 2 Dependency Injection

**[📹 Video](https://egghead.io/lessons/angular-share-services-and-data-with-angular-2-dependency-injection)**

## Angular Services ⚡
Within your project folder directory, generate a new service called "mail" with Angular CLI in the terminal
```bash
ng g s mail
```
This will create two files within **src/app**: **mail.service.ts** and **mail.service.spec.ts**.

Now, navigate to **src/app/app.module.ts**, import `MailService`, and add it as a provider:
### app.module.ts
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
// Import:
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule
  ],
  // Provider:
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now navigate to **src/app/app.component.ts**, import `MailService`, create a constructor for the `AppComponent` class, and inject `MailService` in:

### app.component.ts
```js
import { Component } from '@angular/core';
// Import
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div><app-simple-form></app-simple-form></div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started`;
  
  // Constructor
  constructor(private mail:MailService){

  }
}

```

Now, whatever you put on `MailService` can be used in `AppComponent`.

For example, if we create a `message` variable in `MailService`, we can access it within `AppComponent`.
### mail.service.ts
```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  // Message:
  message = "You've got mail!"
  constructor() { }
}
```
### app.component.ts
```js
import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  // Display mail.message to screen:
  template: `<div><app-simple-form></app-simple-form>{{mail.message}}</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started`;

  constructor(private mail:MailService){

  }
}
```
The above code displays `mail.message` in our `AppComponent`. Now we can start the development server
```bash
ng serve
```
And see that our `MailService` message is being displayed on localhost:4200.

![MailService Message Display](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594927986/transcript-images/angular-share-services-and-data-with-angular-2-dependency-injection-mailservice-message-display.jpg)

## Resources 📖
- [Angular - Introduction to Services and Dependency Injection](https://angular.io/guide/architecture-services#introduction-to-services-and-dependency-injection)