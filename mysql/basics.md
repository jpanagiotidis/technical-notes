## Login mysql
```
mysql -u [username] -p;
```

## Exit mysql
```
exit
```

## Create database
```
CREATE DATABASE [db_name]
CREATE DATABASE IF NOT EXISTS [db_name]
```

## Show databases
```
SHOW DATABASES;
```

## Switch database
```
USE [database_name];
```

## View selected database
```
SELECT DATABASE();
```

## Show tables
```
SHOW TABLES;
```

## Show all rows of a table
```
SELECT * FROM [table_name];
SELECT [column_name,column_name,...] FROM [table_name];
SELECT * FROM [table_name] ORDER BY [column_name];
SELECT * FROM [table_name] ORDER BY [column_name] DESC;
SELECT * FROM [table_name] LIMIT [number];
SELECT * FROM [table_name] WHERE [column_name] = "value";
SELECT * FROM [table_name] WHERE [column_name] = "value" AND [other_column_name] = "other_value";
```

## Delete all rows of a table
```
truncate [table_name];
```

## Show users and host
```
select user,host from mysql.user;
```

## Show user permissions
```
show grants for [user_name]@[host];
```

## Export and import database
### export
```
mysqldump -u [username] -p [database_name] > [dumpfilename.sql]
mysqldump -P [port] -h [ip] -u [username] -p [database_name] > [dumpfilename.sql]
```
### export with stored procedures and functions
```
mysqldump -u [username] -p [database_name] --routines > [dumpfilename.sql]
```
### export only stored procedures and triggers
```
mysqldump --routines --no-create-info --no-data --no-create-db --skip-opt [database_name] > [dumpfilename.sql]
```
### import
```
mysql -u [username] -p [database_name] < [dumpfilename.sql]
```

## View configuration
```
show global variables;
```
or search for more specific variables
```
show global variables like 'max_%';
```
