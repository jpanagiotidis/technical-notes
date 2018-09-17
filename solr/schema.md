# Solr Schema

## Add schema field
```
HTTP POST [HOST]/solr/[COLLECTION_NAME]/schema
{
  "add-field": {
    "name": [FIELD_NAME],
    "type": [FIELD_TYPE],
    "multiValued": [BOOLEAN],
    "stored": [BOOLEAN]
  }
}
```

### Example
```
curl -X POST -H 'Content-type:application/json' --data-binary '{"add-field": {"name":"name", "type":"text_general", "multiValued":false, "stored":true}}' http://localhost:8983/solr/films/schema
```

## Add copy field
```
HTTP POST [HOST]/solr/[COLLECTION_NAME]/schema
{
  "add-copy-field": {
    "source":"*",
    "dest":"_text_"
  }
}
```
### Example
```
curl -X POST -H 'Content-type:application/json' --data-binary '{"add-copy-field" : {"source":"*","dest":"_text_"}}' http://localhost:8983/solr/films/schema
```
