# Configure Assets for my React app in an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-configure-assets-for-my-react-app-in-an-nx-workspace)**

Nx creates an _assets_ folder inside our apps where we can serve assets such as images, sounds, videos, etc.

Any file inside this _assets_ folder, will be available for us to link to by just using the relative path of the file. For example:

```html
<img src="/assets/beans.png">
```

## Changing or adding folders to assets

```json
{
  "version": 1,
  "projects": {
    "store": {
      "root": "apps/store",
      "sourceRoot": "apps/store/src",
      "projectType": "application",
      "schematics": {},
      "architect": {
        "build": {
          "builder": "@nrwl/web:build",
          "options": {
            "outputPath": "dist/apps/store",
            "index": "apps/store/src/index.html",
            "main": "apps/store/src/main.tsx",
            "polyfills": "apps/store/src/polyfills.ts",
            "tsConfig": "apps/store/tsconfig.app.json",
            "assets": ["apps/store/src/favicon.ico", "apps/store/src/assets"],
            "styles": ["apps/store/src/styles.scss"],
            "scripts": [],
            "webpackConfig": "@nrwl/react/plugins/webpack"
          },
        },
    },
```

Similar to the stylesheet, you can add more folders to be used as assets by opening your `workspace.json` and inside the `build` you can see an `assets` array. Add the path of the folder that you want to include and Nx will start serving the contents from that folder.

You can also copying assets by using the extended way of copying assets.

```json
{
    "assets": ["apps/store/src/favicon.ico", "apps/store/src/assets",
    {
        "input": ".",
        "glob": "*.png",
        "output": ""
    }
    ]
}

```

Let's have a look at what each of these mean:

- `input` points to some folder location
- `glob` pattern of what you want to copy - in the example we are copying only PNG files
- `output` points to the output directory, where the asset should be copied