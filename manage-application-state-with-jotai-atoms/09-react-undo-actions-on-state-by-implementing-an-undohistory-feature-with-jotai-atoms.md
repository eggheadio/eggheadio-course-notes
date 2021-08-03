## 09. Undo Actions on State by Implementing an undoHistory Feature with Jotai Atoms

<TimeStamp start="0:30" end="0:45">

The `historyAtom` stores an array of `ShapeAtomValue` arrays: this will be used in the `saveHistoryAtom` to save snapshots of the shapes currently drawn to the screen. Then, we can write to the `saveHistoryAtom` before saving making any changes to the internal shapes.

</TimeStamp>
