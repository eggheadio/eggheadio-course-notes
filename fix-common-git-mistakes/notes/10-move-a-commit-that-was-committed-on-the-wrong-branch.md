[Video Link](https://egghead.io/lessons/git-move-a-commit-that-was-committed-on-the-wrong-branch)

# 10. Move a Commit that was Committed on the Wrong Branch

Using `git branch` shows us we have two branches, `js-changes` and `master`, and we are on `master`. We can write a second function in our `app.js`.

## app.js
```js
// our app js code

function helloWorld() {
  alert("Hi!")
}

function secondFunction() {
  alert("This is number 2")
}
```

After modifying, we add and commit it.

## Terminal Input
```
git add -A
git commit -m "My second function"
```

However, after doing so, doing `git branch` shows us we made this commit on `master` branch and we meant to do it on the `js-changes` branch. `git log --oneline` shows us which commit we need to move from `master` to `js-changes`, but the problem is master is pointing to it. **A lot of solutions to this involve `git reset --hard`, but beware because they can cause a loss of data.**

What we want to do is switch to the `js-changes` branch with `git checkout js-changes`. Now, to get the function into it, we copy the commit hash and cherry pick that commit hash we want to move over with `git cherry-pick {HASH}`. Now, on the `js-changes` branch, we have the code we want and can push that with `git push`.

At this moment, our code on `js-changes` is correct, but `master` still contains that old commit, as **cherry picking copies the commit but doesn't remove it**. To switch `master` to be back at a previous commit, we do a `git reset {HASH}` to the commit we want to return to. An alternative to returning the hash would be making the it `HEAD~1`.

Now, `git status` shows `app.js` is still a modified file. **However, after resetting we can `git checkout app.js` to reset it whatever it was at the hash we reset to.** After entering that, `git status` shows `app.js` is not changed and `git log --oneline` shows the commit is gone. This approach is like manually doing a reset hard, but we can choose exactly what files we want to reset making it a safe and powerful option.

# Personal Take

I like the way the lessons building on one another. The last one introduces cherry picking and this utilized it in a manner that is slightly more advanced than last one. The teaching level is enough so if you're unaware of these commands, they help, but low enough to easily understand what's occurring in front of you.

