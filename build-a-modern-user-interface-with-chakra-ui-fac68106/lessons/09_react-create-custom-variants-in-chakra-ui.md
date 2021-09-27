# Create Custom Variants in Chakra UI

[Video link](https://www.egghead.io/lessons/react-create-custom-variants-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

Lazar Nikolov: [0:00] In this lesson, we will learn how to create custom variants in Chakra UI. We're going to create a primary variant for our button component that will set the background to the brand color, disable the border-radius and also use the branded color as the outline. Let's begin.

[0:16] We're going to enter the components section and make a new entry for our button component. Then we're going to enter the variants section, and we'll name our variant primary. Let's start by setting the border-radius to none, so rounded="none."

[0:36] To see our variant change, let's go to the details component, and instead of providing the color scheme, we'll remove that and provide our new variant, primary. Awesome. We can see that the button changed and that the border-radius is sharp. Let's continue.

[0:55] Let's reuse the ring configuration from our checkbox because it applies to the button as well. We're going to extract the focus part into its own variable at the top. We'll call it brand ring. We'll place it in object and then get it back to the checkbox component. Let's confirm that it's working. Good. Now let's add it to the button as well.

[1:25] We'll spread the brand ring in the primary variant. Here we go. Our outline is green. Next on our list is the brand background. Chakra UI provides us with a mode method that we can use to define a color based on the currently active color mode.

[1:46] We're talking about the dark mode and light mode. If we check the checkbox on dark mode, we can see that it's color is a bit lighter than our brand 500, the 200 shade to be exact. We want to do the same for the button as well.

[2:04] Let's import the mode method from Chakra UI/theme tools. Before we continue, we need to refactor our primary variant into an arrow function that accepts props as an argument. We will need to provide the props to the mode method.

[2:22] Let's convert the object into an arrow function and return the same object. We can now set the background color to mode, where the first argument is the light mode and that would be brand.500. The second argument is the dark mode, so that would be brand.200. Then we'll provide the props to the mold method. There we go.

[2:52] We can see that the background turned green. If we try changing the theme, we can see that the background is the lighter or 200 shade of our brand color scale. This looks cool, but nothing happens when we hover the button and press on it. Let's go back and fix that too.

[3:13] In the previous lesson, we talked about pseudo props and how we can use them to configure the style based on the component state. Let's overwrite the hover state and set the background color to mode. For light mode, it will be brand.600, just one shade darker.

[3:35] For the dark mode, we'll say brand.300, again, one shade darker. Let's not forget to pass the props. I'll check it out. There we go. Let's also do for the pressed state.

[3:52] We'll do _active, and change the background color to mode, where the first argument will be brand.700, yet another darker shade, and for the dark mode as well, brand.400. We'll pass the props, and we're done. Awesome.

[4:13] We can now notice that the text color is inverted and it doesn't play well on dark mode. Let's also change that. We can do color and then again mode. For light mode, we'll set it to white. For dark mode, we'll set it to gray.800, and also provide the props. Nice.

[4:40] This is so much better. Our UI is now complete and it perfectly reflects the provided design. Let's recap. In this lesson, we learned that we can create our own variants that have a specific style configuration.

[4:55] The variant can be either a plain object or an arrow function that accepts the props as arguments. We've also learned how to use the mode method from Chakra UI to provide different values for dark mode and light mode.
