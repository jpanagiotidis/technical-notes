# grep

## Search in file
```
grep search_string file
```

## View line numbers
```
grep -n search_string file
```

## Search directory recursively
```
grep -rn 'search_string' path/to/directory/*
```

### Exclude directories
```
grep -rn \
--exclude-dir=path/to/directory/bin \
'search_string' \
path/to/directory/*
```

or for multiple directories

```
grep -rn \
--exclude-dir={path/to/directory/bin,path/to/directory/test} \
'search_string' \
path/to/directory/*
```
