# Combining Data from Two Redux Slices to Build our Shopping Cart

[Video link](https://www.egghead.io/lessons/react-combining-data-from-two-redux-slices-to-build-our-shopping-cart?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)


<TimeStamp start="0:08" end="0:13">

```ts
import { useAppSelector } from "../../app/hooks";
```

</TimeStamp>

<TimeStamp start="0:15" end="0:30">

```ts
const products = useAppSelector((state) => state.products.products);
const items = useAppSelector((state) => state.cart.items);
```

</TimeStamp>

<TimeStamp start="0:35" end="0:50">

```tsx
<tbody>
  {Object.entries(items).map(([id, quantity]) => (
    <tr key={id}>
      <td>Magnifying Glass</td>
      <td>
        <input
          type="text"
          className={styles.input}
          defaultValue={21}
        />
      </td>
      <td>$44.44</td>
      <td>
        <button
          aria-label="Remove Magnifying Glass from Shopping Cart"
        >
          X
        </button>
      </td>
    </tr>
  ))}
</tbody>
```

</TimeStamp>

<TimeStamp start="0:55" end="1:20">

```tsx
<tbody>
  {Object.entries(items).map(([id, quantity]) => (
    <tr key={id}>
      <td>{products[id].name}</td>
      <td>
        <input
          type="text"
          className={styles.input}
          defaultValue={quantity}
        />
      </td>
      <td>${products[id].price}</td>
      <td>
        <button
          aria-label={`Remove ${products[id].name}} from Shopping Cart`}
        >
          X
        </button>
      </td>
    </tr>
  ))}
</tbody>
```

</TimeStamp>