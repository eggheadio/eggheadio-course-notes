# Scroll Elements on a React Native Screen with ScrollView

**[📹 Video](https://egghead.io/lessons/react-native-scroll-elements-on-a-react-native-screen-with-scrollview)**

## Scrolling views

In React Native, the `<View />` component does not start scrolling when its content grows beyond the height of the viewpoint. We need to explicitly use a `<ScrollView />` for this behaviour.

The `<ScrollView />` component is made up of two sub-components
- A wrapper component with a fixed height - think of this as a window through to the content
- A content container that can grow to the size of its content.

It can be confusing when applying styles to the `<ScrollView />` component, as you need to think about which layer you are applying them to. Things like `margin` and spacing rules are probably meant for the outer container, where-as padding to give space above and below the list is probably best on the inner content container.

The `style` prop applies rules to the outer container, and the `contentContainerStyle` applies rules to the inner content container.

```jsx
<ScrollView
  style={styles.container}
  contentContainerStyle={styles.content}
/>
```

The `<ScrollView />` component should only be used for small collections, as it will load every row into memory, regardless of what is actually in the user's viewport. It should not be used for content that may grow to more than two screens high.

## New components

[`<ScrollView />`](https://reactnative.dev/docs/scrollview) - used for wrapping content that needs to scroll.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-clean-up-the-folder-structure-and-imports-in-a-react-native-app-with-absolute-paths)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-display-a-list-of-items-in-react-native-with-flatlist)
