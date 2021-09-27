# Override the Built-in Component's Styles in Chakra UI

[Video link](https://www.egghead.io/lessons/react-override-the-built-in-component-s-styles-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

Instructor: [0:00] In this lesson, we will override some of the built-in component style to match our design. If we look closely, we can notice that the border radius of their inputs is sharp, while on the app, it's rounded. Also, the outline is blue, and we would like to use our brand's color.

[0:19] Let's start by overriding the component styles. Just like we overrode the colors, we can override the component style. Let's provide the component section. Inside, we'll add the name of the component that we're overriding the style of.

[0:33] Let's start with the input. We'll be overriding two properties -- the border radius and the border color. By default, the border radius is different for each size of the input. Since the default size is the md, we'll get into the sizes section and override the md size.

[0:51] The input has three parts -- add-on, field, and element. We're looking to override the field part. We'll open the field section and set the borderRadius to none. Let's check it out. Awesome. We can see that the borderRadius is now sharp. That's exactly what we wanted.

[1:11] Let's fix the outline now. The outline of the input is defined in each of its variants. Since we've set the input's variant to field, we'd want to enter the variants section and then the field. Just like before, we'll override the field part. The outline, or the borderColor property, shows up when we focus on the element.

[1:34] Chakra UI provides us with pseudo props that we can use to style our elements based on their state. Since we're looking for the focused state, we'll override the focus object, and we'll set the borderColor to brand.500. Let's check it out. Nice. The outline is now colored with our brand color.

[1:57] Next on our list is a select component. Since the select component extends the input component, all of the style configuration that we developed for the input can be applied to the select as well.

[2:09] Let's extract the input configuration into its own variable at the top. We'll call it input select styles. We'll place it in an object, and then we can scroll down and spread it to the input component, so input select styles. Everything remains the same.

[2:35] Now, let's also add the select here, right next to the input, and do the same, input select styles. There we go. Our select now has the same style as the input. We're almost done. All that is left is our checkbox component.

[2:57] Just like the input component, we want to override the outline for the checkbox component as well. The only difference between the input and the checkbox is that the input handles the outline as a border, but the checkbox handles it as a ring.

[3:10] Let's enter the checkbox section. Then we will enter the base style and the control. Now, just like the input, we would like to enter the focused state and set the ring to 2 and the rink color to brand.500. Let's check it out. Nice. We can see that the ring is painted with the brand.500 color.

[3:39] While we're here, let's also set the border-radius to none. Above the focus, we'll say border-radius none. There we go. We can see that the border-radius is now sharp, and the ring is painted with the brand.500 color. That's it. We're done.

[4:01] Let's recap. We learned that we can override the component style configuration by creating a property inside of the components section. We can even override the style configuration based on the component state using the pseudo props. We've also learned that some of the components are multipart, and they have separate style configurations for each part.
