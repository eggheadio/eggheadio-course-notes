# Flexbox Fundamentals

## Using `flex-shrink` and `flex-grow` to Make Flexox Children Resize Correctly

[📹 Video](https://egghead.io/lessons/flexbox-using-flex-shrink-and-flex-grow-to-make-flexbox-children-resize-correctly)

What are we to do with excess space, or lack of space, around our flexbox? We will want to use either `flex-shrink` or `flex-grow`.

What's really neat about either property is that they directly impact how your flexbox children will populate on your web page.

Following Garth's example, you'll see that the `body` is still set to `display: flex;` and each child has their own `flex-basis` values. This is great because now we can work with the space within the container, and with Garth's dimensions, there's a lot of space to work with.

# Distribution of Extra or Unused Space in the Flexbox

## `flex-grow`

To use, or fill up, the extra space in the flexbox we want to use the `flex-grow` property. It tells the browser precisely how much space you want each of the children to occupy within the container.

**NOTE**: `flex-grow` defaults to a proportion of zero; none of the children will grow past their `flex-basis`.

If you want the first child element to take up all the space, set its proportion to one.

What about the second and third children? Set their flex-grow proportions to the values of your choice.

In Garth's example, he set the second child to two (using up 2/3 of the container space; the first child will use up 1/3). He then set the third children to three, which adjusted the amount of container space that *all the children* used up. The result:

-   The first child: 1/6 of the container's extra space 
-   The second child: 1/3 of the container's extra space
-   The third child: 1/2 of the container's extra space

🤓 See Garth's example again [here](https://egghead.io/lessons/flexbox-using-flex-shrink-and-flex-grow-to-make-flexbox-children-resize-correctly#t=67).

### Distribution of Total Space in Flexbox

Setting the flex-basis of all children to zero will prepare us to use all the total space on our container. That means the extra space wouldn't be taken up by any of the children, making it the same as the container's total space.

**Note**: `flex-grow` dictates how the extra space beyond the combined `flex-basis` should be divided up.

## `flex-shrink`

### Note that the objective of `flex-shrink` is that "content should never be clipped for the benefit of empty space."

This property works like `flex-grow`, but in reverse.

To illustrate how `flex-shrink` works, Garth sets the children's `flex-basis` values to 200 pixels, totaling 600 pixels in width; exceeding the width of the container. Each child is too big for the container – 😱 Yikes! They're even losing some width because they cannot fit into the container.

But... *there's space left over from the container causing the children to not fit*... Why? Well, if the combined `flex-basis` is greater than the container's allowed space, the child elements will shrink to fit!

You'll see that these elements will loss some width since `flex-shrink`'s default is one and is corresponding to the `flex-basis` value.

If you don't want the children to shrink, set each one of them to zero. This will cause them all to shrink in correspondence to the `flex-basis` value **and** cause the container width to overflow.