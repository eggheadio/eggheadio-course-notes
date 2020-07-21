[Video Link](https://egghead.io/lessons/git-change-the-commit-message-of-a-previous-commit-with-interactive-rebase)

# 15. Change the Commit Message of a Previous Commit with Interactive Rebase
```
git log --oneline
```

start the interactive rebase
```
git rebase -i HEAD~3
```
and then change pick to reword.

We can now reword the commit message