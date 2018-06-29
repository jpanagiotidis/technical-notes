# Pig example
Calculate gamer weighted score.

1. Create tables on Hive
```
CREATE TABLE IF NOT EXISTS plays(
    name STRING,
    score INT,
    gameId INT
  )
  STORED AS ORC;
```

```
CREATE TABLE IF NOT EXISTS games(
    id INT,
    title STRING,
    difficulty INT
  )
  STORED AS ORC;
```

```
CREATE TABLE IF NOT EXISTS gamers_rank(
    name STRING,
    rank DOUBLE
  )
  STORED AS ORC;
```

1. Insert values on Hive
```
INSERT INTO table plays (name, score, gameid)
  VALUES  ("jon", 56, 2),
          ("mike", 88, 2),
          ("maria", 89, 1),
          ("jon", 79, 1),
          ("nick", 90, 1),
          ("jon", 82, 3),
          ("maria", 92, 2),
          ("nick", 87, 1);
```

```
INSERT INTO table games (id, title, difficulty)
  VALUES  (1, 'pac-man', 78),
          (2, 'puzzle bubble', 78),
          (3, 'tetris', 78);
```

1. Run Pig script to calculate weighted score per gamer
```
t1 = LOAD 'plays' USING org.apache.hive.hcatalog.pig.HCatLoader();
g = LOAD 'games' USING org.apache.hive.hcatalog.pig.HCatLoader();
t2 = filter t1 by score >= 85;
t3 = foreach t2 generate name, score, gameid, (int) '1' as occurance;
t4 = join t3 by gameid, g by id;
t5 = foreach t4 generate $0 as name, $1 as score, $5 as game, (float) $1*$6/100 as weightedscore;
t6 = group t5 by name;
DUMP t6;
t7 = foreach t6 generate group as name, AVG(t5.weightedscore) as rank;
t8 = order t7 by rank DESC;
DUMP t8;
store t8 into 'gamers_rank' using org.apache.hive.hcatalog.pig.HCatStorer();
```

Use as argument:
```
-useHCatalog
```

1. Pig output:
DUMP t6;
```
(mike,{(mike,88,puzzle bubble,68.64)})
(nick,{(nick,90,pac-man,70.2),(nick,87,pac-man,67.86)})
(maria,{(maria,89,pac-man,69.42),(maria,92,puzzle bubble,71.76)})
```

DUMP t7;
```
(mike,68.63999938964844)
(nick,69.02999877929688)
(maria,70.59000015258789)
```
