# HIVE Playground

## Installation
* Clone [BDE-HIVE](https://github.com/big-data-europe/docker-hive) repo
* Change directory to the repo root
* ```docker-compose up```

## Querying
* ```docker exec -it docker-hive_hive-server_1 bash```
* ```beeline -u jdbc:hive2://localhost:10000/default```