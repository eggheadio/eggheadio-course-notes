# Create a Dark Mode Switcher in Chakra UI

[Video link](https://www.egghead.io/lessons/react-create-a-dark-mode-switcher-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

Instructor: [0:01] In this lesson, we will implement a dark theme switcher in our app. Before we dive into it, I'll give you a brief walkthrough of the second section. The second section's layout is very similar to the first section. The label at the top contains a button with the variant set to link. This button will be our dark theme switcher.

[0:18] I've also used an aspect ratio along with the image component to ensure the image will be always square. I've built the price breakdown rows using a horizontal stack component with justify-content set to space-between.

[0:30] I've placed an ordinary divider component before the last row to achieve the horizontal line. All of these components are built in Chakra UI. Nothing custom has been done so far. Now, let's begin implementing the dark theme switcher.

[0:43] Chakra UI also comes with a few useful React hooks. In this case, we'll use the useColorMode hook. The useColorMode hook returns a method called toggleColorMode() and also a colorMode variable that has the value of the current colorMode.

[0:59] All we need to do is set the toggleColorMode() method as the value of the on click prop of our button component. Let's scroll down. Set the on click to the toggleColorMode() and let's click the button.

[1:15] This is how we implement dark mode, but you can see the gray background is not changing because we manually set it to be gray 50. In order to reflect on the dark mode, there is another hook called useColorModeValue that we can use.

[1:30] This hook returns a value based on the color mode, so we can say the background color will be useColorModeValue where the first argument will be the light mode value and there will be gray.50 and the second argument will be the dark mode value and that would be whitealpha.50.

[1:50] We can use this value and replace the BG prop of our vertical stack in the cart. If we save this, we can see that the background changed. Let's try to toggle it back. Now, we have the light gray background, and now we have the dark gray background.

[2:09] Let's also fix this text. We can see that it's way too dark for dark mode. We can use the same hook useColorModeValue and we can create a new variable called secondary text color, wich will be useColorModeValue. On light mode we want to keep the gray 600 text, but on dark mode we want to use gray.400.

[2:39] Let's get this value and replace the gray text. Everywhere we have gray 600, we can select everything and replace it with the secondary text color. Much better.

[3:01] Let's recap. We use the useColorMode hook from Chakra UI to obtain the toggleColorMode() method, which we then set it to the onClick prop of the button that allowed us to toggle between dark and light mode.

[3:16] In order to fix some of the color issues, we've used the useColorModeValue hook from Chakra UI to provide different colors based on the current colorModes, for example, setting the background color of the second section to gray 50 on light mode and whiteAlpha 50 on dark mode.

[3:34] Then we use the result, the background color and secondary color and set that as a value to the vertical stack in our text components.
