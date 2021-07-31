## 03. Prevent Rerenders and Add Functionality with Jotai Write-only Atoms

<Timestamp start="0:25" end="0:32">

Write-only atoms can be used to prevent unwanted rerenders.

</Timestamp>

<Timestamp start="0:38" end="0:48">

When we define a write-only atom, the first argument is usually `null` and the second argument is a callback that receives three arguments: get, set, and update.

</Timestamp>

<Timestamp start="0:49" end="1:03">

The `update` argument is the data we receive from invoking the atom in our component. In the example provided by the instructor, `update` contains data about the newly-drawn `Point`.

</Timestamp>

<Timestamp start="1:33" end="1:40">

So far, all of our logic is organized outside of components in atoms.

</Timestamp>
