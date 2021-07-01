# Notes

<TimeStamp start="0:27" end="0:29">

We are going to use Recoil [selectors](https://recoiljs.org/docs/api-reference/core/selector/) to allow the `function Square` to recalculated the value whenever the atom is updated. 

</TimeStamp>
<TimeStamp start="0:33" end="0:48">

In Recoil, a selector is a pure function that accepts atoms or some other selectors as input. What's going to happen is that a selector is going to calculate a derived state, you can think of derived state as the output of passing the state

</TimeStamp>

<TimeStamp start="1:04" end="1:20">

In a `selector` you'll need to specify a `key` and a `get` property which will be the function that is going to be computed. This function can access the value of atoms or some other selectors.

</TimeStamp>

<TimeStamp start="2:06" end="2:17">

If you want to keep the track of core pieces of your state, you have to use atoms, but if you would like to calculate some other pieces of state based on those atoms, you have to use selectors

</TimeStamp>

<TimeStamp start="2:18" end="2:36">

Selectors are really powerful because as we see in this example, whenever the `numState` is going to be changed by any component, the `squareState` is going to be recalculated automatically because it is based on this `numState`. This approach allows us to have a minimum number of atoms and only use the selectors to calculate derived data from those atoms.

</TimeStamp>