# Bash directories and paths

## Get working directory full path
```
$(PWD)
```

## Get working directory name
```
${PWD##*/}
```

## Go to script directory
```
d "$( dirname "${BASH_SOURCE[0]}" )"
```
