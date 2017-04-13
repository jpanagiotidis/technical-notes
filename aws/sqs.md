# AWS SQS

## sendMessage

### response on success
```
{ ResponseMetadata: { RequestId: 'f56a95a1-9c9a-5e1b-9528-c55c436c242f' },
  MD5OfMessageBody: 'ffa3ca183028fe4cf7d6f32bb290bceb',
  MessageId: '8e2b4104-423c-46f0-b718-62616b6918d6' }
```

### error example
```
{ [AWS.SimpleQueueService.NonExistentQueue: The specified queue does not exist for this wsdl version.]
message: 'The specified queue does not exist for this wsdl version.',
code: 'AWS.SimpleQueueService.NonExistentQueue',
time: Sun Jan 22 2017 00:18:23 GMT+0200 (EET),
requestId: '9506a769-d049-5ce7-a3bb-f7943026e3fa',
statusCode: 400,
retryable: false,
retryDelay: 20.15042775310576 }
```

## receiveMessage
```
{ ResponseMetadata: { RequestId: '36382371-6409-5e22-b73f-7278167a60c8' },
  Messages:
   [ { MessageId: 'bdc8db35-14d7-469c-8ae0-452e46b9bfe0',
       ReceiptHandle: 'AQEBE/+0cPLYJBQS3+MSLtW51kCCjJiKg/SzNL1Y5G4ml8xLVpzaUhpH92QptKd0K97YiiVpEmvAew7HzZIJiFxBivhb34A5ecByge4jJAPGgk3SubfPy6bjFKe713j82HOFzSF621sQlvel2YZpJ/uVE4717kbyqDEw89B2YI9BNU/BhVZe8uIrdW0mNZYxLSiGm+hxVYyymHURFuIMl/UHtmNt31pS7gmmpuAin0ntPQiXvKcpiI3kF/CG0OkfVRIjlw+ACyFwoGdsrYJ/7Wd+7M1hrCT1GVsvDKZbJG3MLabBLTvmktfOXi69NbJOLedQCwyZ5JJ+Ryz0HTRuJ0MwdTlnuUW8C9ntb+sUZFhfNjeRdX3+z1PSzmMmrDGNxWYfkHND5OR4ep13Zp5oJKAyew==',
       MD5OfBody: 'c0ad0f516e4cb3b7188b6a75cc90704b',
       Body: '{"TYPE":"AUDIT","NUM":60,"TIME":"2017-01-30T16:35:00.789Z"}' },
     { MessageId: 'bef7d297-8ff7-464f-a364-659002e964ec',
       ReceiptHandle: 'AQEBMS6id97ZMtmuxl237ZvjjiAcJHm0gWvYQoiPbGNyQ7cciiPKz1FiXT/tv/QoVur+LecvMXKoaJ65O4c82mpvzaUz5SembTKTA1bWgdY7+gon7JWvFz8GGFQStfjgQZ7yVukcfuVvlfCS44r+2HWrNA4tRrcOMaGJEmesaog14tvIopq/EtE2Px03cvC+TFLNhjR7G/dRRHIr3wyBEocO7TVbK6VWy0Ab6eI+9FrX2LyQlVNprmVQXvTXf7F994iNpXEJw10NMa8/zIgoU8ent861nxBPfmxXljTa67LFeBbC5pLj70F4cJPLh9JUvL7TVRBCe4+VVyl6AAMUf5QZWag57dnDkHLk9chCueKlLftdW5ZKiFPqHlH5t9QmCBHWl05E0bbdcgx+iu959TNRPQ==',
       MD5OfBody: '8cd00adba036afe7ab85bb4231714103',
       Body: '{"TYPE":"AUDIT","NUM":27,"TIME":"2017-01-30T16:35:00.800Z"}' } ] }
```
