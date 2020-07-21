[Video Link](https://egghead.io/lessons/git-remove-files-from-staging-before-committing)

# 03. Remove Files from Staging Before Committing

We can add another Javascript file to our project with `touch lib.js`. After doing so, we can `git status` to confirm it is untracked. Then, a `git add lib.js` will stage it for a commit. However, we might realize after adding it that we may not want to commit that file at all.

Although Git tells us how to do it in the terminal (`git reset HEAD <file>...`), we want to figure out what the `HEAD` means. With `git log --oneline` we find the `HEAD` is just a pointer to a branch and that branch is just a pointer to the commit specified by a hash on the left.

After running `git reset HEAD lib.js`, we can check if we successfully removed it from being staged for a commit with `git status`.

# Personal Take

Another very relatable lesson created for this course. If a viewer isn't aware of this command beforehand, I'm sure it'll provide a lot of use for them now.

