[Video Link](https://egghead.io/lessons/git-use-and-compare-the-different-git-reset-options-hard-soft-and-mixed)

# 05. Use and Compare the Different git Reset Options: --hard, --soft, and --mixed

If our `app.js` is modified and we run the commands

```
git add app.js
git commit -m "app js changes"
git log --oneline
```

it will commit the file locally and we can see the commit in your tree.

**Running `git --help reset` will show the different reset options.**

The common flags you will see are `--soft`, `--hard`, and `--mixed`. If you try `git reset --soft HEAD~1` to reset back one from the HEAD, it will take the previously committed `app.js` and move it back to the staging area.

We can redo this with `git commit -m "take 2"` and try a reset with `git reset --mixed HEAD~1`, the `app.js` removes the commit as well as unstages the changes.

Trying another reset, we can run `git add app.js` and `git commit -m "take 3"` to prepare our file. We can enter `git reset --hard HEAD~1`, but see that it actually causes us to lose our work. It gets rid of the commit, unstages the changes, and removes them from our directory. **Because we lose our work doing so, you don't usually want to do a `git reset --hard`.**

# Personal Take

I liked this how Chris showed us the `git --help reset`, I wasn't aware of the command beforehand. Solid lesson going over three of the most common different types of resets.

# Resources

[When to Use Git Reset, Git Revert & Git Checkout](https://dev.to/neshaz/when-to-use-git-reset-git-revert--git-checkout-18je)

