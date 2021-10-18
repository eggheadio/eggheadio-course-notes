# Update Recoil State in React using useRecoilState

[Video link](https://www.egghead.io/lessons/react-update-recoil-state-in-react-using-userecoilstate?pl=manage-react-state-with-recoil-fe987643)

Yoni Weisbrod: [0:00] In this React application, we already have Recoil installed. Let's transfer our state to the Recoil atom object, so that we can discuss how to update the state.

[0:13] We'll start by declaring a shoppingList as an atom, giving it the same unique key, and giving it a default which is a starting value of milk, jujyfruits, and eggs.

[0:36] We can't consume the shoppingList directly, we have to use a Recoil hook. We're going to useRecoilState, which is the most similar to the useState hook that comes with React. You'll see the syntax is also quite similar.

[0:51] To use it, we will say const myShoppingList and setShoppingList = useRecoilState, and we'll give it the atom as an argument.

[1:09] Now, we'll go and loop through myShoppingList and show each item on screen. We'll create a new listItem for each one and put the item here. Now, we can see all of our items on screen.

[1:34] In order to remove our items, we're going to add an onClick method called removeItem where we supply it with our item. Now, let's create that method. RemoveItem will give it our item as an argument, but it has to return a function because onClick will be calling it.

[1:59] This isn't anything related to Recoil. It's just a cleaner way that I find to declare callbacks. We're going to keep this removeItem immutable, so we're just going to set shoppingList to a new array that doesn't contain that item.

[2:12] To do that, we'll need the index of our item so itemIndex = myShoppingList.findIndex, e === item. This will give us the index of the item that we want to remove, and then we will just set our shoppingList to a new array.

[2:38] We will say myShoppingList.slice(, itemIndex), and the second member will be myShoppingList.slice(itemIndex + 1), which takes us from the removed item to the end of the array.

[3:03] Now, when I go back to myShoppingList, refresh. Now, I can click on any of the items to remove them from the list.

[3:10] To complete the picture, let's add an input so that we can add items to our shopping list. We'll add an onKeyDown callback called addItem, and then we will define this new function addItem which takes an event.

[3:34] That will say that if the user pressed Enter, we should add the new item to the list. If the event.key === Enter, let's again do setShoppingList with the new array, which will be myShoppingList with the spread operator, and then we'll tack on our new food item to the end of that array.

[4:00] Let's see if this works. We will type in yogurt and it's added.
