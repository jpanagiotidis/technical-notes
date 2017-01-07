# Apache Bench
## Installation
```
apt-get install apache2-utils
```

## POST with json payload
```
ab -n 10000 \
-c 100 \
-T 'application/json' \
-p 'payloads/a.json' \
http://localhost:3000/empty
```
