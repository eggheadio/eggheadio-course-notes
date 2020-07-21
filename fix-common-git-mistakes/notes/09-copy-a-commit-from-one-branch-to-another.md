[Video Link](https://egghead.io/lessons/git-copy-a-commit-from-one-branch-to-another)

# 09. Copy a Commit from One Branch to Another

If we do `git branch`, we notice we have two branches. In addition, `git log --oneline` shows us our latest branch has our commit diverging from `master`, the reversion of the `take 3` commit. We can switch over to `master` with `git checkout master` leaving our `app.js` empty.

A problem we could face is that we want the function we created on our separate branch `js-changes` transferred/copied to `master` without pulling the entire branch. We simply want to pick the individual commit to `js-changes` and move it to `master`.

`git log --oneline` shows us our current latest commit in `master` isn't up to date with the separate branch. **What we can do to match the commit in our branches is use cherry picking. We run `git cherry-pick {HASH}` with the hash being the desired commit.** Now, our `git log --oneline` actually shows there was a new commit hash created as it came over. **What happened is we copied the commit from `js-changes` over to `master` and pushed it up, so the commit exists in both trees.**

# Personal Take

Solid lesson introducing a new concept that helps us with branch management. Good length and info, not much else to say.

# Resources

[Cherry Picking Info (contains great diagrams)](https://www.codementor.io/@olatundegaruba/how-to-git-cherry-pick-dyrp9pnmc)

