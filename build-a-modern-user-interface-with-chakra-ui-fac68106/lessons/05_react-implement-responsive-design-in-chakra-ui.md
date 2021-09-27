# Implement Responsive Design in Chakra UI

[Video link](https://www.egghead.io/lessons/react-implement-responsive-design-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

Instructor: [0:01] In this lesson, we will refactor our code and make our app responsive. First, let's figure out what responsiveness tweaks we need to make in our app. We would want the details in the card sections to be vertical on mobile, starting with the card section at the top.

[0:14] The details form should also have just one column instead of two, like we have it in the first name and the last name input. We can also tweak the padding on smaller screens. Let's dive in.

[0:25] There are a few ways in which you can achieve responsiveness in Chakra UI. One of them is the responsive array value. We can use that as a value of any style prop we'd like to make responsive. Let's try to change the Flex component's vertical padding to 10 on small screens,  on smallest, and leave it 20 from medium screens and up.

[0:44] We will replace the current value to an array and then provide  as the first element, 10 as the second, and 20 as the third. This syntax maps the values to the breakpoints that are already configured in the default theme.

[0:58] We can interpret this value as  from  pixels width until 479 pixels, 10 from 480 pixels until 767 pixels, and then 20 from 768 pixels and up. Let's save this and see how it changes.

[1:13] We can open Inspect Element and see how the padding changes on different devices. Here's iPad, for example. We can see that the padding still hasn't changed, but that's because the width of the iPad is 768 pixels, and in our case, it remains 20.

[1:30] If we switch over to the iPhone, we can see that the vertical padding is  because the width of the iPhone is 375 pixels, so that maps to . If we switch over to the responsive mode and bring down the width just below 767, we can see how the padding changes. We have 80 pixels here. Then we have 40 pixels, and as we go down, we have .

[2:00] There's another syntax in Chakra UI that we can use, which can be more convenient if we have fewer responsive values, and that's the object syntax. It is very similar to the array syntax, but instead of an array, we pass an object where the keys are the names of the breakpoints.

[2:14] Let's set the direction of the Flex to column-reverse when the screen width is less than 768 pixels. By default, the Flex component's direction is row. Let's add a direction prop to the Flex, and instead of an array, this time, we'll provide an object. We'll set the base to column-reverse and then the md to row. We can immediately see the changes. We can interpret this value as column-reverse from  pixels of width up until 767 and then row from 768 pixels and upwards.

[2:55] Let's see it change. There we go. 767 pixels, the sections are one on top of the other. Then, as we pass the 768 pixels, the sections are next to each other. Because we set the height of our Flex component to 100vh in the previous lessons, we cannot scroll our page now.

[3:22] Let's fix that by using the object syntax. We'll set the value to, from  and up, it should be auto, and from medium, or 768 pixels and up, it should remain 100vh. Let's save this and check it out. Nice. We're almost done.

[3:48] Last thing to do is fix the columns in our form. If we open the iPhone X, we can see that there's not much space for the first name and the last name inputs. Let's switch over to the Details page. We can fix this by using the third way of making responsive values in Chakra UI, and that's the useBreakpointValue hook. Let's add it to the imports.

[4:13] Now, we're going to create a new variable called colSpan and set it to the useBreakpointValue hook. This hook accepts two arguments -- the responsive object syntax and the default breakpoint name. In this case, we'll set it to base. That means from zero and up to two columns and then from medium and up to one.

[4:40] The second argument, the default breakpoint, is an optional argument. We're not going to provide it at the moment. Now, let's use the colSpan variable and set it to the grid item's colSpan. Instead of just one, we're going to place our new variable. That's it. We can see that the first name, last name, city and country stake up the full width.

[5:05] If we preview this on an iPad, we can see that the two-column layout is still here. If we close the Inspect Element, we're back to how it was before. Let's recap. There are three ways to achieve responsive design in Chakra UI -- the array syntax, the object syntax, and the useBreakpointValue hook.

[5:28] We learned that we can use the array syntax if we want to provide different values for every breakpoint. In case we want to change between two values, we can use the object syntax because it's simpler. We can also use the useBreakpointValue hook as a way to create responsive values, especially if we want to make the variant or size props responsive.
