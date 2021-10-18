# Enable TypeScript support in a Next.js app

[Video Link](https://egghead.io/lessons/next-js-enable-typescript-support-in-a-next-js-app?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

- Next.js comes with TypeScript support, but it is not enabled by default.
- 📜 What is Typescript? Check out the [Typescript Docs](https://www.typescriptlang.org/docs/) 🧩 Briefly Typescript is a language that is a superset of Javascript. Perhaps the biggest feature it provides is _static type checking_.
- Create an empty `tsconfig.json` in your project's directory
- If we try to run `yarn dev` now then we'll get an error because we need to install the necessary typescript packages (`typescript`, `@types/react`, and `@types/node`) which we can do by running this command: `yarn add --dev typescript @types/react @types/node`
- This will populate the `tsconfig.json` file with values.
- By default strict mode is turned off by default; however, in order to write better code, go to `tsconfig.json` and change `"strict": true` and add `"strictNullChecks": true` right below it.
- This will help us avoid the vast majority of run-time issues
- The last name is to rename `index.js` to `index.tsx`
- We can test to see if everything's working by adding a typed variable to our `index.tsx`:

  ```js
  const title: string = "Next.js + Typescript";
  ```
