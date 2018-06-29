# Zeppelin

## Execution engines


### Hive queries

```
%jdbc(hive) [QUERY]
```

#### Example
```
%jdbc(hive) show tables
```

### Spark commands

```
%spark2
[COMMAND]
```

#### Example
```
%spark2
hiveContext.sql("show tables").show()
```
