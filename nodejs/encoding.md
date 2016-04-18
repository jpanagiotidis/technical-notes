# NodeJS encoding

## Encode
```
var b64 = new Buffer('Some string').toString('base64');
```

## Decode
```
var u = new Buffer(b64, 'base64').toString('utf8');
```
