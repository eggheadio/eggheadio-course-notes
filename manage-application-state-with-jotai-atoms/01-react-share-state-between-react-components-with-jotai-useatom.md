## 01. Share State Between React Components with Jotai useAtom

<Timestamp start="0:25" end="0:35">

`atom` is a function to create atom configs, and `useAtom` is a hook to use those atoms in our components.

</Timestamp>

<Timestamp start="0:36" end="0:40">

The parameter of `atom` defines the default state.

</Timestamp>

<Timestamp start="0:41" end="0:52">

The `useAtom` hook returns a pair of values just like React's `useState` hook does: it returns the current state and a function that updates the state.

</Timestamp>

<Timestamp start="1:03" end="1:14">

Creating two separate atom configs and using them separately is like using two separate `useState` hooks.

</Timestamp>

We can create a new variable (i.e. `count2Atom`) and assign it to a variable storing a predefined atom (i.e. `const count2Atom = countAtom`). We can now pass either the original variable storing the atom or the new variable to our `useAtom` hook, and it will share state just the same.
