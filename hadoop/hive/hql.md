```
show create table ${DATABASE_NAME}.${TABLE_NAME}
```

```
drop table if exists ${DATABASE_NAME}.${TABLE_NAME}
```

```
create database if not exists ${DATABASE_NAME}
```

```
create table if not exists ${DATABASE_NAME}.${TABLE_NAME}(
  ${FIELD_1} ${DATA_TYPE},
  ...
)
partitioned by (
  ${PARTITION_FIELD_1} ${DATA_TYPE},
  ...
)
stored as orc;
```

Exalpme:
```
create table if not exists tdata.t2_prt(
  f1 STRING,
  f2 INT
)
partitioned by (
  src STRING,
  dt STRING
)
stored as orc;
```

```
INSERT INTO table tdata.t2_prt
  PARTITION (
    src = 'in',
    dt = '20180103'
  )
  VALUES
    ("a1", 56),
    ("a3", 79)
;
```

```
truncate table ${DATABASE_NAME}.${TABLE_NAME}
```

truncate table sbx.tdata_enc_gn_up_orc partition (par_dt='20180910')

```
SELECT COUNT(*) FROM ${DATABASE_NAME}.${TABLE_NAME}
```

```
SELECT ${COLUMN_NAME}, COUNT(*) FROM ${DATABASE_NAME}.${TABLE_NAME} GROUP BY ${COLUMN_NAME} ORDER BY ${COLUMN_NAME}
```

export table sbx.tdata_enc_sqoop_contracts to '/tmp/exported/tdata_enc_sqoop_contracts'
