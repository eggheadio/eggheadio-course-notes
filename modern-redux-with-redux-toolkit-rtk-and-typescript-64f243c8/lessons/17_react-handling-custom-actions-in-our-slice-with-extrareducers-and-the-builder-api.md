# Handling Custom Actions in our Slice with extraReducers and the Builder API

[Video link](https://www.egghead.io/lessons/react-handling-custom-actions-in-our-slice-with-extrareducers-and-the-builder-api?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:40" end="1:00">

```ts
extraReducers: function (builder) {
  builder.addCase("cart/checkout/pending", (state, action) => {
    state.checkoutState = "LOADING";
  })
}
```

</TimeStamp>

<TimeStamp start="1:15" end="1:30">

`e.preventDefault` is great to use when your are putting any sort of function in a form. It will prevent your form from making your application hard refresh every time you use the form.

```ts
function onCheckout(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  dispatch({ type: "cart/checkout/pending" });
}
```

</TimeStamp>

<TimeStamp start="1:40" end="1:45">

```jsx
<form onSubmit={onCheckout}>
```

</TimeStamp>
