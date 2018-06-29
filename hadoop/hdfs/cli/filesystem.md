# HDFS File system manipulation
[Documentation](https://hadoop.apache.org/docs/r2.7.1/hadoop-project-dist/hadoop-common/FileSystemShell.html)

## List files
```
hdfs dfs -ls /some/path
```

## List files recursively (deprecated)
```
hdfs dfs -lsr /some/path
```

## Create directory
```
hdfs dfs -mkdir /some/path/abc/
```

## Create directory and parent folders
```
hdfs dfs -mkdir -p /some/path/abc/def/ghi/jkl
```

## Upload file
```
hdfs dfs -put /local/path /hdfs/parh
```
