# Hive Create table from lateral view
[Documentation](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+LateralView)

[Table-Generating Functions](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF#LanguageManualUDF-Built-inTable-GeneratingFunctions(UDTF))

1. Create table
```
CREATE TABLE IF NOT EXISTS table1(
    name STRING,
    a1 INT,
    a2 INT,
    b1 INT,
    b2 INT
  )
  STORED AS ORC;
```
1. Insert elements
```
INSERT INTO table table1 (name, a1, a2, b1, b2)
  VALUES  ("jon", 3, 4, 3, 6),
          ("mike", 4, 9, 1, 3);
```

1. Create new table from lateral view of previous table
```
CREATE TABLE IF NOT EXISTS table2
  STORED AS ORC AS
  SELECT name, colId, col1, col2, col1/col2 avg
  FROM table1
  LATERAL VIEW stack(
      2,
      "a", a1, a2,
      "b", b1, b2
    ) dummyAlias as colId, col1, col2;
```
