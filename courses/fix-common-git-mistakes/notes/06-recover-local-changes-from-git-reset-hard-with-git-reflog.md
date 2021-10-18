[Video Link](https://egghead.io/lessons/git-recover-local-changes-from-git-reset-hard-with-git-reflog)

# 06. Recover Local Changes from `git reset --hard` with `git reflog`

After doing a `git reset --hard HEAD~1`, it removed the code in our `app.js`, but we want to get it back. We can look at `git reflog`, something used to look at all the different things you have done in your local git repository. You can see the latest resets you've done with that command, note the hashes which you'll be using later.

One thing to note is that we are trying to recover a hard reset, so the commit is considered abandoned and will get garbage collected eventually if we don't save it. **`git reflog` will work to save commits, but only if they haven't been garbage collected by git yet.**

Once you find the commit you need to return to to recover your code, use that hash and run `git reset --hard {HASH}`. It will then return your code back to its state. Using `git log --oneline` shows the regular commits, as well the old commit. After successfully recovering, remember to `git push` to store in Github to view.

# Personal Take

I like that this lesson answered the cliffhanger of the last lesson. We were shown a `git reset --hard`, but advised to not do so because it'd delete work. However, this shows what to do in the event it happens. I like the explanations on this lesson a lot.

