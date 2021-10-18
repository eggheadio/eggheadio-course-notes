<TimeStamp start="0:07" end="0:17">

Components that use recoil state need RecoilRoot to appear somewhere in the parent tree. A good place to put this is in your root component.

</TimeStamp>

<TimeStamp start="0:25" end="0:40">

Atoms contain the source of truth for our application state. In our todo-list, the source of truth will be an array of objects, with each object representing a todo item.

</TimeStamp>

<TimeStamp start="0:55" end="1:05">

useRecoilValue simply returns the value of the given Recoil state. It is a read only hook, it cannot write to the state.

</TimeStamp>

<TimeStamp start="2:02" end="2:17">

A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way.

</TimeStamp>

<TimeStamp start="2:35" end="2:55">

The setup for a Selector is very similar to an Atom. They both use a `key` but the second property of this Selector will be a `get`. This particular one will return an object that we will use to calculate our total price.

</TimeStamp>
