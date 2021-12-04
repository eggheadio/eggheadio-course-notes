[Video Link](https://egghead.io/lessons/git-use-git-stash-to-save-local-changes-while-pulling)

# 11. Use `git stash` to Save Local Changes While Pulling

Save the local changes,
```
git stash
```

Get remote changes
```
git pull
```

To apply the stashed changed
```
git stash pop
```

You will need to  fix the merge conflict.

Then drop the change from the stash
```
git stash drop stash@{0}
```