# Kafkacat

## List brokers and topics
```
kafkacat -L -b ${BROKER_IP}:${BROKER_PORT}[,${BROKER_IP}:${BROKER_PORT}...]
```
Example:
```
kafkacat -L -b 10.95.15.28:32774,10.95.15.28:32775
```

## Producer
```
kafkacat -b ${BROKER_IP}:${BROKER_PORT}[,${BROKER_IP}:${BROKER_PORT}...] -P -t ${TOPIC_NAME}
```
Example:
```
kafkacat -b 10.95.15.28:32774,10.95.15.28:32775 -P -t test
```

## Consumer
```
kafkacat -b ${BROKER_IP}:${BROKER_PORT}[,${BROKER_IP}:${BROKER_PORT}...] -C -t ${TOPIC_NAME}
```
Example:
```
kafkacat -b 10.95.15.28:32774,10.95.15.28:32775 -C -t test
```
