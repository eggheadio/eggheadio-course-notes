# Adding absolute imports to Next.js app

[Video Link](https://egghead.io/lessons/egghead-adding-absolute-imports-to-next-js-app?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

- Next.js supports absolute imports
- 📜 [Next.js Documentation](https://nextjs.org/docs/advanced-features/module-path-aliases)
- To add absolute imports, go to `tsconfig.json` and add the following key: value pairs:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["components/*"]
    }
  }
}
```

- Now whenever we import a component from `components/` we can import it with `@components/*` where `*` is the file name.
- Let's refactor our code so wherever we were importing our `Article` component, we can now `import { Article } from '@components/Article`
