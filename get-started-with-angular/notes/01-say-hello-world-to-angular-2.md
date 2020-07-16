# Say "Hello World" to Angular 2

**[📹 Video](https://egghead.io/lessons/angular-say-"hello-world"-to-angular-2)**

## Setting up with the Angular CLI ⚡

To get started with our Angular application, we'll install the [Angular CLI](https://cli.angular.io/).


In the terminal:
```bash
npm install -g @angular/cli
```
Even if you've installed the Angular CLI in the past, running this command will update it to the latest version. 

Now, change directory to where you'd like your project folder to live. Then, in the terminal, we create our application's project folder:
```bash
ng new angular2-fundamentals
```
In the terminal, you will receive two prompts:
```bash
? Would you like to add Angular routing?
? Which stylesheet format would you like to use?
```
For the first, enter "n" for no. For the second, select CSS.

After a few moments we should now have a folder in the current directory with the name **angular2-fundamentals**

Change directories into your new project folder:
```bash
cd angular2-fundamentals
```
And start your development server:
```bash
ng serve
```
Once loaded, we can navigate to **localhost:4200** in our browser.

If you're following along with the lesson and using the latest version of Angular CLI, you may be surprised to see a much more elaborate page compared to the one in the lesson:

![Angular CLI Default Application Page](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594927986/transcript-images/angular-say-hello-world-to-angular-2-cli-default-page.jpg)

We can easily modify this page to match the one in the lesson. In your project, navigate to **src/app/app.component.ts**

Here, we should see:
### app.component.ts
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2-fundamentals';
}
```
Our component templateUrl property points to **app.component.html**. To match the webpage in the lesson, we can make the following changes:
### app.component.ts
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started`;
}
```
After saving these changes and returning to localhost:4200 in the browser, we should see a page that resembles the one in the lesson.

![Let's Get Started Webpage](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594927986/transcript-images/angular-say-hello-world-to-angular-2-lets-get-started-webpage.jpg)

## Resources 📖
- [Angular CLI](https://cli.angular.io/)




