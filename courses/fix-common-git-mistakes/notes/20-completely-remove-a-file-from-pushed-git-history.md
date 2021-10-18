[Video Link](https://egghead.io/lessons/git-completely-remove-a-file-from-pushed-git-history)

# 20. Completely Remove a File from Pushed git History

Prune the entire history and garbage collect the remains
```
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```
use git push to push that change to github, and remove the .env file from all of the history