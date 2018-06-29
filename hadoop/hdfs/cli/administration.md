# HDFS administration

## Create checkpoint

1. Put the NameNode in Safe Mode (read-only mode)
```
sudo su hdfs -l -c 'hdfs dfsadmin -safemode enter'
```

2. Once in Safe Mode, create a Checkpoint:
```
sudo su hdfs -l -c 'hdfs dfsadmin -saveNamespace'
```
