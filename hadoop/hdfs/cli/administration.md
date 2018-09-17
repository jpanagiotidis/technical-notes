# HDFS administration
[Link](https://hadoop.apache.org/docs/r2.7.5/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html)

## Version
```
hdfs version
```

## Report
```
sudo su hdfs -l -c 'hdfs dfsadmin -report'
```

## Print cluster topology
```
sudo su hdfs -l -c 'hdfs dfsadmin -printTopology'
```

## Balancer
Rebalances the datanode's blocks.
[Guide+Design](https://issues.apache.org/jira/browse/HADOOP-1652)
```
sudo su hdfs -l -c 'hdfs balancer'
```

## Check for filesystem inconsistencies
```
hdfs fsck /hdfs/path
```

## Check files blocks metadata
```
hdfs fsck /hdfs/path -files -blocks -locations
```

## Enter safe mode (read-only)
```
sudo su hdfs -l -c 'hdfs dfsadmin -safemode enter'
```

## Exit safe mode
```
sudo su hdfs -l -c 'hdfs dfsadmin -safemode leave'
```

## Create checkpoint
```
sudo su hdfs -l -c 'hdfs dfsadmin -saveNamespace'
```
Must run in Safe Mode
