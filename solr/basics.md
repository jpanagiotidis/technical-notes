# Solr basics

## Create collection
* ***s:*** Number of sharding
* ***rf:*** Replication factor
```
bin/solr create -c [COLLECTION_NAME] -s [NUM] -rf [NUM]
```

## Index data
```
bin/post -c [COLLECTION_NAME] [PATH]
```
Path can be a single file or a directory with files

## Delete collection
```
bin/solr delete -c [COLLECTION_NAME]
```

## Stop all solr nodes
```
bin/solr stop -all
```
