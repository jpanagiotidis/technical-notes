# Join Optimizations

## Multiple joins to single MR job
If the same column is used for joins over multiple tables then they are converted into a single map/reduce job.
### Example:
```
SELECT a.val, b.val, c.val FROM a JOIN b ON (a.key = b.key1) JOIN c ON (c.key = b.key1);
```

Number of columns affect the number of MR jobs

The first tables of a join chain are buffered into memory and the rightmost is streamed row by row from hdfs. The largest table should be streamed. Use hint to specify streamed table.

```
hive.optimize.bucketmapjoin.sortedmerge=true
hive.enforce.bucketing = true
hive.ignore.mapjoin.hint=false
hive.optimize.bucketmapjoin=true
hive.auto.convert.join=true
hive.auto.convert.join.noconditionaltask
hive.optimize.bucketingsorting
hive.hashtable.key.count.adjustment
hive.merge.size.per.task
hive.mapjoin.followby.gby.localtask.max.memory.usage
hive.input.format=org.apache.hadoop.hive.ql.io.BucketizedHiveInputFormat;

```

hive.mapjoin.bucket.cache.size
hive.smbjoin.cache.rows
hive.mapjoin.followby.map.aggr.hash.percentmemory
hive.smalltable.filesize
hive.mapjoin.smalltable.filesize
hive.mapjoin.localtask.max.memory.usage
hive.mapjoin.followby.gby.localtask.max.memory.usage
hive.mapjoin.check.memory.rows
hive.ignore.mapjoin.hint
hive.smbjoin.cache.rows
hive.mapjoin.optimized.keys
hive.mapjoin.optimized.hashtable
hive.mapjoin.optimized.hashtable.wbsize
hive.mapjoin.lazy.hashtable
hive.hashtable.initialCapacity
hive.hashtable.key.count.adjustment
hive.hashtable.loadfactor

hive.debug.localtask

hive.auto.convert.join.noconditionaltask
hive.auto.convert.join.noconditionaltask.size


config_bucket_load = {
    "hive.enforce.bucketing": "true",
}

config_bucket_sorted_load = {
    "hive.enforce.bucketing": "true",
    "hive.enforce.sorting": "true",
}

config_bucket_map_join = {
    "hive.auto.convert.join": "true",
    "hive.optimize.bucketmapjoin": "true",
}

config_sort_merge_bucket_join = {
    "hive.input.format": "org.apache.hadoop.hive.ql.io.BucketizedHiveInputFormat",
    "hive.auto.convert.sortmerge.join": "true",
    "hive.optimize.bucketmapjoin": "true",
    "hive.optimize.bucketmapjoin.sortedmerge": "true",
    "hive.auto.convert.sortmerge.join.noconditionaltask": "true",
}

config_sort_merge_bucket_map_join = {
    "hive.auto.convert.join": "true",
    "hive.auto.convert.sortmerge.join": "true",
    "hive.optimize.bucketmapjoin": "true",
    "hive.optimize.bucketmapjoin.sortedmerge": "true",
    "hive.auto.convert.sortmerge.join.noconditionaltask": "true",
    "hive.auto.convert.sortmerge.join.bigtable.selection.policy": "org.apache.hadoop.hive.ql.optimizer.TableSizeBasedBigTableSelectorForAutoSMJ",
}

/*+ STREAMTABLE(s) */