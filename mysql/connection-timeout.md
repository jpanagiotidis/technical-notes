# Connection Timeout

# Set via configuration
```
[mysqld]
wait_timeout = 5
interactive_timeout = 5000
```

# Get timeout settings
```
SHOW GLOBAL VARIABLES LIKE "%wait_timeout%"

SHOW GLOBAL VARIABLES LIKE "%interactive_timeout%"
```
