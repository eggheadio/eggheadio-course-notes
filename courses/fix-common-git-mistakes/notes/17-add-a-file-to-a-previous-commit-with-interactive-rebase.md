[Video Link](https://egghead.io/lessons/git-add-a-file-to-a-previous-commit-with-interactive-rebase)

# 17. Add a File to a Previous Commit with Interactive Rebase
```
git rebase -i HEAD~2
```

during the interactive rebase, we can add the file, and amend the commi
```
git commit --amend --no-edit

git rebase --continue
```