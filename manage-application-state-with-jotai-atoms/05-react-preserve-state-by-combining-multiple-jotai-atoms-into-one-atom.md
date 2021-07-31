## 05. Preserve State by Combining Multiple Jotai Atoms into One Atom

<Timestamp start="0:14" end="0:24">

To store a list of states and effectively preserve them, we can combine multiple atoms into one atom. This new atom would store a list of atom configs.

</Timestamp>

<Timestamp start="1:12" end="1:20">

An atom config can be converted to a string to be used as a `key` prop when we `map` over a list of atoms.

</Timestamp>
