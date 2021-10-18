[Video Link](https://egghead.io/lessons/git-change-a-commit-message-that-hasn-t-been-pushed-yet)

# 01. Change a Commit Message that Hasn't Been Pushed Yet

To start a new Git project, go to `New` on Github and enter a repository name. After creating the repository, find the clone link for the repo and `git clone <repo-link>`. You can then `cd` into that folder and `touch index.html` to create your first file. Inside your `index.html` file you can insert code and add the file to your commit.

## index.html
```html
<html>
  <head>
  </head>
  <body>

    <h1>Fixing git mistakes</h1>

  </body>
</html>  
```

You can do a `git status` and see that the `index.html` is an untracked file. Once you `git add index.html`, it stages the file and prepares it for a commit. You can commit that with a message like `git commit -m "Adding index.html to git-mistokes"`.

After typing the commit message, we see we typed it incorrectly and want to change it. Since we haven't pushed it yet, you can use `git commit --amend -m "Adding index.html to git-mistakes"` to change the message. Now, if we `git log --oneline`, we can see the initial commit Github made to the project along with our rewritten message `Adding index.html to git-mistakes`.

# Personal Take

`git commit --amend` is a very useful feature I know I'll use in the future should I mess up my commit messages. There are plenty of times I would simply just abandon a commit to retype a message, as I had no idea this feature existed. I like the simplicity of this lesson, the approach helps all levels of experience.

