# CloudWatchLogs

## Describe logs (describeLogGroups)

### Responses
```
{ logGroups:
   [ { logGroupName: 'LocalDev6',
       creationTime: 1485950181892,
       metricFilterCount: 0,
       arn: 'arn:aws:logs:eu-west-1:142551973715:log-group:LocalDev6:*',
       storedBytes: 0 },
     { logGroupName: 'LocalDev7',
       creationTime: 1485898239170,
       metricFilterCount: 0,
       arn: 'arn:aws:logs:eu-west-1:142551973715:log-group:LocalDev7:*',
       storedBytes: 0 } ] }
```

```
message: '2 validation errors detected: Value \'\' at \'logGroupNamePrefix\' failed to satisfy constraint: Member must satisfy regular expression pattern: [\\.\\-_/#A-Za-z0-9]+; Value \'\' at \'logGroupNamePrefix\' failed to satisfy constraint: Member must have length greater than or equal to 1',
  code: 'InvalidParameterException',
  time: 2017-02-01T11:54:19.112Z,
  requestId: '29bcde63-e875-11e6-a5d2-7fb89dfe0b48',
  statusCode: 400,
  retryable: false,
  retryDelay: 2.6767614842192478
```

## Create group (createLogGroup)
### Responses
#### On success
```
{}
```

#### Group exists
```
message: 'The specified log group already exists',
  code: 'ResourceAlreadyExistsException',
  time: 2017-02-01T12:05:01.042Z,
  requestId: 'a85a649e-e876-11e6-bc80-454faba9200b',
  statusCode: 400,
  retryable: false,
  retryDelay: 27.09033178736755
```

## Describe streams (describeLogStreams)
```
{ logStreams:
   [ { logStreamName: 'ddd',
       creationTime: 1485901325273,
       firstEventTimestamp: 1485037467756,
       lastEventTimestamp: 1485901248566,
       lastIngestionTime: 1485901369011,
       uploadSequenceToken: '49568569859508197054853051122403901866406831824046130898',
       arn: 'arn:aws:logs:eu-west-1:142551973715:log-group:LocalDev7:log-stream:ddd',
       storedBytes: 0 } ] }
```

```
message: 'The specified log group does not exist.',
  code: 'ResourceNotFoundException',
  time: 2017-02-01T17:31:10.932Z,
  requestId: '390295ff-e8a4-11e6-84e8-8d6ece65d661',
  statusCode: 400,
  retryable: false,
  retryDelay: 16.23351528824415
```

## Create stream
```
{}
```

## Put Logs
```
{ nextSequenceToken: '49559325472080361220761236344313001280201079220993004546' }
```

```
message: 'The given batch of log events has already been accepted. The next batch can be sent with sequenceToken: 49559325472080361220761236344313001280201079220993004546',
  code: 'DataAlreadyAcceptedException',
  time: 2017-02-01T18:34:51.660Z,
  requestId: '1e3ae05b-e8ad-11e6-bc80-454faba9200b',
  statusCode: 400,
  retryable: false,
  retryDelay: 58.78178850492215
```
