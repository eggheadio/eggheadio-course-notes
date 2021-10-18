[Video Link](https://egghead.io/lessons/git-push-a-new-branch-to-github-that-doesn-t-exist-remotely-yet)

# 08. Push a New Branch to github that Doesn't Exist Remotely Yet

We can create branches with `git branch {BRANCH-NAME}` or `git checkout -b {BRANCH-NAME}`. Let's create one called `js-changes` with `git checkout -b js-changes`. Using `git status` shows you which branch you're currently on and `git branch -vv` shows the current commit and remote you're on for each branch. We can make a change on the branch by creating a function in our `app.js`.

## app.js
```js
// our app js code

function helloWorld() {
  alert("Hi!")
}
```

After saving, we stage the file with `git add app.js` and a commit message `git commit -m "Adds hello world"`. Using the `git log --oneline` shows that we have diverged from the master branch. If we tried to push at this point, we would receive a fatal error. Using `git branch -vv` displays we don't have `js-changes` linked to any remote branch. However, Git gives us the fix in the terminal. We have to push while setting the upstream to `origin js-changes`. **We then run `git push -u origin js-changes` to push it, as `-u` is just an alternative to `--set-upstream`.** Now, we successfully pushed our new branch to Github and trying `git branch -vv` can show us that the old `js-changes` is now mapped to `origin/js-changes`.

# Personal Take

Pretty fun lesson for something that's super handy that I've done commonly. I like the different shortcuts Chris shows throughout his lessons.

