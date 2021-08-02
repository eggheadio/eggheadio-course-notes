## 07. Compose Jotai Atoms to Update Atom Values From Different React Components

<TimeStamp start="0:15" end="0:25">

This `setColorAtom` is, for now, a write-only atom that will update the color property of the currently selected atom if one is selected.

</TimeStamp>

<TimeStamp start="1:10" end="1:25">

We now want to read the current color from `setColorAtom`. We'll change the first argument of the `atom` config from null to a function that returns the color of the currently selected ShapeAtom if one is selected and null otherwise.

</TimeStamp>

<TimeStamp start="1:26" end="1:33">

Now, the first value returned from the `useAtom` hook, `currentColor`, is the color of the currently selected ShapeAtom.

</TimeStamp>
