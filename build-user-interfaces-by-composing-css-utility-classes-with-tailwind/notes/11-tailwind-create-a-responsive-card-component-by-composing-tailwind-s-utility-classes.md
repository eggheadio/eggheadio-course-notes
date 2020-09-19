📹[Create a Responsive Card Component by Composing Tailwind's Utility Classes](https://egghead.io/lessons/tailwind-create-a-responsive-card-component-by-composing-tailwind-s-utility-classes)

This lesson is just a sample card component.

Initial
```html
<body>
  <div>
    <img src="./img/image1.jpg" alt="">

    <div>
      <h2>
        Hello Tailwind! 
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsum debitis cum maiores, laboriosam doloribus deleniti quas voluptates labore eum.
      </p>

      <button>
        Click me!
      </button>
    </div>
  </div>
</body>
```

You can either set rounded corners to both the container and its contents (in this case, the image) or give the container `.overflow-hidden` to automatically crop its children's square corners.

```diff
-   <body>
+   <body class="m-4 font-sans leading-normal">
-     <div>
+     <div class="shadow-lg rounded overflow-hidden sm:flex max-w-md">
```

Images by default will take on the width of their container, and their height scales to match. With a browser 1000px wide, the image can very easily take up the majority of the screen.

Background images are easier to scale and position within a fixed height container.

```diff
  <div class="shadow-lg rounded overflow-hidden sm:flex max-w-md">
-   <img src="./img/image1.jpg" alt="">
+   <div
+     style="background-image:url('./img/image1.jpg')"
+     class="bg-cover bg-center h-48 w-auto sm:h-auto sm:w-64"
+   ></div>
    <div>
```

For reference, this is the final html.

```html
<body class="m-4 font-sans leading-normal">
  <div class="shadow-lg rounded overflow-hidden sm:flex max-w-md">
    <div style="background-image:url('./img/image1.jpg')"
      class="bg-cover bg-center h-48 w-auto sm:h-auto sm:w-64"
    ></div>

    <div class="p-4">
      <h2 class="font-black mb-3">
        Hello Tailwind!
      </h2>

      <p class="text-sm text-grey-dark mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsum debitis cum maiores, laboriosam doloribus deleniti quas voluptates labore eum.
      </p>

      <button class="bg-purple hover:bg-purple-light text-white py-3 px-6 font-bold rounded-full mt-1 mb-2">
        Click me!
      </button>
    </div>
  </div>
</body>
```

Next lesson: [Customize Tailwind’s Naming Convention for Generated Utility Classes](https://egghead.io/lessons/tailwind-customize-tailwind-s-naming-convention-for-generated-utility-classes)

Previous: [Abstract Utility Classes to BEM Components in Tailwind](https://egghead.io/lessons/tailwind-abstract-utility-classes-to-bem-components-in-tailwind)