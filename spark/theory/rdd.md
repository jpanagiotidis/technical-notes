# RDD
RDD is a read-only, partitioned collection of records. RDDs can only be created through deterministic operations on either:
  * data in stable storage
  * other RDDs

## RDD Operations
### Transformations
Always return another RDD. (Examples: map, filter, groupByKey)
Transformations are lazy. They are executed only after an action is called. All RDD can be reconstructed after a failure by applying the previous transformation on the RDD parent(s).
a program cannot reference an RDD that it cannot reconstruct after a failure.
### Actions
Always return a value (not RDD) (Examples: reduce, count, sum)

## Persistence
Users can indicate which RDDs they will reuse and choose a storage strategy for them.

### Storing strategies
Storage Level | Description
--- | ---
MEMORY_ONLY | Store RDD as deserialized Java objects in the JVM. If the RDD does not fit in memory, some partitions will not be cached and will be recomputed on the fly each time they are needed. This is the default level.
MEMORY_AND_DISK | Store RDD as deserialized Java objects in the JVM. If the RDD does not fit in memory, store the partitions that don't fit on disk, and read them from there when they're needed.
MEMORY_ONLY_SER | Store RDD as serialized Java objects (one byte array per partition). This is generally more space-efficient than deserialized objects, especially when using a fast serializer, but more CPU-intensive to read.
MEMORY_AND_DISK_SER | Similar to MEMORY_ONLY_SER, but spill partitions that don't fit in memory to disk instead of recomputing them on the fly each time they're needed.
DISK_ONLY | Store the RDD partitions only on disk.
MEMORY_ONLY_2, MEMORY_AND_DISK_2, etc. | Same as the levels above, but replicate each partition on two cluster nodes.
OFF_HEAP (experimental) |

### Partitioning

## Partition Dependency
Dependency on partition of the parent RDD

### Narrow Dependency
If each partition of the generated RDD depends on a fixed partition of the parent RDD then it's called a narrow dependency.

#### Examples
map, filter

### Wide dependency
Operations where the generated RDD depends on multiple partitions of the parent RDD

#### Examples
groupByKey, sortByKey
