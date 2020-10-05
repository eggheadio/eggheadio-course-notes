# Flexbox Fundamentals

## Using order to rearrange flexbox children

[📹 Video](https://egghead.io/lessons/flexbox-using-order-to-rearrange-flexbox-children)

What's great about flexbox containers is their ability to be rearranged with the ``order`` property. You can place your elements wherever you'd like with this property.

In Garth's example, the main navigation bar will be placed below the footer to "free up some real estate" or give the most important content on the page priority. This rearrangement will also make mobile responsiveness look much less bulky.

Since ``order`` defaults to zero, your children will flow in the order in which they appear in the Document Object Model, or **DOM**. Learn more about the DOM [here](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

The example shows the four primary sections (containers) on the web page that will be rearranged:

- Header – 0 (default order)

- Navigation – 0 (default order)

- Content – 0 (default order)

- Footer – 0 (default order)

In the example, Garth wants the navigation **just above** the footer. To do this, the body will need to display the containers as `flex` so that we can rearrange them.

**Nifty trick**: Since we want the containers to flow vertically, think of your mobile phone and how you'd like to see the containers displayed 📲. *How would this be written in your code?* Like this:

`flex-direction: column;`

The only thing left to do is rearrange your containers by reordering their placement on the webpage. To do this, simply change the order property on the individual children!

In the previous example–where all the children are defaulting to zero–the order properties need to be updated in order for the nav container to appear just above the footer. The order would be:

- Header – 0, where it would remain at the top of your webpage.

- Navigation – 1, same order as Footer BUT it's new placement in the DOM is written below the `body` styling and will show up as ordered (the last container on the webpage).

- Content – 0, where it would be shown underneath the Header.

- Footer – 1, while it appears to be the same order as Navigation, the Footer's placement in the DOM *in relation to Header and Content* will determine where it shows up in the browser. Note that it is written above the `body` and its `order` is also in relation to the the Navigation's placement in the DOM.