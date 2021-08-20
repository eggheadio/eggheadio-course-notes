# Using TypeScript and Redux to Model the Different States of our Checkout Form

[Video link](https://www.egghead.io/lessons/react-using-typescript-and-redux-to-model-the-different-states-of-our-checkout-form?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:05" end="0:20">

```ts
type CheckoutState = "LOADING" | "READY" | "ERROR";
export interface CartState {
  items: { [productID: string]: number };
  checkoutState: CheckoutState;
}

const intialState: CartState = {
  items: {},
  checkoutState: "READY"
}
```

</TimeStamp>

<TimeStamp start="0:30" end="0:35">

classnames simple JavaScript utility for conditionally joining classNames together.

```bash
npm install classnames
```

```ts
import classNames from "classnames";
```

</TimeStamp>

<TimeStamp start="0:40" end="0:45">

```ts
const checkoutState = useAppSelector((state) => state.cart.checkoutState)
```

</TimeStamp>

<TimeStamp start="0:55" end="1:10">

For those that don't know, the triple equals operator ( === ) returns true if both operands are of the same type and contain the same value.

```ts
const tableClasses = classNames({
  [styles.table]: true,
  [styles.checkoutErr0r]: checkoutState === "ERROR",
  [styles.checkoutLoading]: checkoutState === "LOADING",
});
```

</TimeStamp>

<TimeStamp start="1:30" end="1:35">

```html
<table className={tableClasses}>
```

</TimeStamp>