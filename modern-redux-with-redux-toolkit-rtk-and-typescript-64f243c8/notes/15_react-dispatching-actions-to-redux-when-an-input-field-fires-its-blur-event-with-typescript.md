# Dispatching Actions to Redux when an Input Field Fires its Blur Event with TypeScript

[Video link](https://www.egghead.io/lessons/react-dispatching-actions-to-redux-when-an-input-field-fires-its-blur-event-with-typescript?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:15" end="0:30">

```ts
updateQuantity(state, action: PayloadAction<{ id: string, quantity: number }>) {
  const { id, quantity } = action.payload;
  state.items[id] = quantity;
}

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
```

</TimeStamp>

<TimeStamp start="0:45" end="1:05">

More info on [FocusEvent](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent)

```ts
import { getTotalPrice, removeFromCart, updateQuantity } from "./cartSlice";

function onQuantityChanged(
  e: React.FocusEvent<HTMLInputElement>,
  id: string
) {
  const quantity = Number(e.target.value) || 0;
  dispatch(updateQuantity({ id, quantity }));
}
```

</TimeStamp>

<TimeStamp start="1:30" end="0:00">

```jsx
<input
  ...
  onBlur={(e) => onQuantityChanged(e, id)}
/>
```

</TimeStamp>