# Share code between a React Frontend and Node.js Backend Application in Nx

**[📹 Video](https://egghead.io/lessons/egghead-share-code-between-a-react-frontend-and-node-js-backend-application-in-nx)**

Let's see how we can share code between applications and libraries.

We start by creating a new library called `util-interfaces` with the generate command.

```shell
yarn nx generate @nrwl/workspace:lib util-interfaces --directory=api
```

You can see that we are creating a new directory inside our `libs` folder because this library is related to our `api` application.

Then we can create a new Game interface inside the file `api-util-interfaces.ts`

```typescript
export interface Game {
  id: string
  name: string
  image: string
  description: string
  price: number
  rating: number
}
```

_**Note:** We renamed the file `game.ts`_

This interface represents the structure of a game that gets exposed by our api.

Since we changed the name of the file, we need to update the export inside our `index.ts` file (`libs/api/util-interfaces/src/index.ts`)

```typescript
export * from './lib/game'
```

We can know import our Game interface with:

```react
import { Game } from '@nxegghead/api/util-interfaces'
```

> " having the backhand also in the same monorepo can bring a lot of advantages because, in this way, we cannot even share just simple types as we did in our very simple example here, but maybe even some business logic that needs to be repeated on the frontend side as well as on the backend side once the data arrives."
