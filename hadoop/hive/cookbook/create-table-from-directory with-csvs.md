# Hive Create table from directory with CSVs

1. Create TEMP table and load csv data from HDFS directory
```
CREATE EXTERNAL TABLE IF NOT EXISTS myTempTable(
    c1 STRING,
    c2 STRING
  )
  COMMENT 'Some description'
  ROW FORMAT DELIMITED
  FIELDS TERMINATED BY ','
  STORED AS TEXTFILE
  LOCATION '/user/maria_dev/test';
```

  * If header row needs to be ignored:
  ```
  CREATE EXTERNAL TABLE IF NOT EXISTS myTempTable(
      c1 STRING,
      c2 STRING
    )
    COMMENT 'Some description'
    ROW FORMAT DELIMITED
    FIELDS TERMINATED BY ','
    STORED AS TEXTFILE
    LOCATION '/user/maria_dev/test'
    TBLPROPERTIES ("skip.header.line.count"="1");
  ```

1. Create empty ORC table
```
CREATE TABLE IF NOT EXISTS myTable(
    c1 STRING,
    c2 STRING
  )
  COMMENT 'Employee Names'
  STORED AS ORC;
```

1. Insert data from TEMP table
```
INSERT OVERWRITE TABLE myTable SELECT * FROM myTempTable;
```

1. Check that data were imported
```
select * from myTable limit 10;
```

1. Drop temp table
```
drop table myTempTable;
```
