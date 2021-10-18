# How to Apply Types to Redux Selectors

[Video link](https://www.egghead.io/lessons/react-how-to-apply-types-to-redux-selectors?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] If you're curious about how to type the createSelector() method, there is a way but I just want to show you that without doing very much other than identifying RootState, it already correctly identifies what items is, what products is and it knows that this is going to return a string.

[0:14] Over here in Cart.tsx, when I say const totalPrice, it already recognizes that totalPrice is a string and I didn't really have to do any typing except just these two initial RootState arguments.

[0:25] If you want to type createSelector explicitly, you can do it. Using the generic syntax, you can pass in the RootState as the first argument and then the appropriate types for the various arguments going into your final selector function. In this case, we're going to just use any, and any.

[0:40] The last argument would be the returned value, which here would be a string. With that, you can get rid of explicitly typing your first two functions. That's how you would explicitly type use selector, but in my experience, it works pretty well just to leave off the explicit typing and only worry about adding RootState to any of your initial selectors.
