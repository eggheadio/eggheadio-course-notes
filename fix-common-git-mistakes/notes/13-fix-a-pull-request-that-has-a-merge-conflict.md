[Video Link](https://egghead.io/lessons/git-fix-a-pull-request-that-has-a-merge-conflict)

# 13. Fix a Pull Request that has a Merge Conflict
```
git checkout -b conflicts_branch
```

Add 'Line4' and 'Line5'
```
git commit -am "add line4 and line5"
git push origin conflicts_branch
git checkout master
```

Add 'Line6' and 'Line7'`
```
git commit -am "add line6 and line7"
git push origin master
```