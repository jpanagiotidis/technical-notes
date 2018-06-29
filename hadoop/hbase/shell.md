# HBase Shell

## Open shell
```
/path/to/bin/hbase shell
```

## Quit shell
```
quit
```

## Namespaces

### Create namespace
```
create_namespace '[NAMESPACE_NAME]'
```

### Drop namespace
```
drop_namespace '[NAMESPACE_NAME]'
```

### Alter namespace
```
alter_namespace '[NAMESPACE_NAME]', {METHOD => 'set', '[PROPERTY_NAME]' => '[PROPERTY_VALUE]'}
```

## Table

### Create table
```
create '[NAMESPACE]:[TABLE_NAME]', {NAME => '[COLUMN_FAMILY_NAME]', [CONFIGURATION_KEY] => VALUE, ...}, ...
```
#### Example
```
create 'ns1:t1', {NAME => 'cf1', VERSIONS => 1}, {NAME => 'cf2', VERSIONS => 5}
```
If namespace is omitted then the default namespace is used.
Only column family names can be provided:
```
create 't2', 'cf1', 'cf2', 'cf3'
```

### Disable table
```
disable [TABLE_NAME]
```

### Enable table
```
enable [TABLE_NAME]
```

### Drop table
```
drop [TABLE_NAME]
```

### List tables
```
list
```

### Get table description
```
describe [TABLE_NAME]
```

## Put value
```
put '[NAMESPACE]:[TABLE_NAME]', '[ROW_ID]', '[COLUMN_FAMILY_NAME:COLUMN_QUALIFIER]', '[VALUE]'
```

### Put with timestamp
```
put '[NAMESPACE]:[TABLE_NAME]', '[ROW_ID]', '[COLUMN_FAMILY_NAME:COLUMN_QUALIFIER]', '[VALUE]', [TIMESTAMP]
```

## Scan table
```
scan '[TABLE_NAME]'
```

### Scan table range
```
scan '[TABLE_NAME]', {STARTROW => '[PREFIX_START]', ENDROW => '[PREFIX_END]'}
```

## Get

### Row
```
get '[TABLE_NAME]', '[ROW_ID]'
```

## Column family
```
get '[TABLE_NAME]', '[ROW_ID]', '[COLUMN_FAMILY_NAME]'
```

## Column qualifier vlue
```
get '[TABLE_NAME]', '[ROW_ID]', '[COLUMN_FAMILY_NAME]:[COLUMN_QUALIFIER]'
```
