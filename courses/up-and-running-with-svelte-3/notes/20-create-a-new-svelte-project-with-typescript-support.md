# 20. Create a new Svelte project with TypeScript support

[Video Link](https://egghead.io/lessons/svelte-create-a-new-svelte-project-with-typescript-support?pl=getting-started-with-svelte-3-05a8541a)

- Svelte has support for Typescript.
- To create a new Svelte project with typescript support, first run `npx degit sveltejs/template my-svelte-plus-typescript-project`
- To setup Typescript just run `node scripts/setupTypeScript.js` this will convert this template into a Typescript project
- You can install dependencies with yarn/npm
- If you explore the repository we'll see that the `script` tags have the attribute `lang="ts"` which shows that typescript is supported.
- `npx svelte-check` is a command that will check your entire codebase for any type related issues.
