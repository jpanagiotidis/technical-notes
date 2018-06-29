# Streams
A collection of elements on which a chain of aggregate operations can be performed lazily.
A stream consist of
* source (IO, collection)
* 1 or more intermediate operations
* 1 terminal operation

## Stream sources
* IO channel (file, streaming)
* In memory collection
* Infinite sequence generator

## Operations
There are 2 types of operations:
* Intermediate operations
* Terminal operation

### Short-circuiting operations
Operations that can handle an infinite stream.
For intermediate operations this means that a finite stream is returned (example limit).
Short-circuiting terminal operations terminate in finite time with either void or a non-stream value (example anyMatch or findAny).

### Intermediate operations
Returns another stream
Lazily evaluated only upon terminal operation

#### Stateful and stateless

##### Stateful operations
Preserve the last seen value (examples: sorted, limit, sequential)

#### Stateless operation
Doesn't preserve any value (examples: peek, map, filter)

## Terminal Operations
Terminal operations act as the trigger point in a pipelined stream operation to trigger execution.

## Parallel and Sequential streams
Streams support parallelism. However in case of stateful streams, multiple passes are required in order to obtain the correct result.

## Methods overview
Method | Intermediate operation | Terminal Operation | Short Circuiting | Stateful | Stateless
--- | --- | --- | --- | ---
filter | Yes | No | No | No | Yes
map | Yes | No | No | No | Yes
flatMap | Yes | No | No | No | Yes
distinct | Yes | No | No | Yes | No
sorted | Yes | No | No | Yes | No
forEach | No | Yes | No | No | Yes
peek | Yes | No | No | No | Yes
limit | Yes | No | Yes | Yes | No
toArray | No | Yes | No | No | Yes
reduce | No | Yes | No | No | Yes
collect | No | Yes | No | No | Yes
max | No | Yes | No | No | No
min | No | Yes | No | No | No
anyMatch | No | Yes | Yes | No | No
findFirst | No | Yes | Yes | No | No
sequential | Yes | No | No | No | No
parallel | Yes | No | No | No | No
