## 06. Add Additional Functionality by Creating Jotai Atoms that Hold Atoms

<Timestamp start="0:21" end="0:30">

The naming convention here, `selectedShapeAtomAtom`, can be translated to "atom that stores the selected `ShapeAtom`".

</Timestamp>

<Timestamp start="1:31" end="1:44">

The `selectedAtomCreator` returns true if the provided `ShapeAtom` is the same as the selected `ShapeAtom` and false otherwise. The `useMemo` hook causes `selectedAtomCreator` to only be called when the `shapeAtom` has changed.

</Timestamp>

<Timestamp start="1:45" end="2:00">

When the SvgShape component is clicked, the component's `selected` state is set to true. To do this, the atom stored in `selectedShapeAtomAtom` is set to be the `shapeAtom` of the clicked shape. This fires the `selectedAtomCreator` function and updates SvgShape component's `selected` state to true.

</Timestamp>
