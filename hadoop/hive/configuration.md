hive.exec.mode.local.auto | Hive will attempt to run other operations in local mode if the hive.exec.mode.local.auto property is set to true |
hive.exec.dynamic.partition | Set to true to enable dynamic partitioning. | false
hive.exec.dynamic.partition.mode | Set to nonstrict to enable all partitions to be determined dynamically. | strict
hive.exec.max.dynamic.partitions.pernode | The maximum number of dynamic partitions that can be created by each mapper or reducer. Raises a fatal error if one mapper or reducer attempts to create more than the threshold.| 100
hive.exec.max.dynamic.partitions | The total number of dynamic partitions that can be created by one statement with dynamic partitioning. Raises a fatal error if the limit is exceeded. | +1000
hive.exec.max.created.files | The maximum total number of files that can be created globally. A Hadoop counter is used to track the number of files created. Raises a fatal error if the limit is exceeded. | 100000
Default
