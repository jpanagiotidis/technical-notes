# Create table from CSV file

1. Create empty table
```
CREATE TABLE IF NOT EXISTS myTempTable(
    c1 STRING,
    c2 STRING
  )
  COMMENT 'Some description'
  ROW FORMAT DELIMITED
  FIELDS TERMINATED BY ','
  STORED AS TEXTFILE;
```

1. Load CSV contents
This step moves (deletes) the initial CSV file.
```
LOAD DATA INPATH '/path/to/file.csv' \
  INTO TABLE myTempTable;
```
