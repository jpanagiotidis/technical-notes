# Solr Queries

## All collection documents
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=*:*
```

## Query on field
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=[FIELD_NAME]:[QUERY_TERM]
```

## Search on all fields
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=[QUERY_TERM]
```

## Has phrase
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=[FIELD_NAME]:"[PHRASE_TERM]"
```

## Term inclusion or exclusion
For mandatory terms prefix with + (%2B)
For excluded terms prefix with -
Separate terms by space character (%20)

### Example:
```
curl "http://localhost:8983/solr/films/select?q=%2Bparty%20%2Bdude&fl=name&rows=20"
```

## Display specific fields
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=[QUERY]&fl=[FIELD_NAME_A],[FIELD_NAME_B]
```

## Set num of returned results
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=[QUERY]&rows=[NUM]
```

## Facets
### Count by field values
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=*:*&rows=0&facet=true&facet.field=[FIELD_NAME]
```

### Range facets
```
HTTP GET [HOST]/[HOST]/solr/[COLLECTION_NAME]/select?q=*:*&rows=0
  &facet=true
  &facet.range=[FIELD_NAME]
  &facet.range.start=[RANGE_START]
  &facet.range.end=[RANGE_END]
  &facet.range.gap=[RANGE_STEP]
```

### Example
```
curl 'http://localhost:8983/solr/films/select?q=*:*&rows=0&facet=true&facet.range=initial_release_date&facet.range.start=NOW-20YEAR&facet.range.end=NOW&facet.range.gap=%2B1YEAR'
```

## Pivot facets
```
HTTP GET [HOST]/solr/[COLLECTION_NAME]/select?q=*:*&rows=0
  &facet=on
  &facet.pivot=genre_str,directed_by_str
```

### Example
```
http://localhost:8984/solr/films/select?q=*:*&rows=0&facet=on&facet.pivot=genre_str,directed_by_str
```
