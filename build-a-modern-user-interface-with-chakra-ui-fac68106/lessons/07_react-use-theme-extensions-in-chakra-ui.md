# Use Theme Extensions in Chakra UI

[Video link](https://www.egghead.io/lessons/react-use-theme-extensions-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

Lazar Nikolov: [0:00] In this lesson, we will use theme extensions to set style rules to all instances of a certain component. In the previous lesson, we've defined our custom brand color scale.

[0:11] We could use it now in every component in our app, but there is a simpler way to do it and that's using a theme extension. Chakra UI comes with a few built-in theme extensions like withDefaultColorScheme, withDefaultVariant, etc.

[0:24] Let's use the withDefaultColorScheme to set the color scheme to brand to all of our checkbox components. We'll add it to the imports at the top, withDefaultColorScheme. We'll provide it as the third argument of our extend theme.

[0:40] WithDefaultColorScheme, and then we'll pass an object. This object has the color scheme and components properties. Let's set the color scheme to brand, and the components to an array, which will have the checkbox inside.

[1:05] If we save this, we can immediately see the checkbox is now using the brand color. Let's also use the withDefaultVariant extension to set the default variant of our inputs and select to field, just like in the design.

[1:19] Let's add it to the imports at the top, withDefaultVariant, and then provide it as a third argument, withDefaultVariant. It accepts an object too, but instead of a color scheme, we'll pass a variant and we will set it to filled.

[1:39] Then just like the previous one, we'll provide the components array. In this case, we'll write input and select. That's it. We can see that all of our inputs and select exchanged their variant.

[1:56] Let's recap. We can use the theme extensions to set style rules that apply to all instances of a certain component without having to manually set the style props to each of them. Chakra UI comes with a few built-in theme extensions like withDefaultVariant and withDefaultColorScheme.

[2:11] We've used the withDefaultVariant to set the variant to filled of all of our inputs and select. We've used the withDefaultColorScheme to set the color scheme to brand to the checkbox component.

[2:24] There are a few more theme extensions that come with Chakra UI and you can check them out in the documentation site in the customized theme page.
