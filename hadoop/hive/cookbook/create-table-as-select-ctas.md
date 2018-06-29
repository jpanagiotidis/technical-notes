# Hive Create table as select (CTAS)

1. Create init table
```
CREATE TABLE IF NOT EXISTS games(
    name STRING,
    score INT
  )
  STORED AS ORC;
```

1. Insert values
```
INSERT INTO table games (name, score)
  VALUES  ("jon", 56),
          ("mike", 88),
          ("jon", 79),
          ("jon", 82),
          ("maria", 92),
          ("nick", 90);
```

1. Create table as select (CTAS)
```
CREATE TABLE scores
STORED AS ORC
AS
SELECT name, avg(score) avg, count(1) games
FROM games
GROUP BY name;
```
