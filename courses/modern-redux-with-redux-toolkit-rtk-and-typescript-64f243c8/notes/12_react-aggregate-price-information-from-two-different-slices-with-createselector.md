# Aggregate Price Information From Two Different Slices with createSelector

[Video link](https://www.egghead.io/lessons/react-aggregate-price-information-from-two-different-slices-with-createselector?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:25" end="0:45">

```ts
export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price * items[id];
    }
    return total.toFixed(2);
  }
)
```

</TimeStamp>

<TimeStamp start="1:10" end="1:15">

```ts
import { getTotalPrice } from "./cartSlice";

const totalPrice = useAppSelector(getTotalPrice);
```

</TimeStamp>

<TimeStamp start="1:20" end="1:23">

```html
<td className={styles.total}>${totalPrice}</td>
```

</TimeStamp>