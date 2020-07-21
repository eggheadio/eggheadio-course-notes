[Video Link](https://egghead.io/lessons/git-fix-merge-conflicts-while-changing-commits-during-an-interactive-rebase)

# 18. Fix Merge Conflicts While Changing Commits During an Interactive Rebase

enter interactive rebase
```
git rebase -i HEAD~2
```

Then we can fix that merge conflict like normal, but finish up the rebase
```
git rebase --continue
```