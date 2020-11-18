# Kafka Operations

## Create topic
```
sh kafka-topics.sh \
    --bootstrap-server ${BROKER_IP}:${BROKER_PORT} \
    --create \
    --topic ${TOPIC_NAME} \
    --partitions ${PARTITIONS_NUMBER} \
    --replication-factor ${REPLICATION_NUMBER} \
    --if-not-exists
```

## List topics
```
sh kafka-topics.sh \
    --bootstrap-server ${BROKER_IP}:${BROKER_PORT} \
    --list
```

## Describe topic
```
sh kafka-topics.sh \
    --bootstrap-server ${BROKER_IP}:${BROKER_PORT} \
    --describe \
    --topic ${TOPIC_NAME}
```

## Delete topic
```
sh kafka-topics.sh \
    --bootstrap-server ${BROKER_IP}:${BROKER_PORT} \
    --delete \
    --topic ${TOPIC_NAME}
```

## Consume topic
```
sh kafka-console-consumer.sh \
    --bootstrap-server ${BROKER_IP}:${BROKER_PORT} \
    --topic ${TOPIC_NAME} \
    --from-beginning 
```