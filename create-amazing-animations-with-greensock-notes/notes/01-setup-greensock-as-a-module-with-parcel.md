# Setup GreenSock As A Module With Parcel

📹 [Video](https://egghead.io/lessons/greensock-setup-greensock-as-a-module-with-parcel)

1. Start by creating a folder for your new project, then add 🤔[parcel bundler](https://parceljs.org/getting_started.html) as a dev dependency.

```
yarn add -D parcel-bundler
```

2. Now you have a package.json where you can add a script called dev that will use parcel to run the index.html file.

```js
{
    "scripts": {
        "dev": "parcel index.html"
    },
    "devDependencies": {
        "parcel-bundler": "version#"
    }
}
```

3. Create an index.html file, a default template ( ! tab inside index.html ) is sufficient.

4. You can now run the command.
```
yarn dev
```
- Go to the corresponding url (defaults to http://localhost:1234) to see your project.
- Stop your server before adding index.js script.

5. Create an index.js file and add a script tag to index.html to bring it in.
 ```html
 <script src='./index.js'></script>
 ```
- Now you can restart your server after adding index.js script.

6. You can now test your js by adding some `innerHTML` to the `document.body`.
```js
document.body.innerHTML = `<h1>Hi</h1>`
```

## Install Greensock

1. Now import from 'gsap' at the top of index.js.
```js
import { TweenMax } from 'gsap'
```
- Parcel bundler will automatically add the dependency, if you aren't using parcel-bundler then run
```
yarn add gsap
```
from your terminal to install greensock.

2. You can now create an element in index.html, and then run a gsap animation in index.js.
```js
TweenMax.to("element", duration, {properties})
```

Take a look at your animation in the browser.


📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-animate-and-center-an-element-to-a-click-event-with-greensock)
