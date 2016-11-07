# Environmental Variables

## View current Variables
```
printenv
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
