# Reset

## removes staged and working directory changes
```
git reset --hard
```

## remove untracked files
```
git clean -f -d
```

## CAUTION: as above but removes ignored files like config.
```
git clean -f -x -d
```

## Reset a single file
```
git checkout path/to/file
```

### if exists branch with the same name
```
git checkout -- path/to/file
```
