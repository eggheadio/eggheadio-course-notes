# Concluding Thoughts on Confidently Testing Redux Applications with Jest & TypeScript

[Video link](https://www.egghead.io/lessons/redux-concluding-thoughts-on-confidently-testing-redux-applications-with-jest-typescript?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)

Jamund Ferguson: [0:00] Congratulations. We've now written a boatload of tests across five different files and our test coverage is actually amazing. If I pop in here, you can see that productsSlice is 100 percent covered. Products is 100 percent covered.

[0:14] If I go into the cart folder, all the files in here also have 100 percent coverage. Every method, every selector, every thunk, every component, we've done a fantastic job here with our tests. Even though, of course, there is more stuff I would have loved to have shared, I think we did a good job covering the basics and a whole lot more.

[0:34] I hope you feel more confident than ever at testing your Redux applications, and I hope that you see how useful it is to understand both the unit testing style of tests we did on the first half of the course and the integration style tests we did the second half of the course. They both ended up being essential to getting such good coverage.

[0:54] Let me show you what happens if we disable our unit tests. If I rename cartSlice to .xx and productsSlice to .xx, rerun our code coverage here and hop back in here, you can see that we lost a little bit of our code coverage. We used to have 100 percent of our statements and branches, and now, we have 88 percent of cartSlice, for example, being tested.

[1:21] There's a little bit of a loss when we don't do the unit testing approach, which is why they worked so well together.

[1:27] That being said, look at all the coverage we get when we just test our components. That integration style testing, it's a little quirky to set up, but it ends up being powerful and gets you far in the testing that you need. For most projects, both of them are going to come in handy.

[1:45] Thanks so much for watching this course. I hope you learned a lot. I'm sure there are some mistakes in there. If you found them, please leave comments, and I'll try to fix them as soon as I can. Thank you so much for coming on this testing journey with me.
