# Using the Redux DevTool Support Built-in to Redux Toolkit

[Video link](https://www.egghead.io/lessons/react-using-the-redux-devtool-support-built-in-to-redux-toolkit?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] In your web browser, go to the GitHub page for the redux-devtools-extension. On the page, scroll down until you see the section on Installation for various web browsers. I'm using Chrome, so I'm going to click the link to the Chrome Web Store. From here, you need to click Add to Chrome, and then Add Extension.

[0:15] Once that's installed, you'll see a small logo in the upper right-hand corner of your browser. You can also access it by clicking on the Extensions button if needed, or you can find it in your context menu when you right-click on the page.

[0:26] Back in our shopping cart, if I right-click and dock our Redux DevTools to the right, click on the Products page, you're going to see an action being fired into Redux products/receivedProducts. If you click into the Action, you can see exactly what the payload was, all the products that were sent into the Redux store, and you can also see the state of Redux after that action was processed.

[0:45] If I add some things into the cart, you can see those actions showing up in our DevTools window. If I go into the cart, remove them, or update the quantity, those actions appear as well.

[0:56] When I click checkout, you'll see our pending action followed by our fulfilled action being fired off from our thunk, and if you're ever curious and you want to go backwards, you can do two things. You can click on a specific action that was fired previously and look at the state when that action was fired.

[1:11] For example, if I open up the items in the tree down here, as I click through different addToCart actions, you can see it growing, which is really cool, or if I start from the most recent action, I can click the arrow and go backward. It immediately updates the browser to show the historical state. This feature is called time travel debugging.

[1:28] A lot of people say it's kind of a gimmick, but I've found that helpful to see what actions led me to a certain state in my application.

[1:36] The Redux DevTools is also really nice because it can help you see when you may be firing off too many Redux actions in your application. If this DevTools window becomes so full of actions you can't even tell what's happening, it may be time to rethink how you're dispatching actions into your Redux store.

[1:51] Overall, this is a great tool and with RTK it comes built in. All you have to do is install it into your browser and you can start using it immediately.
