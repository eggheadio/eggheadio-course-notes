## 10. Isolate State in an Application with Jotai Provider

<Timestamp start="0:50" end="1:10">

By default, state is global to the entire application. With Jotai's `Provider` component, we can isolate atom state to only the parts of our application that are wrapped by it. In the context of this lesson, this means that we can have two separate canvases with two separate drawings if we wrap each canvas in separate `Provider` components.

</Timestamp>

<Timestamp start="1:20" end="1:32">

We use `atom()` to construct atom configs -- these do not actually store any values. Instead, `Provider` has a store that holds atom values.

</Timestamp>

<Timestamp start="1:40" end="1:50">

The provider-less mode in Jotai works by using a default store.

</Timestamp>
