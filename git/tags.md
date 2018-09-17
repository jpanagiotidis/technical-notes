# Tags

## List tags
```
git tag
```

## Add tag
```
git tag -a {tagName} -m "some message"
```

## View tag data
```
git show {tagName}
```

## Push a tag
```
git push origin {tagName}
```

## Push all tags
```
git push origin --tags
```

## Get tags sorted as versions
```
git tag --sort=v:refname
```

## Delete tag
```
git tag -d {tagName}
```

## Delete remote tag
```
git tag -d {tagName}
git push origin :refs/tags/{tagName}
```
