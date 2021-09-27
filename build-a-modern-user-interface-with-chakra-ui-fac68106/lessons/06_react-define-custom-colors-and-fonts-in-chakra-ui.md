# Define Custom Colors and Fonts in Chakra UI

[Video link](https://www.egghead.io/lessons/react-define-custom-colors-and-fonts-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

Lazar Nikolov: [0:01] In this lesson, we will extend our default theme with the custom fonts and colors from our UI design. As we can see, our app looks pretty different than the UI design. Luckily, Chakra UI provides us with a method called extendTheme() that we can use to define our own colors, fonts and style overrides. Let's set it up.

[0:19] We'll create a new folder called theme inside of the source directory. Then we'll create a new file called index.ts. We're going to import the extendTheme() method from Chakra UI/React. Then we'll create a new variable called theme that we'll use the extendTheme() method. I will export it.

[0:45] The extendTheme() method accepts an array of theme extensions, which can be either an object or some of the built-in theme extensions, but we'll talk about them in one of the following lessons. For now, we'll provide an empty object.

[0:58] Before continuing, let's switch over to the app.tsx file. We're going to import our theme, and then we'll pass it to the Chakra provider as theme = theme. This is how we set up Chakra UI to use our custom theme in set. Let's go back to the theme file.

[1:21] The Chakra UI theme is an object that contains the following keys, colors, fonts, components, styles, config, etc. Let's overwrite the font section and add our custom font. We use the heading and text components in our app.

[1:36] In order to set the font to all of them, we need to overwrite the heading and the body properties. We'll set the heading to Montserrat and the body to Inter. We can immediately see that the font changed.

[1:52] If we go back to our design, we can confirm that this font is indeed Montserrat. It's always a good idea to provide a fallback value. Let's import the base theme. Import theme as base from Chakra UI/React and convert the heading to a template literal.

[2:19] After the Montserrat font, we can pass the base.fonts.heading. This is going to fetch the fonts that are defined in the default theme and we'll set them as a fallback in case Montserrat is not loaded. We'll do the same for the body font as well -- base.fonts.body. Awesome. We've set up our custom fonts, but we still haven't imported them.

[2:48] We can see them on my end because I have them installed in my system. There are numerous ways to import custom fonts. We'll use the CSS import method. Let's create a new file called styles.css right next to the theme. Inside, we will paste our font import.

[3:08] In this case, I'm using Google fonts to import the Inter family and the Montserrat family. Now in order to use this file, let's go back to the app.tsx and import it below the theme. Awesome. We're done with the font. Let's go back and define our brand theme now.

[3:29] Just like we defined the fonts, we can also provide our own custom colors. In this case, we'll name it brand. I'll just paste the hex code here. That's it. Our brand color scale is now registered. Let's use our brand color now.

[3:45] We'll switch over to the details component, find the button, and set the color scheme prop to brand. Awesome. Our button looks and behaves very similar to the design. Let's recap.

[4:05] Chakra UI comes with an extend theme method that we can use to build our custom theme. We can tell Chakra UI to use our theme by passing it to the Chakra provider. We've added our custom brand color scale and defined our custom fonts.

[4:23] In a similar way, we can also overwrite all the design tokens that come with Chakra UI like sizes, breakpoints, shadows, spacing, etc.
