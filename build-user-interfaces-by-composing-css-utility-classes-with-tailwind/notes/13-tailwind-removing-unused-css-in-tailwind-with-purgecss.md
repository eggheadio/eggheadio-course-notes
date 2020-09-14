Tailwind CSS is *large*

In the notes for [Lesson 7] we learned that there were approximately 1472 classes devoted specifically to setting the background color.

The total bundle size of Tailwind CSS is in the ballpark of 200kB, all of which is available to use but almost none of which ever is.

PurgeCSS is a module for postCSS that will detect which classes you use and delete all the ones you aren't, leaving a total bundle size of approximately 10kB.

Install PurgeCSS with either Yarn or NPM and `require` it from the `gulpfile.js`

*yarn*
```sh
yarn add gulp-purgecss --dev
```
*npm*
```sh
npm install gulp-purgecss --save-dev
```

```diff
  const gulp = require("gulp")
  const postcss = require("gulp-postcss")
  const tailwindcss = require("tailwindcss")
+ const purgecss = require("gulp-purgecss")
```

To inform PurgeCSS about which classes are being used, pass a path to your `PATHS.dist` directory to its `content` property.

```diff
  gulp.task("css", () => {
    return gulp
      .src(PATHS.css)
      .pipe(postcss([
        tailwindcss(PATHS.config),
        require("autoprefixer")
      ]))
+     .pipe(purgeCSS({
+       content: [PATHS.dist + "*.html"]
+     }))
      .pipe(gulp.dest(PATHS.dist))
  })
```

Compile Tailwind again and all the unused utility classes will be purged.

```sh
gulp
```