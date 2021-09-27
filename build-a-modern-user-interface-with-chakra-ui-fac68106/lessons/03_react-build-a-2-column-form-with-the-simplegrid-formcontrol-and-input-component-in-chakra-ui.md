# Build a 2-Column Form with the SimpleGrid, FormControl, and Input Component in Chakra UI

[Video link](https://www.egghead.io/lessons/react-build-a-2-column-form-with-the-simplegrid-formcontrol-and-input-component-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

Lazar Nikolov: [0:00] In this lesson, we're going to populate the first section of our UI design. Let's start at the top. We can immediately see that the first text is a title and the second text is a label.

[0:11] Chakra UI has separate components for titles and labels. Those are the Heading component and Text component, respectfully. Let's see how we can use them.

[0:21] Before we begin, I'm going to briefly explain the changes I made. In the previous lesson, we defined our sections in our index.tsx file. To make our code easier to read, I've moved the VStack components into the src/sections directory.

[0:35] Here's the cart.tsx file and the details.tsx file. Then, I imported them into the index.tsx file. During this lesson, we'll be working only in the details.tsx file.

[0:47] Let's start with the title. We'll import the Heading component from the chakra-ui/react package and place it in the VStack. Since the size of the text in the figma design is set to two XL, we're going to set the size property to two XL. That's all we needed for the heading.

[1:14] The text is even simpler. Let's import the Text component and place it after the Heading component. We just need to write the text inside and that would be it. We don't need to do additional styling.

[1:28] One thing that we can see is that the spacing between the heading and the text is a bit bigger than the one in the design. That's because the parent V stack component defines the spacing as 40 pixels or just 10. But if we check the design, we can see that the spacing between these elements is 12 pixels.

[1:49] Let's fix that by wrapping both the Heading and the Text component into their own V stack component. We'll set the spacing to 3, so it amounts to 12 pixels. Also set the align items to flex start, because they'll be centered by default. There we go. We're done with the title and label. Let's move on to the form.

[2:14] We can see that the names city and country inputs have just half of the width of the address input. Before we start adding them, it's a good idea to set up their layout first. To achieve this, we can use the simple Grid component that comes with chakra-ui.

[2:30] The SimpleGrid component is the good old CSS grid that we know and love. Let's go ahead and add it. We're going to import the SimpleGrid component and also the GridItem. We're going to use the GridItem component as a wrapper around the form input so we can define how many columns each input is going to span to.

[2:49] Let's define the SimpleGrid component after the inner vertical stack. We'll set the columns property to 2, so that the Address input can span to two columns, and the rest of the inputs to just 1. We will also set the columnGap to 3 and the rowGap to 6 because that's how we defined it into the UI design, so 24 pixels between the rows and 12 pixels between the columns.

[3:20] Let's also not forget to set the width of the grid to "full" so it takes up all of the available space. Now, we're ready to add the inputs. Chakra UI comes with a FormControl component that makes it easier for us to achieve the label and input layout. Let's import it from Chakra UI.

[3:36] We're going to import FormControl, but also FormLabel for the label and Input for the input. Scroll down to the SimpleGrid component and add our GridItem. Since this is going to be the First Name input, we'll set the colSpan property to just 1. Inside, we can add the FormControl component and the FormLabel.

[4:03] The label is going to be just First Name. We can add the input inside. We'll set the placeholder to "John". If we save this, we can already see that we have the First Name input here.

[4:16] Let's do the same for the last name. We're going to copy the First Name block. Then, change it to Last Name and change the placeholder. There we go. We can see that both inputs are in single row next to each other.

[4:33] Now, let's add the Address input and make it span to two columns. We're going to reuse the last name GridItem, but in this case, we'll set the colSpan to 2. We're going to change the label to say Address and change the placeholder.

[4:50] Awesome. This is exactly what we want. Let's proceed to the City input. Again, exactly like the name inputs. Let's steal that block from the last name and paste it after the address block. We're going to change the label to City and the placeholder to "San Francisco".

[5:14] Nice. The next component that we should add is the Country input. As you can see, it's a Select component instead of an Input. Luckily, Chakra UI also comes with a Select component that we can use.

[5:30] Let's import the Select component. Then, scroll down. Grab the last GridItem block. Change the FormLabel to Country. Instead of rendering an input, we're going to render the Select. I'm going to quickly add the options here.

[6:00] There we go. We're getting close to finishing the first section. All that remains is the checkbox and the button. Let's go ahead and add them as well.

[6:08] We're going to import the Checkbox and Button components from Chakra UI. We're going to keep them in the grid as well because the spacing between them is the same as the form inputs. Let's add another GridItem below. We'll make it span to two columns because we don't need to limit it. Then, let's add the Checkbox inside.

[6:30] Let's also add the default Checkbox to make it checked by default. The Checkbox component has an onChange event that we can use to reflect on the user's choice, but we're not going to cover that in this lesson.

[6:48] Let's do the same for the Button. We're going to reuse the last GridItem block. Instead of a Checkbox, we'll place a Button. Let's set the label as Place Order. We also want to set the size prop to "lg" because we want a large button.

[7:03] We're almost done with the button. The only thing that we can see is that our button is not spanning to two columns. This is because the Button components width is set to "auto" by default. Let's fix that by setting the width to "full". There we go. Our first section is now complete.

[7:21] You might be wondering why our form looks nothing like the design. That's something that we'll cover in one of the following lessons. For now, we just want to achieve the layout and use the built-in components. I'll leave the second section for you to build on your own.

[7:35] To recap, all Chakra UI components have unique set of style props that we can use to tweak their appearances to match our design. We learned how to use the Heading and Text components to display titles and labels and how to style them to better suit our style guides.

[7:49] We touched on the SimpleGrid component and created our two-column layout in no time. We've utilized the FormControl component to display our inputs and select without having to add any styling at all.
