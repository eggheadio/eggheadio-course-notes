# 1 - Designing OpenGraph unfurls in Figma

[Video Link](https://egghead.io/lessons/figma-designing-opengraph-unfurls-in-figma)

- The first thing we&rsquo;re going to do is design the template in Figma using [this template](https://www.figma.com/community/file/820337605519256142) from [Ryan Warner](https://twitter.com/ryanwarnercodes).
- Duplicate the Template, and once you have it open the Open Graph Image tab on the left hand sidebar.
- You can get a background from [Gradient Magic](https://www.gradientmagic.com) for free, just select a pattern that you like as a starting point.
- Click on Edit, if you have brand colors (or just colors you like) now would be a great time to plug them in!
- You should go ahead and copy the CSS to a notepad for later, we&rsquo;ll use it in the next lesson and you don&rsquo;t want to have to go back and get it later.
- Inspect the page and adjust the CSS by adding `height:630px; width: 1200px;`  to the div with the id `largePreview`.
- Also Delete the button and the div that are contained within the `largePreview` div.
- Take a screenshot of this node.
  - 🍎 **In Safari** you can right click on the div and select &ldquo;Capture Screenshot&rdquo;. You&rsquo;ll then be prompted to save the file. I saved mine as opengraph-background.png.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1597870397/transcript-images/Screen_Shot_2020-08-11_at_9.09.39_PM.png)

- Drag the image into Figma and its the right size, and ready to go.
- Next create a rectangle in Figma, a little smaller than your canvas (1160 X 590) and put it at the center of your background.
- Choose a color from the background for the rectangle and then adjust the lightness so that it is either dark or light (depending on whether you want light or dark text)
- Continue to adjust and prototype your design in Figma, but remember that you don&rsquo;t need to spend a lot of time making everything perfect. The goal is to get the idea down on paper and then reference it later when we build a React component.
