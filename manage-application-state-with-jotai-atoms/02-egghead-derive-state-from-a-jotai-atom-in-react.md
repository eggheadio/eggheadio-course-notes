## 02. Derive State from a Jotai Atom in React

<TimeStamp start="0:08" end="0:15">

With TypeScript, we can define the type of state that the atom holds just like we would with the `useState()` hook.

</TimeStamp>

<TimeStamp start="0:55" end="1:02">

A derived atom can be created from other atoms.

</TimeStamp>

<TimeStamp start="1:03" end="1:15">

To create a derived atom, we use `atom` and pass in a callback function. This callback receives a `get` argument which is a function that allows you to access the value of an atom.

`const numberOfDotsAtom = atom((get) => get(dotsAtom).length)`

</TimeStamp>

<TimeStamp start="1:25" end="1:32">

The idea behind derived atoms is to separate logic from components.

</TimeStamp>
