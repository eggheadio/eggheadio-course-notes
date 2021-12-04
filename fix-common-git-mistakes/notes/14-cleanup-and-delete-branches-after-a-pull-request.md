[Video Link](https://egghead.io/lessons/git-cleanup-and-delete-branches-after-a-pull-request)

# 14. Cleanup and Delete Branches After a Pull Request

use the github interface to delete the branch remotely

Locally

Confirm that remote is gone
```
git remote prune origin --dry-run
git remote prune origin
```

clean up the feature branch
```
git branch -d feature-branch
```