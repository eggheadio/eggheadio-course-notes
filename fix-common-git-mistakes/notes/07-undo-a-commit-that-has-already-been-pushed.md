[Video Link](https://egghead.io/lessons/git-undo-a-commit-that-has-already-been-pushed)

# 07. Undo a Commit that has Already Been Pushed

If we just made a push to Github, we can use `git log --oneline` to see our local branch is up to date with our origin. We are presented with a problem when we try to undo a commit that's already been pushed. **We have to be careful because if we undo a commit already pushed, we would affect those who pulled the changes, effectively rewriting history.**

We are going to use `git revert {HASH}` with the hash being the commit we want to revert. After doing so, it'll want you to make a revert commit. It's similar to a merge commit because it adds another commit to the tree, plus we have to give it a message. After entering the message, running `git log --oneline` we find that it successfully reverted the last commit.

**The important thing is that when using `git revert`, the history is still there.** You can go back to an earlier commit to revive previous work/code. In addition, anyone who pulled the origin/master branch during the time it took to revert will have a clean history tree because we used `git revert {HASH}` instead of `git reset --hard {HASH}`.

# Personal Take

Another concise lesson that explained a useful command, this time one that serves as an alternative to a `git reset`. I like that it isn't overexplained and leaves the listener to look up a little bit more if they desire.

