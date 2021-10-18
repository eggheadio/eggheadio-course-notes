# Use selectorFamily to take arguments in your Recoil selectors

[Video link](https://www.egghead.io/lessons/react-use-selectorfamily-to-take-arguments-in-your-recoil-selectors?pl=manage-react-state-with-recoil-fe987643)

Yoni Weisbrod: [0:00] In this React application with Recoil installed, we have an atom here that contains our todoList. We want to display the items on screen, sorted, either ascending or descending.

[0:11] Rather than having to constantly call a sort function, we can just return a sorted array using a Recoil selector, which has the advantage of keeping the todoList up to date when any of the dependencies change.

[0:25] To start, we're going to store our sortValue in an atom. Again, we'll give it the key sortValue, and we will give it a default value of ASC. Then we're going to use a selector called sortedTodoList, which will again have a key called sortedTodoList. It will return a getter method which will get an argument that we're going to destructure to get. We're going to use that argument to get our sortValue from the atom.

[1:06] We can say sortedType = get(sortValue). We'll do the same thing for the todoList itself. We'll say todos = get(todoList). Then we will return a sorted array, so we'll say return sortedType === 'ASC' ? todos.sort((a,b) => a.createdAt - b.createdAt). Otherwise, give me sorted in the opposite order. We'll do todos.sort((a,b) => b.createdAt - a.createdAt).That gives us a sorted array.

[2:03] Now, all we need to do is add this to our React application. We'll say const mySortedTodoList = useRecoilValue(sortedTodoList). We'll say mySortedTodoList.map((item, index)) and return a paragraph with the key of the index and then give the item.name and the date, so item.createdAt in a way that we can read it in English, so toISODate().

[2:46] That's not a built-in JavaScript function. This is a function from Luxon, a library that I'm using for my dates. Just pay attention to that. We'll close our map and we should be good to go.

[3:03] We have the array that's sorted in ascending order 22, 23, 24th of August. We don't have to rely on a separate atom to contain our sort value. We can supply the sort value as an argument within our React component, but we can't do this with a regular selector. We need to use a selector family.

[3:24] Start by simulating the select value as a constant in our React application. We'll assume it's ascending, based on the dropdown that we might have. Then we'll import the selectorFamily instead of selector. I will change this to selectorFamily. Instead of getting our sortedType from the atom, we're going to take it as a parameter to our getter. We can just do it directly here, sortedType. Take this out.

[3:58] In our React component, we can just supply it as an argument here, sortedTodoList, and giving an argument of sortOrder which is ascending. Here, we're ordering by ascending. Notice, we can change this to descending, and it will work in the opposite direction.

[4:16] That is how you have a Recoil selector take an argument for getter.
