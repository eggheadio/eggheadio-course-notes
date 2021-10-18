[Video Link](https://egghead.io/lessons/git-add-more-files-and-changes-to-a-commit-before-pushing)

# 02. Add More Files and Changes to a Commit Before Pushing

We can use `git log --oneline` to see information about our previous commits like what files were added to certain commits. There is something we can do if we want to add more than one file to the same commit. We can `touch app.js` and edit it.

## app.js
```js
// our app js code
```

To see that, we need to add it in the `<head>` of the `index.html` in our previous commit. We type `<script type="text/javascript" src="/app.js"></script>`.

## index.html
```html
<html>
  <head>
    <script type="text/javascript" src="/app.js"></script>
  </head>
  <body>

    <h1>Fixing git mistakes</h1>

  </body>
</html>  
```

Now that we have our `script` tag added to our `index.html`, when we do `git status` we have one untracked file and one modified file. However, we want to add those to the same commit. To do this, we add both to the stage with `git add -A` and we have both as a change to be committed. We then `git commit --amend -m "Adding index.html and app.js"` to add them to the same previous commit. Now, with `git status`, we have no changes to be committed. A `git log --oneline`, all files were added to the same commit along with a rewritten commit message.

# Personal Take

This lesson was very straightforward with a desired end goal that it achieved. I also like the fact that the lessons are very ordinary mistakes everyone makes, hence the name 'Fix Common Git Mistakes'. These short lessons with commentary are great for people to jump in to a lesson/title they recognize.

