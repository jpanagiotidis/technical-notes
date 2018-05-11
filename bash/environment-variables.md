# Environment Variables

## View terminal variables
```
printenv
```

## View process environment variables (Linux only)
```
cat /proc/[pid]/environ
```
### Beautify output
```
cat /proc/[pid]/environ | tr '\0' '\n'
```

## Create variable
```
VAR_NAME="some value"
export VAR_NAME
```

## Change an environment variable (for the session only)
```
export $VAR_NAME=some/path
```

## Change an environment variable (permanent change)
edit ~/.bashrc (~/.bash_profile for OSx) file and add:
```
export $VAR_NAME=some/path
```

## Use env variable value
```
${VAR_NAME}
```
for example:
```
echo ${VAR_NAME}
```

## Add value to PATH environment variable
```
export PATH="$PATH:/my/new/path"
```
