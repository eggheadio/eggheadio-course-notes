## 08. Delete Data in a Jotai Atom by Composing and Filtering Atoms

<TimeStamp start="0:33" end="0:45">

The `deleteSelectedShapeAtom` filters out the `selected` ShapeAtom from the `shapeAtomsAtom` array of ShapeAtoms.

</TimeStamp>

<TimeStamp start="0:49" end="1:01">

The `set(unselectAtom, null)` syntax effectively writes to the `unselectAtom` without sending a parameter. If we look at `unselectAtom`, we can see that this will set the `selectedShapeAtomAtom` value to null.

</TimeStamp>

<TimeStamp start="1:28" end="1:40">

We can "read" this atom to know if a ShapeAtom is currently selected, and we can "write" to this atom to delete the currently selected ShapeAtom.

</TimeStamp>
