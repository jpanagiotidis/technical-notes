
```
CREATE TABLE `t1`(
    `id` string,
    `intent` struct<
        name:string,
        confidence:double
    >
);
```

```
insert into table t1 
select 
    'a' as id, 
    named_struct(
        'name', 'yy', 
        'confidence', 0.234d
    ) as intent;
```

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