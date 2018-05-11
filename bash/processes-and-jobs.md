## View running processes
```
ps aux
```

## Get process id
### From executable name
```
pgrep [EXECUTABLE_NAME]
```

#### Example
```
pgrep bash
```

### From process command line argument
```
pgrep -f [ARG]
```
or
```
ps aux | grep [ARG]
```


## List suspended and background processes
```
jobs
```

## Kill a process
```
kill [pid] #from ps
or
kill %[job id] #from jobs
```
