# Display Computed Data Using Recoil Selectors in React

[Video link](https://www.egghead.io/lessons/react-display-computed-data-using-recoil-selectors-in-react?pl=manage-react-state-with-recoil-fe987643)

Yoni Weisbrod: [0:00] We have a new React application here, and we've already installed recoil. The first thing we need to do is to import { RecoilRoute } from "recoil," which we're going to use to wrap around our entire application, our app component. The app is a point-of-sale app for a restaurant where we keep track of our users' food orders.

[0:20] We're going to start by putting the orders in what's called an atom which is recoil state object. We'll call the atom order. Every atom in recoil requires a unique key. We'll give it the same key. We'll call it order. Then recoil allows you to set what's called the default, which would be the initial value of the atom. We're going to start every table off with some free garlic bread, so that'll be our default setting.

[0:53] To consume our orderState object, we need to use one of the recoil hooks. In this case, because we're only reading a value, the best hook to use is useRecoilValue. We're going to import that from recoil. Then, we'll declare a new variable called myOrder that uses the hook to get the value of the orderState object

[1:14] Let's take our entire order map through every food item and displayed on screen will create a paragraph component. We'll give each one a unique key. Inside that paragraph component, we'll display the food itself, and now we can see our free garlic bread on screen.

[1:34] Notice that if we add more foods to the list like an order of coffee, it will be displayed in our list of components and continue listening to any changes in the order object. What if we want it to show on screen the total price of our order, which would need to be recalculated whenever the order changes?

[1:54] We don't want to explicitly call a function for that because recoil has a better way to display computed data, and that is using selectors. Let's start by adding in a price list for our order. We'll have some coffee for 2 dollars, some free garlic bread,  dollars, and we'll have some pancakes as well.

[2:19] Let's assign our selector to a new orderInfo object. The syntax for a selector is very similar to an atom, so you write selector, and then you supply it with an object that's an argument. First, we're going to have to import our selector from recoil.

[2:35] We're going go ahead. Like we did for atoms, we're going to declare a unique key. Again, we'll call it orderInfo. The second property of our orderInfo selector will be a get method, if I get property. It's going to be a function that receivers a get parameter and then it will return an object into which we can put all sorts of information about our order.

[2:58] In this case, we're just going to start with total price. I did not destructure the get properly. We'll start by calling get on our order atom to get the complete order. This will be how you access data from an atom or a different selector within a selector.

[3:15] Then we're going to map through each food item and get its price from our priceList. After that, we're going to sum up all the prices using the reduce function. Now that we're finished declaring our selector, we need to consume it again with one of the Recoil hooks, useRecoilValue.

[3:40] Notice that in Recoil, both atoms and selectors are consumed with the same Recoil hooks. What really matters is if you're on write data or read data.

[3:51] Now we can finally add in our total price using the orderStats object from our selector. The really nice thing about using selectors is that all these computed data will remain fresh so as soon as your atom changes the new total price will automatically be recalculated, and you'll automatically always have fresh data on screen.
