# Share and Reuse functionality with libraries in Nx

**[📹 Video](https://egghead.io/lessons/egghead-share-and-reuse-functionality-with-libraries-in-nx)**

Similar to how we import shared libraries in our Applications, we can also do the same in our libraries inside the `libs` folder.

To use our `formatRating` we can import it like we did on the `store` application.

```react
import { formatRating } from '@nxegghead/store/util-formatter'
```

You can [revise the notes](09-generate-a-typescript-library-in-an-nx-workspace.md) on lesson 9 about importing code from libraries.