When you use booleans to track state and combine them, the number of possible states grows exponentially (2^x).

There are, therefore, a number of impossible states that can grow and need to be guarded against (isLit and isBroken, for example).

A better approach is to use an enum to capture all valid states (LIT, UNLIT, BROKEN). There are only 4 options with 2 booleans, so this isn't that much more efficient but with even a few more this becomes useful.

## Personal take

Keeping track of only the possible states in this way can avoid having to think about impossible states and all of the possible combinations of the chained/combined booleans.
