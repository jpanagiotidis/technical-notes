# Spark REPL examples

## RDD filter strings
```
val stringsRdd = sc.parallelize(Array("Python", "JavaScript", "Java", "Scala", "JavaScript"));
val filteredRdd = stringsRdd.filter(x => x.startsWith("J"));
val list = filteredRdd.collect;
```

## RDD count words
```
val stringsRdd = sc.parallelize(Array("Python", "JavaScript", "Java", "Scala", "JavaScript"));
val pairRdd = stringsRdd.map(s => (s,1));
val wordCountRdd = pairRdd.reduceByKey((x,y) => x + y);
val list = wordCountRdd.collect;
```

## RDD sum
```
val intRdd = sc.parallelize(Array(1,4,5,6,7,10,15));
val evenNumsRdd = intRdd.filter(x => x%2 == 0);
val sum = evenNumsRdd.sum
```

## Word count from file
```
val file = sc.textFile("/usr/data-sets/txt/hhgttg.txt");
val flattenFile = file.flatMap(s => s.split(" "));
val pairRdd = flattenFile.map(s => (s,1));
val wordCountRdd = pairRdd.reduceByKey((x,y) => x + y);
val list = wordCountRdd.collect;
```

## Cache RDD
```
val file = sc.textFile("/usr/data-sets/txt/hhgttg.txt");
file.cache;
file.collect;
```

## SparkSQL example
```
import org.apache.spark.sql.SparkSession
import spark.implicits._
val spark = SparkSession.builder().appName("Spark SQL basic example").getOrCreate();
val df = spark.read.json("/spark/examples/src/main/resources/people.json");
df.createOrReplaceTempView("people");
val sqlDf = spark.sql("SELECT * FROM people");
sqlDf.show();
```

## Streaming example
```
nc -lk 10000
```

```
./spark/bin/run-example streaming.NetworkWordCount localhost 10000
```
