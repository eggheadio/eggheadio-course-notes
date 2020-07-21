[Video Link](https://egghead.io/lessons/git-remove-changes-from-a-commit-before-pushing)

# 04. Remove Changes from a Commit Before Pushing

Inside of the `app.js` created earlier, we can create a function `helloWorld` that contains `alert("hello!")`. Later, you might close that file and open the `index.html` and make changes to that file like adding a description.

## app.js
```js
// our app js code

function helloWorld() {
  alert("hello!")
}
```

## index.html
```html
<html>
  <head>
    <script type="text/javascript" src="/app.js"></script>
  </head>
  <body>

    <h1>Fixing git mistakes</h1>
    <p>Here's how to fix some common git mistakes</p>
  </body>
</html>  
```

You may be tempted to use `git add -A` alongside a simple commit message after that, but it will be clear that you are ahead by 2 commits. If you're able to see this before committing, you want to see what you're about to push. To check, run `git diff origin/master HEAD` to see the changes to all files edited.

If you realize you want to get rid of something before you push, check the log with `git log --oneline` to see which commit you'd like to undo. You have to decide where you want to reset to, so after finding the desired commit use `git reset {LOCATION}`. The location can be a hash associated with a commit or something like `HEAD~1` which takes you to HEAD, then back down the tree 1 time.

After performing a `git reset`, your files should return to the unstaged location. **It's important to be careful to not use `git reset` after pushing a commit because it'll change the history other people may have already downloaded.** So, only use reset on branches that aren't pushed yet.

Now, you can `git add index.html` and `git commit -m "Adds desc for index"` to fix what went wrong earlier. Using `git status` will us we have the `app.js` not staged for commit and that we are two commits ahead of origin/master. You can use `git log --oneline` to verify the old commit was replaced with the new one.

# Personal Take

Overall solid lesson, I like how descriptive Chris is when detailing his examples. I find myself having a question about where to find something or a concern with a procedure only to have it answered by Chris shortly after.

