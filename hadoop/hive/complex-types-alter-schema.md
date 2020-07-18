https://www.tutorialscampus.com/tutorials/hive/alter-table.htm

ALTER TABLE [old_db_name.]old_table_name RENAME TO [new_db_name.]new_table_name;

ALTER TABLE name ADD COLUMNS (col_spec[, col_spec ...]);

ALTER TABLE name DROP [COLUMN] column_name;

ALTER TABLE name CHANGE column_name new_name new_type;

ALTER TABLE name REPLACE COLUMNS (col_spec[, col_spec ...]);

ALTER TABLE name { ADD | DROP } PARTITION (partition_spec);

ALTER TABLE name [PARTITION (partition_spec)]
SET { FILEFORMAT PARQUET | TEXTFILE | RCFILE | SEQUENCEFILE | AVRO
| LOCATION 'hdfs_path_of_directory'
| TBLPROPERTIES (table_properties)
| SERDEPROPERTIES (serde_properties) };

ALTER TABLE name [PARTITION (partition_spec)] SET { CACHED IN 'pool_name' | UNCACHED };

The below are the detailed options in the above syntax.


col_spec ::= col_name type_name

partition_spec ::= partition_col=constant_value

table_properties ::= 'name'='value'[, 'name'='value' ...]

serde_properties ::= 'name'='value'[, 'name'='value' ...]


CREATE TABLE some_db.t1 (
    id string,
    intent struct<
        name:string,
        confidence:double
    >
);

insert into table some_db.t1
values
    (
        'aaa', 
        named_struct(
            'name', 'Jon', 
            'confidence', 0.234d
        )
    ),
    (
        'bbb', 
        named_struct(
            'name', 'Maria', 
            'confidence', 0.001d
        )
    )
;

select * from some_db.t1;

ALTER TABLE some_db.t1
CHANGE COLUMN intent intent STRUCT<
    name: string,
    confidence:double,
    team: string
>;

insert into table some_db.t1
values
    (
        'ccc', 
        named_struct(
            'name', 'Kostas', 
            'confidence', 0.234d,
            'team', 'Paok'
        )
    ),
    (
        'ddd', 
        named_struct(
            'name', 'Vasiliki', 
            'confidence', 0.001d,
            'team', 'Aek'
        )
    )
;

ALTER TABLE some_db.t1
CHANGE COLUMN intent intent STRUCT<
    name: string,
    team: string
>;

ALTER TABLE some_db.t1
ADD COLUMNS (
    assignments ARRAY<STRUCT<
        name: string,
        hours: integer
    >>
);


insert into table some_db.t1
values
    (
        'eee', 
        named_struct(
            'name', 'Jake', 
            'confidence', 0.12d,
            'team', 'Arsenal'
        ),
        array(
            named_struct(
                'name', 'basket',
                'hours', 3
            ), 
            named_struct(
                'name', 'football',
                'hours', 2
            )
        )
    )
;

ALTER TABLE some_db.t1
CHANGE COLUMN assignments assignments ARRAY<STRUCT<
    name: string,
    hours: integer,
    minutes: integer
>>;