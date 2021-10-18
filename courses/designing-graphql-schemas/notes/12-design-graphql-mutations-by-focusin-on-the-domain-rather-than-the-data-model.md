# Design GraphQL Mutations by focusing on the Domain rather than the Data Model

- 📹 [Video Link](https://egghead.io/lessons/graphql-design-graphql-mutations-by-focusing-on-the-domain-rather-than-the-data-model)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson11)

### Domain Model

- 💰 [Domain Driven](https://khalilstemmler.com/articles/graphql/ddd/schema-design/) GraphQL means putting an effort into understanding the domain you work in, and using that knowledge to drive development against a model of the business that mimics how it works in the real world.

- Focus on domain model vs data model

- With `domain-model`:
  - We indicate which actions/use-cases are supported
  - There is no need for nullable input fields for non-nullable properties of a model.
  - We can define which input fields must be provided together in separate mutations.

📊 Data model:

```graphql
updateCart(input: { productIds: ["abc"] })
updateCart(input: { productIds: ["abc", "bcd"] })
updateCart(input: { couponCode: "christmasSpecial", productIds: ["abc", "bcd"] })
createOrder(input: { addressId: "lkj", paymentInfoId: "jhg" })
```

- _The data model-based solution only has two mutations. In general, I would say having less mutations is a good thing, but reducing two use cases into one mutation comes at a cost._

**VS**

🕸 Domain model:

```graphql
addProductToCart(input: { productId: "abc" })
addProductToCart(input: { productId: "bcd" })
applyCouponToCart(input: { code: "christmasSpecial" })
checkout(input: { addressId: "lkj", paymentInfoId: "jhg" })
```

- _With the domain model, we indicate which actions or use cases are supported._
