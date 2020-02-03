# HIVE Complex structures
## Map
### Create table
```
CREATE TABLE `test_map`(
    `id` string,
    `skills` map<string, string>
);
```
### Insert single value
```
insert into table test_map 
select 
    '1' as id,
    map('a.b.c', 'aaa', 'd.e.f', '23') as skills;
```

Another value
```
insert into table test_map 
select 
    '2' as id,
    map('d.e.f', '23444') as skills;
```
### Query specific key
```
select id, skills['a.b.c'] from test_map;
```
#### Result
```
+-----+-------+
| id  |  _c1  |
+-----+-------+
| a   | aaa   |
| 2   | NULL  |
+-----+-------+
```

### Explode map
#### Query 1
```
select explode(skills) from test_map;
```
##### Result
```
+--------+--------+
|  key   | value  |
+--------+--------+
| a.b.c  | aaa    |
| d.e.f  | 23     |
| d.e.f  | 23444  |
+--------+--------+
```

#### Query 2
```
select
    test_map.id as id,
    skills.key as key,
    skills.value as value
from test_map
lateral view explode(test_map.skills) skills;
```
##### Result
```
+-----+--------+--------+
| id  |  key   | value  |
+-----+--------+--------+
| a   | a.b.c  | aaa    |
| a   | d.e.f  | 23     |
| 2   | d.e.f  | 23444  |
+-----+--------+--------+
```

## Structs

### Simple struct
#### Create Statement
```
CREATE TABLE `t1`(
    `id` string,
    `intent` struct<
        name:string,
        confidence:double
    >
);
```
#### Insert statement
```
insert into table t1 
select 
    'a' as id, 
    named_struct(
        'name', 'yy', 
        'confidence', 0.234d
    ) as intent;
```
### Nested structs
#### Create Nested Struct A Statement
```
CREATE TABLE `t2`(
    `id` string,
    `intent` struct<
        name:string,
        confidence:double,
        entities:array<
            struct<
                id:string
            >
        >
    >
);
```
##### Insert statement
```
insert into table t2 
select 
    'a' as id, 
    named_struct(
        'name', 'yy', 
        'confidence', 0.234d, 
        'entities', array(
            named_struct('id', 'i1'), 
            named_struct('id', 'i2')
        )
    ) as intent;
```
#### Create Nested Struct B Statement (Complex example)
```
CREATE TABLE `t10`(
    `id` string,
    `intent` struct<
        name:string,
        confidence:double,
        entities:array<
            struct<
                id:string,
                valuesList:array<
                    struct<
                        value:string,
                        literal:string
                    >
                >
            >
        >
    >,
    `candidateintents` array<struct<
        name:string,
        confidence:double,
        entities:array<struct<
            id:string,
            valuesList:array<struct<
                value:string,
                literal:string
            >>
        >>
    >>
);
```
##### Inser statements
```
insert into table t10
select 
    '001' as id, 
    named_struct(
        'name', 'play song', 
        'confidence', 0.9d, 
        'entities', array(
            named_struct(
                'id', 'a1',
                'valueslist', array(
                    named_struct(
                        "value", "a1_1value",
                        "literal", "a1_1literal"
                    ),
                    named_struct(
                        "value", "a1_2value",
                        "literal", "a1_2literal"
                    ),
                    named_struct(
                        "value", "a1_3value",
                        "literal", "a1_3literal"
                    ),
                    named_struct(
                        "value", "a1_4value",
                        "literal", "a1_4literal"
                    )
                )
            ), 
            named_struct(
                'id', 'a2',
                'valueslist', array(
                    named_struct(
                        "value", "a2_1value",
                        "literal", "a2_1literal"
                    ),
                    named_struct(
                        "value", "a2_2value",
                        "literal", "a2_2literal"
                    )
                )
            )
        )
    ) as intent,
    array(
        named_struct(
            'name', 'open door', 
            'confidence', 0.1d, 
            'entities', array(
                named_struct(
                    'id', 'a3',
                    'valueslist', array(
                        named_struct(
                            "value", "a3_1value",
                            "literal", "a3_1literal"
                        ),
                        named_struct(
                            "value", "a3_2value",
                            "literal", "a3_2literal"
                        ),
                        named_struct(
                            "value", "a3_3value",
                            "literal", "a3_3literal"
                        ),
                        named_struct(
                            "value", "a3_4value",
                            "literal", "a3_4literal"
                        )
                    )
                ), 
                named_struct(
                    'id', 'a4',
                    'valueslist', array(
                        named_struct(
                            "value", "a4_1value",
                            "literal", "a4_1literal"
                        ),
                        named_struct(
                            "value", "a4_2value",
                            "literal", "a4_2literal"
                        )
                    )
                )
            )
        ),
        named_struct(
            'name', 'download got', 
            'confidence', 0.3d, 
            'entities', array(
                named_struct(
                    'id', 'a5',
                    'valueslist', array(
                        named_struct(
                            "value", "a5_1value",
                            "literal", "a5_1literal"
                        ),
                        named_struct(
                            "value", "a5_2value",
                            "literal", "a5_2literal"
                        ),
                        named_struct(
                            "value", "a5_3value",
                            "literal", "a5_3literal"
                        ),
                        named_struct(
                            "value", "a5_4value",
                            "literal", "a5_4literal"
                        )
                    )
                ), 
                named_struct(
                    'id', 'a6',
                    'valueslist', array(
                        named_struct(
                            "value", "a6_1value",
                            "literal", "a6_1literal"
                        ),
                        named_struct(
                            "value", "a6_2value",
                            "literal", "a6_2literal"
                        )
                    )
                )
            )
        ),
        named_struct(
            'name', 'open tv', 
            'confidence', 0.2d, 
            'entities', array(
                named_struct(
                    'id', 'a7',
                    'valueslist', array(
                        named_struct(
                            "value", "a7_1value",
                            "literal", "a7_1literal"
                        ),
                        named_struct(
                            "value", "a7_2value",
                            "literal", "a7_2literal"
                        ),
                        named_struct(
                            "value", "a7_3value",
                            "literal", "a7_3literal"
                        ),
                        named_struct(
                            "value", "a7_4value",
                            "literal", "a7_4literal"
                        )
                    )
                ), 
                named_struct(
                    'id', 'a8',
                    'valueslist', array(
                        named_struct(
                            "value", "a8_1value",
                            "literal", "a8_1literal"
                        ),
                        named_struct(
                            "value", "a8_2value",
                            "literal", "a8_2literal"
                        )
                    )
                )
            )
        )
    ) as candidateIntents;
```
##### Query 1
```
select 
    t10.id as intent_id, 
    t10.intent.name as intent_name, 
    t10.intent.confidence as intent_confidence, 
    v1.id as entity_id,
    v2.value as value,
    v2.literal as literal
from t10
lateral view explode(t10.intent.entities) cand2 as v1
lateral view explode(v1.valuesList) cand3 as v2;
```
###### Result
```
+------------+--------------+--------------------+------------+------------+--------------+
| intent_id  | intent_name  | intent_confidence  | entity_id  |   value    |   literal    |
+------------+--------------+--------------------+------------+------------+--------------+
| 001        | play song    | 0.9                | a1         | a1_1value  | a1_1literal  |
| 001        | play song    | 0.9                | a1         | a1_2value  | a1_2literal  |
| 001        | play song    | 0.9                | a1         | a1_3value  | a1_3literal  |
| 001        | play song    | 0.9                | a1         | a1_4value  | a1_4literal  |
| 001        | play song    | 0.9                | a2         | a2_1value  | a2_1literal  |
| 001        | play song    | 0.9                | a2         | a2_2value  | a2_2literal  |
+------------+--------------+--------------------+------------+------------+--------------+
```
##### Query 2
```
select 
    t10.id as candidate_intent_id, 
    v1.name as candidate_intent_name, 
    v1.confidence as candidate_intent_confidence, 
    v2.id as entity_id,
    v3.value as value,
    v3.literal as literal
from t10
lateral view explode(t10.candidateIntents) cand as v1
lateral view explode(v1.entities) cand2 as v2
lateral view explode(v2.valuesList) cand3 as v3;
```
###### Result
```
+----------------------+------------------------+------------------------------+------------+------------+--------------+
| candidate_intent_id  | candidate_intent_name  | candidate_intent_confidence  | entity_id  |   value    |   literal    |
+----------------------+------------------------+------------------------------+------------+------------+--------------+
| 001                  | open door              | 0.1                          | a3         | a3_1value  | a3_1literal  |
| 001                  | open door              | 0.1                          | a3         | a3_2value  | a3_2literal  |
| 001                  | open door              | 0.1                          | a3         | a3_3value  | a3_3literal  |
| 001                  | open door              | 0.1                          | a3         | a3_4value  | a3_4literal  |
| 001                  | open door              | 0.1                          | a4         | a4_1value  | a4_1literal  |
| 001                  | open door              | 0.1                          | a4         | a4_2value  | a4_2literal  |
| 001                  | download got           | 0.3                          | a5         | a5_1value  | a5_1literal  |
| 001                  | download got           | 0.3                          | a5         | a5_2value  | a5_2literal  |
| 001                  | download got           | 0.3                          | a5         | a5_3value  | a5_3literal  |
| 001                  | download got           | 0.3                          | a5         | a5_4value  | a5_4literal  |
| 001                  | download got           | 0.3                          | a6         | a6_1value  | a6_1literal  |
| 001                  | download got           | 0.3                          | a6         | a6_2value  | a6_2literal  |
| 001                  | open tv                | 0.2                          | a7         | a7_1value  | a7_1literal  |
| 001                  | open tv                | 0.2                          | a7         | a7_2value  | a7_2literal  |
| 001                  | open tv                | 0.2                          | a7         | a7_3value  | a7_3literal  |
| 001                  | open tv                | 0.2                          | a7         | a7_4value  | a7_4literal  |
| 001                  | open tv                | 0.2                          | a8         | a8_1value  | a8_1literal  |
| 001                  | open tv                | 0.2                          | a8         | a8_2value  | a8_2literal  |
+----------------------+------------------------+------------------------------+------------+------------+--------------+
```