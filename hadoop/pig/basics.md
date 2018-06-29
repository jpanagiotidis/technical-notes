# PIG Scripting basics

## Load table from Hive
```
x = LOAD [TABLE_NAME] USING org.apache.hive.hcatalog.pig.HCatLoader();
```
Use as argument:
```
-useHCatalog
```

### Example
```
t1 = LOAD 'plays' USING org.apache.hive.hcatalog.pig.HCatLoader();
```

## Filter a table
```
x1 = filter x by [EXPRESSION];
```
### Example
```
t2 = filter t1 by score >= 85;
```

## New table by iterating over existing table
```
x = foreach [VARIABLE] generate [[COLUMN_A], [COLUMN_B] ...];
```

### Example
```
t3 = foreach t2 generate name, score, gameid, (int) '1' as occurance;
```

## New table by iterating over existing table (column position index)
```
x = foreach [VARIABLE] generate [[INDEX_COLUMN_A] as [NEW_COLUMN_NAME_A], [INDEX_COLUMN_B] as [NEW_COLUMN_NAME_B] ...];
```

### Example
```
t5 = foreach t4 generate $0 as name, $1 as score, $5 as game, (float) $1*$6/100 as weightedscore;
```

## Join tables
```
x = join [TABLE_A_VARIABLE] by [COLUMN_TABLE_A], [TABLE_B_VARIABLE] by [COLUMN_TABLE_B]
```

### Example
```
t4 = join t3 by gameid, g by id;
```

## Group by
```
x1 = GROUP x by [COLUMN_NAME];
```

### Example
```
t6 = group t5 by name;
```

### Create table from grouped table
```
x1 = GROUP x by [COLUMN_NAME];
x2 = foreach x1 generate group as [[COLUMN_A | x.COLUMN_A], ...]
```

#### Example
```
t6 = group t5 by name;
t7 = foreach t6 generate group as name, AVG(t5.weightedscore) as weightedscore;
```

## Print the value of a variable
```
DUMP t1;
```

## Store table variable
```
store x into [TABLE_NAME] using org.apache.hive.hcatalog.pig.HCatStorer();
```

### Example
```
store final_data into 'riskfactor' using org.apache.hive.hcatalog.pig.HCatStorer();
```
