# Data engineering commands

## Count file lines
```
wc -l path/to/file
```

## Get n first lines
```
head -${NUMBER} path/to/file
```

## Get lines range
```
sed -n '${START_LINE_NUMBER},${END_LINE_NUMBER}p' path/to/file
```