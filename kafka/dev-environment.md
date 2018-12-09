# Kafka DEV environment

## Kafka Docker
* [GitHub](https://github.com/wurstmeister/kafka-docker)
* [Connectivity](https://github.com/wurstmeister/kafka-docker/wiki/Connectivity)

### Repository
```
git clone https://github.com/wurstmeister/kafka-docker.git
```

### Single broker
1. Edit ```docker-compose-single-broker.yml``` and set ```KAFKA_ADVERTISED_HOST_NAME``` to ```127.0.0.1```
1. Run command:
```
docker-compose -f docker-compose-single-broker.yml up
```

### Multiple brokers
1. Edit ```docker-compose.yml``` and set ```KAFKA_ADVERTISED_HOST_NAME``` to the Docker host IP (as shown in the ```ifconfig``` active interface)
1. Run commands:
```
docker-compose up -d
docker-compose scale kafka=3
```
