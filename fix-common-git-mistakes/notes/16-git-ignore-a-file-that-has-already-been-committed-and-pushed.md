[Video Link](https://egghead.io/lessons/git-git-ignore-a-file-that-has-already-been-committed-and-pushed)

# 16. git Ignore a File that has Already been Committed and Pushed

We make a file and accidentally push it to github
To remove it, add it to .gitignore file
remove all of our files from our git cache
```
git rm -r --cached .
```

add back all the files we want with
```
git add -A
```