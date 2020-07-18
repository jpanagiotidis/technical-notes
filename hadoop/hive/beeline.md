# Hive Beeline Cli

## Connect
```
beeline -u jdbc:hive2://${HOST}:${PORT} -n ${USER}
```

### example
```
beeline -u jdbc:hive2://localhost:10000/default
```

### Help
```
!help
```

### Show tables
```
!tables
```

### Table schema
```
!describe [TABLE_NAME]
```

### Quit
```
!quit
```

### Set configuration
```
set ${CONF_KEY}=${CONF_VALUE}
```

### View configuration
```
set -v
```

## CLI execution
```
beeline -u jdbc:hive2://${HOST}:${PORT} -n ${USER} -e "${QUERY}"
```

### Set configuration
```
beeline -u jdbc:hive2://${HOST}:${PORT} -n ${USER} -e "${QUERY}" --hiveconf=${CONF_KEY}=${CONF_VALUE}
```


## Execute hql file
```
beeline -u jdbc:hive2://${HOST}:${PORT} -n ${USER} -i path/to/file.hql
```