# Using a Gatsby Plugin

[📹 Video link](https://www.egghead.io/lessons/gatsby-using-a-gatsby-plugin-bcf8a626)

[💻 11 Use A Gatsby Plugin](https://github.com/Khaledgarbaya/moving-from-cra-to-gatsby-course/releases/tag/11-use-a-gatsby-plugin)

## 🤔 Tailwind CSS

There are three ways you can use Tailwind with Gatsby:

- Standard: Use PostCSS to generate Tailwind classes, then you can apply those classes using className.
- CSS-in-JS: Integrate Tailwind classes into Styled Components.
- SCSS: Use gatsby-plugin-sass to support Tailwind classes in your SCSS files.

You have to install and configure Tailwind for all of these methods, so this guide will walk through that step first, then you can follow the instructions for PostCSS, CSS-in-JS or SCSS.

## Exercise

In this lesson, you learned how to install the Tailwind plugin for Gatsby. Lets solidify your knowledge by installing a few core Gatsby plugins that you will likely run into.  

Your job is to add the following plugins to your gatsby project: 
- `gatsby-source-filesystem` (with options)
- `gatsby-transformer-sharp`
- `gatsby-plugin-sharp`

For more info, **[check out the exercise page](../excercises/02-install-a-plugin.md)**