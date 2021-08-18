# Access Redux Data in a Component with the TypeScript-enabled useAppSelector hook

[Video link](https://www.egghead.io/lessons/react-access-redux-data-in-a-component-with-the-typescript-enabled-useappselector-hook?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:19" end="0:25">

```ts
import { useAppSelector } from "../../app/api";
```

</TimeStamp>

<TimeStamp start="0:27" end="0:38">

```ts
const products = useAppSelector((state) => state.products.products);

{Object.values(products).map((product) => (
```

</TimeStamp>

<TimeStamp start="1:07" end="1:14">

```ts
products: {
  "123": {
    name: "fake product"
  }
}
```

</TimeStamp>